import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../../assets/style";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import puzzles from "../../assets/puzzles";
import Lightbulb from "../../assets/images/lightbulb";

import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleScreen = () => {
  // Modal logic
  const [modalVisible, setModalVisible] = useState(false);

  const randomTips = [
    "Você sabia que pode usar useMemo pra otimizar renderizações?",
    "A prática leva à perfeição!",
    "Não esqueça de fazer commit!",
    "Erros são parte do processo.",
    "Experimente algo novo hoje.",
  ];

  const randomTip = randomTips[Math.floor(Math.random() * randomTips.length)];

  // Estado para controlar se o usuário tem permissão para acessar o enigma
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  //   Verifica se o usuário tem permissão para acessar o enigma
  useEffect(() => {
    const checkProgress = async () => {
      try {
        const value = await AsyncStorage.getItem("maxPuzzle");
        const maxUnlocked = value ? parseInt(value) : 1;

        if (puzzleId <= maxUnlocked) {
          setIsAllowed(true);
        }
      } catch (e) {
        console.error("Erro ao verificar progresso:", e);
      } finally {
        setIsLoading(false);
      }
    };

    checkProgress();
  }, []);

  // Obtém o ID do enigma a partir dos parâmetros da URL
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const puzzleId = typeof id === "string" ? parseInt(id) : NaN;

  const puzzle = puzzles.find((p) => p.id === puzzleId);
  const [text, setText] = useState("");

  // Função para verificar a resposta do usuário
  const checkAnswer = async () => {
    const userAnswer = text.trim().toLowerCase();
    const correctAnswer = puzzle?.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      const nextId = puzzleId + 1;
      const hasNext = puzzles.some((p) => p.id === nextId);
      Alert.alert(
        "Certa resposta!",
        hasNext ? "Indo para o próximo enigma..." : "Você concluiu todos!"
      );
      setText("");

      try {
        await AsyncStorage.setItem("maxPuzzle", String(nextId));
      } catch (e) {
        console.error("Erro ao salvar progresso:", e);
      }

      if (hasNext) {
        router.push(`/puzzle/${nextId}`);
      } else {
        router.push("/");
      }
    } else {
      Alert.alert("ERRADO", "Tente novamente.");
    }
  };
  // Se estiver carregando, exibe uma mensagem de carregamento
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    );
  }
  // Se o enigma não for encontrado, exibe uma mensagem de erro
  if (!puzzle) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enigma não encontrado 😢</Text>
        <Link href="/" style={{ color: "#ffffff" }}>
          ← Voltar
        </Link>
      </View>
    );
  }
  // Se o usuário não tiver permissão para acessar o enigma, exibe uma mensagem de erro
  if (!isAllowed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ⛔<br />
          <br />
          Você não deveria estar aqui!
        </Text>
        <TouchableOpacity>
          <Link
            href="/"
            style={{ color: "#ffffff", fontSize: 16, marginTop: 24 }}
          >
            ← Voltar
          </Link>
        </TouchableOpacity>
      </View>
    );
  }

  // Renderiza o enigma se todas as condições forem atendidas
  return (
    <View style={styles.container}>
      <View style={styleQuestion.tipContainer}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Lightbulb />
        </Pressable>
      </View>

      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{randomTip}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff" }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.title}>Enigma Sombra</Text>
      <View style={styleQuestion.puzzle}>
        <Text style={styles.suggestMeText}>{puzzle.question}</Text>
      </View>

      <View style={styles.suggestionBox}>
        <TextInput
          style={styleQuestion.input}
          onChangeText={setText}
          value={text}
          placeholder="Digite sua resposta..."
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styleQuestion.button} onPress={checkAnswer}>
          <Text style={styleQuestion.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleQuestion.back}>
          <Link
            href="/"
            style={{
              fontWeight: "bold",
              color: "#ffffff",
              fontSize: 16,
              marginTop: 24,
            }}
          >
            {"<"} Voltar
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleQuestion = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tipContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 20,
  },
  back: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#8F7535",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#8F7535",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
  },
  puzzle: {
    borderRadius: 8,
    marginBottom: 20,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    maxWidth: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});

export default PuzzleScreen;

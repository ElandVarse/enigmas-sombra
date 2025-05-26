import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../../assets/style";

import puzzles from "../../assets/puzzles";

import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleScreen = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const puzzleId = typeof id === "string" ? parseInt(id) : NaN;

  const puzzle = puzzles.find((p) => p.id === puzzleId);
  const [text, setText] = useState("");

  // Verifica se o usuário pode acessar o puzzle
  // baseado no progresso salvo no AsyncStorage
  useEffect(() => {
    const checkProgress = async () => {
      try {
        let value = await AsyncStorage.getItem("maxPuzzle");
        // if value is null or "0", set it to "1"
        value = value === null || value === "0" ? "1" : value;
        const maxUnlocked = value ? parseInt(value) : 1;

        console.log("Max Puzzle Unlocked:", maxUnlocked);
        console.log("Current Puzzle ID:", puzzleId);

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

  // Verifica se o puzzleId é válido
  const checkAnswer = async () => {
    const userAnswer = text.trim().toLowerCase();
    const correctAnswer = puzzle?.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      const nextId = puzzleId;
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

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carregando...</Text>
      </View>
    );
  }

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

  return (
    <View style={styles.container}>
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
});

export default PuzzleScreen;

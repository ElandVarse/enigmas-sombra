import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image, Modal, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

import puzzles from "../../assets/Puzzles";

import { styles } from "../../assets/styles/GlobalStyles";
import PuzzleStyle from "./PuzzleStyles";
import AskForATip from "../../components/AskForATip";

const PuzzleScreen = () => {

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
        router.push(`/screens/puzzle/${nextId}`);
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
      <AskForATip id={puzzleId} />

      <Text style={styles.title}>Enigma Sombra</Text>
      <View style={PuzzleStyle.puzzle}>
        <Text style={styles.suggestMeText}>{puzzle.question}</Text>
      </View>

      <View style={styles.suggestionBox}>
        <TextInput
          style={PuzzleStyle.input}
          onChangeText={setText}
          value={text}
          placeholder="Digite sua resposta..."
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={PuzzleStyle.button} onPress={checkAnswer}>
          <Text style={PuzzleStyle.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={PuzzleStyle.back}>
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

export default PuzzleScreen;

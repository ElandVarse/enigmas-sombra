import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../../assets/style';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';

const PuzzleScreen = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkProgress = async () => {
      try {
        const value = await AsyncStorage.getItem('maxPuzzle');
        const maxUnlocked = value ? parseInt(value) : 1;

        if (puzzleId <= maxUnlocked) {
          setIsAllowed(true);
        }
      } catch (e) {
        console.error('Erro ao verificar progresso:', e);
      } finally {
        setIsLoading(false);
      }
    };

    checkProgress();
  }, []);

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const puzzleId = parseInt(id); // vem como string

  const puzzles = [
    { id: 1, question: 'O que é, o que é: Cai em pé e corre deitado?', answer: 'Chuva' },
    { id: 2, question: 'Tem dentes mas não morde?', answer: 'Pente' },
    { id: 3, question: 'Anda com os pés na cabeça?', answer: 'Piolho' },
    { id: 4, question: 'Tem capa mas não é super-herói?', answer: 'Livro' },
    { id: 5, question: 'Quanto mais tira, maior fica?', answer: 'Buraco' },
    { id: 6, question: 'Qual é o animal que anda com um pau nas costas?', answer: 'Caramujo' },
    { id: 7, question: 'O que é invisível e atrapalha a visão?', answer: 'Escuridão' },
    { id: 8, question: 'Sempre molhado, mesmo secando?', answer: 'Toalha' },
    { id: 9, question: 'O que nasce grande e morre pequeno?', answer: 'Lapis' },
    { id: 10, question: 'Tem banco, mas não senta?', answer: 'Banco de dados' },
  ];

  const puzzle = puzzles.find(p => p.id === puzzleId);
  const [text, setText] = useState('');

  const checkAnswer = async () => {
    const userAnswer = text.trim().toLowerCase();
    const correctAnswer = puzzle.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      const nextId = puzzleId + 1;
      const hasNext = puzzles.some(p => p.id === nextId);
      Alert.alert('Certa resposta!', hasNext ? 'Indo para o próximo enigma...' : 'Você concluiu todos!');
      setText('');

      try {
        await AsyncStorage.setItem('maxPuzzle', String(nextId));
      } catch (e) {
        console.error('Erro ao salvar progresso:', e);
      }

      if (hasNext) {
        router.push(`/puzzle/${nextId}`);
      } else {
        router.push('/');
      }
    } else {
      Alert.alert('ERRADO', 'Tente novamente.');
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
        <Link href="/" style={{ color: '#ffffff' }}>← Voltar</Link>
      </View>
    );
  }

  if (!isAllowed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>⛔<br /><br />Você não deveria estar aqui!</Text>
        <TouchableOpacity>
          <Link href="/" style={{ color: '#ffffff', fontSize: 16, marginTop: 24 }}>← Voltar</Link>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enigma Sombra</Text>
      <>
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
          <Link href="/" style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16, marginTop: 24 }}>{'<'} Voltar</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styleQuestion = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8F7535',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#8F7535',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  puzzle: {
    borderRadius: 8,
    marginBottom: 20,
  },
});

export default PuzzleScreen;

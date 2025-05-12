import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../../assets/style';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';

const PuzzleScreen = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const puzzleId = parseInt(id); // vem como string

  const puzzles = [
    { id: 1, question: 'O que é, o que é: Cai em pé e corre deitado?', answer: 'A chuva' },
    { id: 2, question: 'Tem dentes mas não morde?', answer: 'O pente' },
    { id: 3, question: 'Anda com os pés na cabeça?', answer: 'O piolho' },
    { id: 4, question: 'Tem capa mas não é super-herói?', answer: 'O livro' },
    { id: 5, question: 'Quanto mais tira, maior fica?', answer: 'Buraco' },
    { id: 6, question: 'Qual é o animal que anda com um pau nas costas?', answer: 'O caramujo' },
    { id: 7, question: 'O que é invisível e atrapalha a visão?', answer: 'A escuridão' },
    { id: 8, question: 'Sempre molhado, mesmo secando?', answer: 'Toalha' },
    { id: 9, question: 'O que nasce grande e morre pequeno?', answer: 'O lápis' },
    { id: 10, question: 'Tem banco, mas não senta?', answer: 'O banco de dados' },
  ];

  const puzzle = puzzles.find(p => p.id === puzzleId);
  const [text, setText] = useState('');

  if (!puzzle) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enigma não encontrado 😢</Text>
        <Link href="/" style={{ color: '#ffffff' }}>← Voltar</Link>
      </View>
    );
  }

  const checkAnswer = () => {
    const userAnswer = text.trim().toLowerCase();
    const correctAnswer = puzzle.answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      const nextId = puzzleId + 1;
      const hasNext = puzzles.some(p => p.id === nextId);
      Alert.alert('Certa resposta!', hasNext ? 'Indo para o próximo enigma...' : 'Você concluiu todos!');
      setText('');

      if (hasNext) {
        router.push(`/puzzle/${nextId}`); // redireciona corretamente
      } else {
        router.push('/'); // volta pro início
      }
    } else {
      Alert.alert('ERRADO', 'Tente novamente.');
    }
  };

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
          <Link href="/" style={{ color: '#ffffff', fontSize: 16 }}>← Voltar</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

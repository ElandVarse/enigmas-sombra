import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../assets/style';
import { Link } from 'expo-router';

const question = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState('');

  const checkAnswer = () => {
    const userAnswer = text.trim().toLowerCase();
    const correctAnswer = puzzles[currentIndex].answer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      if (currentIndex < puzzles.length - 1) {
        Alert.alert('Certa resposta!', 'Próximo enigma...');
        setText('');
        setCurrentIndex(currentIndex + 1);
      } else {
        Alert.alert('Parabéns!', 'Você completou todos os enigmas!');
        setText('');
        setCurrentIndex(0); // ou finalizar o jogo
      }
    } else {
      Alert.alert('ERRADO', 'Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enigma Sombra</Text>

      <View style={styleQuestion.puzzle}>
        <Text style={styles.suggestMeText}>
          {puzzles[currentIndex].question}
        </Text>
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
            <Link href="/" style={{ color: '#ff9800', fontSize: 16 }}>← Voltar</Link>
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

export default question;

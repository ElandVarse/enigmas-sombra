import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../assets/style';

const question = () => {
  const puzzles = [
    { question: 'O que é, o que é: cai em pé e corre deitado?', answer: 'Chuva' },
    { question: 'O que é, o que é: tem dentes mas não morde?', answer: 'Pente' },
    { question: 'O que é, o que é: quanto mais tira, maior fica?', answer: 'Buraco' },
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
      </View>
    </View>
  );
};

const styleQuestion = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
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

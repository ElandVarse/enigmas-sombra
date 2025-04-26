import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../assets/style';
import { Link } from 'expo-router';
import { puzzle1, puzzle2, puzzle3 } from '../assets/puzzles';

const question = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Enigma Sombra</Text>

      <View style={styleQuestion.puzzle}>
        <Text style={styles.suggestMeText}>{puzzle1.question}</Text>
      </View>

      <View style={styles.suggestionBox}>
        <TextInput
          style={styleQuestion.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Exemplo..." 
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styleQuestion.button} onPress={() => alert('Botão custom!')}>
          <Text style={styleQuestion.buttonText}>Enviar</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

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
    outline: 'none',
    outlineStyle: 'none'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  puzzle: {
    borderRadius: 8,
    marginBottom: 20,
  },


});

export default question;

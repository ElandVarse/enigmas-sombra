import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import QuestionMark from '@/assets/images/question-mark';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.questionMark}>
        <QuestionMark width={90} height={90} />
      </View>

      <View style={styles.suggestionBox}>
        <Text style={styles.title}>Enigma Sombra</Text>

        <TouchableOpacity style={styles.suggestionButton} >
          <Text style={styles.suggestionButtonText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionButtonText}>Fases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionButtonText}>Instruções</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton}>
          <Text style={styles.suggestionButtonText}>Opções</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.bottom, styles.suggestMeText]}>Desenvolvido por liquid.dreper@gmail.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 8,
  },
  container: {
    backgroundColor: '#111',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'white',
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 24,
    fontSize: 24,
  },
  questionMark: {
    position: 'absolute',
    top: 24,
    backgroundColor: '#8F7535',
    padding: 24,
    borderRadius: '50%',
    borderBottomWidth: 8,
    borderBottomColor: '#3A3329',
    borderRightWidth: 8,
    borderRightColor: '#645136'
  },
  suggestionBox: {
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#888',
    fontWeight: 'bold',
    color: '#000',
  },
  suggestMeText: {
    color: '#ffffff',
    fontWeight: 'bold'
  },
  suggestionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#8F6A35',
    marginBottom: 8,
    borderBottomWidth: 8,
    borderBottomColor: '#3A3329',
    borderRightWidth: 8,
    borderRightColor: '#645136'
  },
  suggestionButtonText: {
    color: 'white',
    fontWeight:'bold',
    textTransform: 'uppercase',
    fontFamily:'sans-serif'
  },
  bottom: {
    position: 'absolute',
    bottom: 24,
  }
});

export default Index;
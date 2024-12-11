import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import QuestionMark from '@/assets/images/question-mark';
import { Link, Stack } from 'expo-router';
import {styles} from '../app/../assets/style'


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
          <Link style={styles.suggestionButtonText} href={"/question"}>Iniciar</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton}>
          <Link style={styles.suggestionButtonText} href={"/phases"}>Fases</Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton}>
          <Link style={styles.suggestionButtonText} href={"/instructions"}>Instruções</Link>
        </TouchableOpacity>
      </View>

      <Text style={[styles.bottom, styles.suggestMeText]}>Desenvolvido por liquid.dreper@gmail.com</Text>
    </View>
  );
};



export default Index;
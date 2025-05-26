import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import QuestionMark from '@/assets/images/question-mark';
import { Link, useRouter } from 'expo-router';
import {styles} from '../app/../assets/style'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Index = () => {
  const [loading, setLoading] = useState(true);
  const [suggestion, setSuggestion] = useState("")
  const router = useRouter();

  // reset async storage
  // useEffect(() => { 
  //   const resetarAsyncStorage = async () => {
  //     try {
  //       await AsyncStorage.setItem("maxPuzzle", String(0));
  //     } catch (e) {
  //       console.error("Erro ao salvar progresso:", e);
  //     }
  // };

  // resetarAsyncStorage()
  
  // })

  return (

    <View style={styles.container}>

      <View style={styles.questionMark}>
        <QuestionMark width={90} height={90} />
      </View>

      <View style={styles.suggestionBox}>

        <Text style={styles.title}>Enigma Sombra</Text>

        <TouchableOpacity onPress={() => router.push('/puzzle/1')} style={styles.suggestionButton} >
          <Text style={styles.suggestionButtonText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton} onPress={() => router.push('/stages')}>
          <Text style={styles.suggestionButtonText}>Fases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestionButton} onPress={() => router.push('/instructions')}>
          <Text style={styles.suggestionButtonText}>Instruções</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.bottom, styles.suggestMeText]}>Desenvolvido por liquid.dreper@gmail.com</Text>
    </View>
  );
};



export default Index;
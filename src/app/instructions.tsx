import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../assets/style'
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture'
import { Link } from 'expo-router'


export default class instructions extends Component {
  render() {
    return (
      <View style={[styles.container, instructionStyles.container]}>
        <View style={instructionStyles.textContainer}>
          <Text style={instructionStyles.title}>Descubra a resposta do enigma e insira no campo de texto</Text>
          <Text style={instructionStyles.text}>Se estiver muito difícil, tente pedir uma dica</Text>

          <Image
            source={require('../assets/images/frieren.gif')}
            style={{ width: 200, height: 140, marginTop: 20 }}
          />


          <TouchableOpacity>
            <Link href="/" style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 16, marginTop: 24 }}>{'<'} Voltar</Link>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const instructionStyles = StyleSheet.create({
  container: {
    borderRadius: 10
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    color: '#f9f9f9',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  text: {
    fontSize: 16,
    color: '#f9f9f9',
    textAlign: 'center',
  }

})
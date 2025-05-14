import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../assets/style'
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture'


export default class instructions extends Component {
  render() {
    return (
      <View style={[styles.container, instructionStyles.container]}>
        <Text style={styles.title}>Descubra a resposta do enigma e insira no campo de texto</Text>

        <Text style={instructionStyles.text}>Se estiver muito difícil, tente pedir uma dica</Text>
      </View>
    )
  }
}

const instructionStyles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  }
})
import { Text, View } from 'react-native'
import React, { Component } from 'react'

import styles from '../assets/style'


export default class instructions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Descubra a resposta do enigma e insira no campo de texto</Text>
      </View>
    )
  }
}
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../assets/style';


const question = () => {
  const [text, onChangeText] = React.useState('');
    return (
      <View style={styles.container}>

        <View style={styles.suggestionBox}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Exemplo..."
          />
        </View>

      </View>
    )
  }

  export default question;
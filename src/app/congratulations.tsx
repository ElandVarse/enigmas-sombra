import { View, Text } from "react-native";
import React from "react";
import { styles } from "../app/../assets/style";

export default function congratulations() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.title}>Discover the next puzzle in @enigma-sombra!</Text>
    </View>
  );
}

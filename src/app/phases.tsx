import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Link, Stack } from 'expo-router';

const data = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

export default function Phases() {
  return (
    <View style={stylePhases.container}>
      <View style={stylePhases.inner}>

        <Text style={stylePhases.title}>Fases</Text>

        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={stylePhases.grid}
          renderItem={({ item }) => (
            <View style={stylePhases.box}>

              <TouchableOpacity>
                <Link style={stylePhases.text} href={`/puzzle`}>{item}</Link>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <TouchableOpacity>
          <Link href="/" style={{ color: '#ff9800', fontSize: 16 }}>← Voltar</Link>
      </TouchableOpacity>
    </View>
  );
}

const stylePhases = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centraliza vertical
    alignItems: 'center',      // centraliza horizontal
    backgroundColor: '#121212',
  },
  inner: {
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textTransform: "uppercase",
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2

  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    borderWidth: 2,
    borderColor: '#8F7535', // laranja forte
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderBottomColor: '#554620'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8F7535',
  },
});

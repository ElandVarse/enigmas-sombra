import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Link, Stack } from 'expo-router';

const data = Array.from({ length: 9 }, (_, i) => (i + 1).toString());

export default function Phases() {
  return (
    <View style={stageStyles.container}>
      <View style={stageStyles.inner}>

        <Text style={stageStyles.title}>Puzzles</Text>

        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={stageStyles.grid}
          renderItem={({ item, index }) => (

            <Link
              style={index === 0 ? stageStyles.box : [stageStyles.box, stageStyles.lockedBox]}
              href={index === 0 ? `/puzzle/${item}` : '/stages'}
            >

              {index === 0 ? (
                <Text style={stageStyles.text}>{item}</Text>
              ) : (
                <Image
                  source={require('../assets/images/lock.png')}
                  style={stageStyles.lock}
                />
              )}
            </Link>

            // <Link style={[stageStyles.box, stageStyles.lockedBox]} href={`/puzzle/${item}` as string}>
            //   <Image source={require('../assets/images/lock.png')} style={stageStyles.lock} />
            // </Link>
          )}
        />


      </View>

      <TouchableOpacity>
        <Link href="/" style={{ color: '#ffffff', fontSize: 16, marginTop: 24 }}>← Voltar</Link>
      </TouchableOpacity>
    </View>
  );
}

const stageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // centraliza vertical
    alignItems: 'center',      // centraliza horizontal
    backgroundColor: '#121212',
    padding: 20,
  },
  lock: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  inner: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',

    textShadowColor: '#b08d32',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 70,
    height: 70,
    margin: 10,
    borderWidth: 2,
    borderColor: '#8F7535', // laranja forte
    borderRadius: 10,
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderBottomColor: '#554620',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockedBox: {
    backgroundColor: '#808080',
    borderColor: '#DDDDDD',
    borderBottomColor: '#555555',
    borderTopColor: '#808080',
    borderRightColor: '#808080'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8F7535',
  },
});

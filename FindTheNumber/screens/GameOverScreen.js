import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

export default function GameOverScreen({roundsNumber,userNumber,onStartNewGame}) {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
      <View style={styles.imageView}>
        <Image style={styles.image}
          source={require('../assets/success.jpg')}
        />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}>{roundsNumber}</Text> denemeyle
        <Text style={styles.countAndNumber}> {userNumber}</Text> sayısını buldun.
      </Text>
      <CustomButton onPress={onStartNewGame}>New Game</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageView: {
    width: 350,
    height: 350,
    overflow: 'hidden',
    borderRadius: 175,
    borderWidth: 3,
    borderColor: 'red',
    margin: 30
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom:20
  },
  countAndNumber: {
    color: 'red'
  }
});

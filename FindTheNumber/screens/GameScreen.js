import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import ComputerGuess from '../components/ComputerGuess';

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver}) {
  const initialGuess = generateNumber(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessCount, setGuessCount] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCount.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minNumber=1;
    maxNumber=100;
  }, [])

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Hadi len düdük.', ' Yamuk yapma.', [{ text: 'taam', style: 'cancel' }]);
      return;
    }
    if (direction === 'lower') {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCount((prevGuess)=>[newRandomNumber,...prevGuess])
  }

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    if (randomNumber === exclude) {
      return generateNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }
  return (
    <View style={styles.container}>
      <Title>Guessed Number</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Below or Above?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}><AntDesign name="minus" size={24} color="black" /></CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}><AntDesign name="plus" size={24} color="black" /></CustomButton>
        </View>
      </View>
      <View style={styles.flatContainer}>
        <FlatList
        data={guessCount}
        renderItem={(item) => (
          <ComputerGuess>{item.item} guessed in {guessCount.length - item.index} round</ComputerGuess>
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  card: {
    backgroundColor: 'orange',
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    color:'white',
    fontSize:25,
    marginBottom:15
  },
  flatContainer:{
    flex:1,
    alignItems:'center',
    marginTop:20,
    borderWidth:2,
    bordercolor:'black',
    borderRadius:20
  }
});

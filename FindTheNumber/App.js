import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOverScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(true)
  const [guessCount, setGuessCount] = useState(0)

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setIsGameOver(false);
  }

  function gameOverHandler(numberOfGuesses){
    setIsGameOver(true);
    setGuessCount(numberOfGuesses);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessCount(0);
    setIsGameOver(true);
  }
  
  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber}  onGameOver={gameOverHandler}/>
    )
  }

  if(isGameOver && userNumber){
    screen = (
      <GameOverScreen roundsNumber={guessCount} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
    )
  }

  return (
    <LinearGradient style={styles.container} colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <ImageBackground style={styles.container}
        source={require('./assets/back.jpg')}
        imageStyle={styles.backimage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backimage: {
    opacity: 0.2
  }
});
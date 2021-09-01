import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { AppLoading } from 'expo'
import * as Font from 'expo-font';

const fetchFonts= () => {
   return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState(1);
  const [guessRounds, setGuessRounds] = useState(1);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading 
    startAsync={fetchFonts}
    onFinish={()=>setDataLoaded(true)}
    onError={(err) => console.log('App.js Line 27: ' + err)} />
  }

  const configureNewGameHandler = ()=> {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds)
  }
  // let content = <StartGameScreen onStartGame={startGameHandler}/>;
  let content = <GameOverScreen />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>

  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" /> 
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }


})
import React, { useState, useRef, useEffect } from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card'
import { rosybrown } from 'color-name';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    // console.log('Min: ' + min +', Max: ' + max + ', Random Number: ' + rndNum)
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        console.log(rndNum)
        return rndNum
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice, onGameOver } = props;
    const [rounds, setRounds] = useState(0);
    
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            props.onGameOver(rounds);
        }

    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess< props.userChoice)||(direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert('Cheater!', 'Maybe you forgot the number you chose... ', [{text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')}/>
            </Card>

        </View>
    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }

})

export default GameScreen;

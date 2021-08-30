import React, { useState } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card'
import { rosybrown } from 'color-name';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max-min)) + min;
    console.log('Min: ' + min +', Max: ' + max + ', Random Number: ' + rndNum)
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        console.log(rndNum)
        return rndNum
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={()=> {}}/>
                <Button title="HIGHER" onPress={()=> {}}/>
            </Card>

        </View>
    );
}

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

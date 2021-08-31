import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from'../components/Card'

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>Number of Rounds:</Text>
            <Card><Text>{props.roundsNumber}</Text></Card>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default GameOver;

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Card from'../components/Card'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <BodyText>Number of Rounds:</BodyText>
            <Card><Text>{props.roundsNumber}</Text></Card>
            <BodyText>Number was: {props.userNumber}</BodyText>
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

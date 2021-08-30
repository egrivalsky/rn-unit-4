import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Colors, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Card from '../components/Card';
import Input from  '../components/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    };

    const resetInputHandler = () => {
        setConfirmed(false)
        setEnteredValue('');
        Keyboard.dismiss();

    }
    const confirmInputHandler = props => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert('Invalid number!', 'Number must be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        //the order of functions below is logical, but the order doesn't matter
        //all three things will be done before state is rerendered
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        // console.log(chosenNumber)
    }

    let confirmedOutput;
    if (confirmed)  {
        confirmedOutput= (
        <Card style={styles.summaryContainer}>
            <Text>You selected:</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={()=> props.onStartGame(selectedNumber)} color={colors.primary}/>
        </Card>
        );
    }


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>

                <Text style={styles.title}>Start a New Game!</Text>
                
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input}
                        blurOnSubmit autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button color={colors.accent} title='Reset' onPress={resetInputHandler}/></View>
                        <View style={styles.button}><Button color={colors.primary} title='Confirm' onPress={confirmInputHandler}/></View>
                    </View>
                </Card>

                {confirmedOutput}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },

    button: {
        width: '40%' 
    },

    title: {
        fontSize: 20,
        marginVertical: 10,
        color: 'black',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },

    input: {
        width: 50,
        textAlign: 'center',
    },

    summaryContainer: {
        margin: 20,
        alignItems: 'center',
    }
})

export default StartGameScreen;

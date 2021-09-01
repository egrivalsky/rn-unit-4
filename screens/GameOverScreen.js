import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Card from'../components/Card'
import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText'
import colors from '../constants/colors';

const GameOver = props => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
            {/* <Image source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/1ed4bc96f276cb4453522138e4298963.jpg'}} */}

            <Image source={require('../assets/success.png')}
                // fadeDuration={500}
                style={styles.image}
                resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess the number <Text style={styles.highlight}>{props.userNumber}</Text> </BodyText>
            </View>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },

    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },

    resultText: {
      textAlign: 'center',
      fontSize: 20,  
    },

    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'

    },
     resultContainer: {
         width: '50%',
         marginHorizontal: 30,
         marginVertical: 15,
     }

})

export default GameOver;

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Boost = require('../Images/boost.png');
const Nope = require('../Images/nope.png');
const Rewind = require('../Images/rewind.png');
const Like = require('../Images/like.png');
const SuperLike = require('../Images/super-like.png');

export default class BottomButtons extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.buttonImgContainer}>
                    <Image source={Rewind}
                           style={styles.bottomButtonsSmall}
                           resizeMode={'contain'}/>
                </View>

                <View style={styles.buttonImgContainerLg}>
                    <Image source={Nope}
                           resizeMode={'contain'}
                           style={styles.bottomButtonsSmall}/>
                </View>

                <View style={styles.buttonImgContainer}>
                    <Image source={Boost}
                           resizeMode={'contain'}
                           style={styles.bottomButtonsSmall}/>
                </View>

                <View style={styles.buttonImgContainerLg}>
                    <Image source={Like}
                           resizeMode={'contain'}
                           style={styles.bottomButtonsSmall}/>
                </View>

                <View style={styles.buttonImgContainer}>
                    <Image source={SuperLike}
                           resizeMode={'contain'}
                           style={styles.bottomButtonsSmall}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonImgContainer: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "space-between",
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 100
    },
    buttonImgContainerLg: {
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100
    },
    bottomButtonsSmall: {
        alignSelf: 'center',
        flex: 1,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});
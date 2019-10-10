import React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

const Logo = require('../Images/tinder-logo.png');
const Chat = require('../Images/chatting.png');

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: Platform.OS === 'ios'? 44 : 56,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    navButtons: {
        width: 30,
        height: Platform.OS === 'ios'? 44 : 56,
        tintColor: 'grey'
    }
});

export default class NavigationBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Image source={{uri: 'https://www.searchpng.com/wp-content/uploads/2018/12/Setting-Icon-715x715.png'}}
                       resizeMode={'contain'}
                       style={styles.navButtons}/>
                <Image source={Logo}
                       resizeMode={'contain'}
                       style={{width: 70, height: styles.container.height}}/>
                <Image source={Chat}
                       resizeMode={'contain'}
                       style={styles.navButtons}/>
            </View>
        )
    }
}
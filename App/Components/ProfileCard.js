import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        height: '100%',
        alignItems: 'center',
        marginTop: '5%'
    },
    imageContainer: {
        height: '80%',
        width: '80%',
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15
    },
    username: {fontSize: 24, fontWeight: 'bold'},
    textView: {flexDirection: 'row', marginLeft: 20}
});

export default class ProfileCard extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={this.props.userInfo.profileImage} resizeMode={'cover'}
                           style={{alignContent: 'center', height: '80%', width:  '100%'}}/>
                    <View style={{...styles.textView, marginTop: 10}}>
                        <Text style={styles.username}>{this.props.userInfo.name}, </Text>
                        <Text style={{fontSize: 24}}>{this.props.userInfo.age}</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={{fontSize: 16, color: 'grey'}}>{this.props.userInfo.occupation}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

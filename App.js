import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import { Images, Profiles } from './App/Themes';
import NavigationBar from './App/Components/NavigationBar';
import ProfileCard from './App/Components/ProfileCard';
import BottomButtons from "./App/Components/BottomButtons";

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={{height: '10%'}}><NavigationBar /></View>
          <View style={{height: '80%'}}><ProfileCard userInfo={this.state}/></View>
          <View style={{height: '10%'}}><BottomButtons /></View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios'? 0 : 25,
    paddingBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
  }
});
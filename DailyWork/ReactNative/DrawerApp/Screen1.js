//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components
 
export default class Screen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://www.freeiconspng.com/uploads/number-1-one-icon-0.png'}}
        />
        <Text style={{ fontSize: 23, color : '#77ace5' }}> Welcome to Screen 1 </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});
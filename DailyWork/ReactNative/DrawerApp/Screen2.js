//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components
 
export default class Screen2 extends Component {
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: 'https://www.freeiconspng.com/uploads/number-2-blue-icon-3.png'}}
        />
        <Text style={{ fontSize: 23, color: '#77ace5' }}> You're in Screen 2 </Text>
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
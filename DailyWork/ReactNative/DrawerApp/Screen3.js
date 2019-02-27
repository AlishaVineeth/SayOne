import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
// import all basic components
 
export default class Screen3 extends Component {
  //Screen3 Component
  render() {
    return (
      <View style={styles.MainContainer}>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: 'http://barnbridge.com/wp-content/uploads/2016/09/067956-3d-glossy-blue-orb-icon-alphanumeric-number-3.png'}}
        />
        <Text style={{ fontSize: 23, color:'#77ace5' }}> This is Screen 3 </Text>
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
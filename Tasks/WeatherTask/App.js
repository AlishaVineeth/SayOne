/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



import Details from './Details';

class HomeScreen extends React.Component {

constructor(props) {
  super(props);
  state = {
    latitude: '',
    longitude: '',
  }
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', marginBottom:20,}}>
          Enter Latitude :
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              underlineColorAndroid='transparent'
              onChangeText={(latitude) => this.setState({latitude})}/>
        </View>
        
        <Text style={{color: 'white', marginBottom:20}}>
          Enter Longitude :
        </Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              underlineColorAndroid='transparent'
              onChangeText={(longitude) => this.setState({longitude})}/>
        </View>
        <TouchableHighlight style={[styles.buttonContainer, styles.goButton]} 
         onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Details',  {
           lat: this.state.latitude,
           lon: this.state.longitude,
           });
        }}
        >
          <Text style={styles.goText}>Go</Text>
        </TouchableHighlight>

      </View>
    );
  }

}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: Details,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {

  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87cefa',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:280,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    color: 'black',
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  width:100,
  borderRadius:30,
},
goButton: {
  backgroundColor: '#708090',
},
goText: {
  color: 'white',
}
});

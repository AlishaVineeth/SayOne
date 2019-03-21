/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert,TouchableHighlight} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'; 
import { TextInput } from 'react-native-gesture-handler';




class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.containerHome}>
        <Text style={{ fontSize : 15}}>Home Screen</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.drawerButton]} onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.drawerText}>Go to Drawer</Text>
        </TouchableHighlight>

      </View>
    );
  }
}


class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

class DrawerScreen1 extends Component {
  //Screen1 Component
  render() {
    return (
      <View style={styles.MainContainer}>
      <Image
          style={{width: 150, height: 150}}
          source={{uri: 'https://webinerds.com/app/uploads/2017/11/d49396_d9c5d967608d4bc1bcf09c9574eb67c9-mv2.png'}}
        />
      </View>
    );
  }
}
 

class DrawerScreen2 extends Component {
  //Screen2 Component
  render() {

    return (
        <View style={styles.MainContainer}>
       
       <Button style={styles.Buttonhome}
          title="Go to Tab Navigator"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        </View>
      );
    //return <AppContainer />;
  }
}




const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: DrawerScreen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#77ace5',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: DrawerScreen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#77ace5',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

class SettingsScreen extends React.Component {
  constructor(){
    super()
    this.state = {
      name:''
    }
  }
  static navigationOptions = {
    title: 'Settings',
  };
 
  buttonClickListener = () =>{
   // alert(this.state.name);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Enter a Name : </Text>
      <TextInput style={{marginTop: 15}}
             placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              />
       {/* <Button style={{ marginTop: 15}}
   onPress = {this.buttonClickListener}
      title="Send"
      /> */}
      <Component1 value = {this.state.name} />
      </View>
    );
  }
}

class Component1 extends Component{


  render(){
      return(
          <View style={{ backgroundColor : '#77ace5', marginTop: 40, height: 80, width: 200, alignItems:"center"}}>
              <Text style={{marginTop: 10,}}> Entered Name is : </Text>
              <Text>{this.props.value}</Text> 
          </View>
      );
  }
}



//<Component1 data = {this.state.name} />
class DetScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}






const DrawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  DrawerScreen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      //drawerLabel: 'Screen 1',
    },
  },
  DrawerScreen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Screen 2',
    },
  }
});

 
const TabNavigator = createBottomTabNavigator({
  Settings: { screen: SettingsScreen },
  Detail: { screen: DetScreen },
  Profile: {screen: ProfileScreen},
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DrawerNavigator,
    Settings: TabNavigator,
  },
  {
    initialRouteName: 'Home',
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20B2AA',
  },
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    
    justifyContent: 'center',
  },
  containerHome: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center' ,
    backgroundColor: 'white',
 },
 Buttonhome: {
 backgroundColor: 'white',
 

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
    width:250,
    borderRadius:30,
    marginTop:20,
  },
  
  drawerButton: {
    backgroundColor: '#77ace5',
  },
  drawerText: {
    color: 'white',
    fontSize: 17,
  }
  
 
});


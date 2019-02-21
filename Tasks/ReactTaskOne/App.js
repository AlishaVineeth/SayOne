import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Animated} from 'react-native';



export default class App extends Component {
    componentDidMount() {
        setTimeout(() => {
          this.setState({image :'https://leanplum-wordpress.storage.googleapis.com/icon-feature.png'});
        },5000);
      }

    constructor(props) {
        super(props);
        this.state = {image :'https://cdn-images-1.medium.com/max/1200/1*dIocy2HvI_BIpziOypf8ig.jpeg' }
      }

  render() {
    return (
      <View style={styles.container}>
      
        <Image source={{uri: this.state.image}} style={{width: 130, height:110}}/>
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

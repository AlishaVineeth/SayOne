/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';

import { StyleSheet, View, SectionList, Text, Platform, Alert } from 'react-native';

export default class App extends Component {
  GetSectionListItem=(item)=>{
    Alert.alert(item)
  }

  render() {
    var A = ['Apple', 'Apricot', 'Avocado'] ;
    var B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
    var C = ['Cherry', 'Coconut'] ;
    return (
      <View style={{flex:1, marginTop : 80, backgroundColor: '#F5F5F5' }}>
      <SectionList
          sections={[
            { title: 'Fruits Name From A', data: A },
            { title: 'Fruits Name From B', data: B },
            { title: 'Fruits Name From C', data: C },
          ]}

          renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
          renderItem={ ({item}) => <Text style={styles.SectionListItemStyle} onPress={this.GetSectionListItem.bind(this, item)}> { item } </Text> 
        }
          keyExtractor={ (item, index) => index }
         
        />

      </View> 

    );
  }
}

const styles = StyleSheet.create({
  SectionHeaderStyle: {
  
    alignSelf: 'center',
    backgroundColor : '#eebac8',
    fontSize : 20,
    padding: 7,
    color: '#fff',
  },

  SectionListItemStyle:{
    marginTop :30,
    fontSize : 15,
    padding: 5,
    color: '#000',
    backgroundColor : '#F5F5F5'

  }


});
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
    }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 2,backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            console.log(item);
            return <View>
              <Text style={{marginTop: 100}}>{item.title}, {item.id}</Text>
            </View>
          }}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

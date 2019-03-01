import React, {Component} from 'react';
import { FlatList } from 'react-native';
import ForecastCard from './Card';
import moment from 'moment';

export default class Details extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      latitude: 0,
      longitude: 0,
      forecast: [],
      error:''
    };
  }

  componentDidMount(){
    // Get the user's location
    this.getWeather();
  }
  

  getWeather(){

    // Construct the API url to call
    //let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=9.9312&lon=76.2673&units=metric&appid=23ef238e9631b4ef060cf76c7361fb64';

    let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.props.navigation.state.params.lat + '&lon=' + this.props.navigation.state.params.lon + '&units=metric&appid=23ef238e9631b4ef060cf76c7361fb64';


    // Call the API, and set the state of the weather forecast
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => ({
        forecast: data
      }));
    })
  }

  render() {

    
  //date=this.state.forecast.dt_txt;
  //var date = item.dt_txt;
 //if(date != dt_txt){

    return (
      <FlatList data={this.state.forecast.list} style={{marginTop:20}} keyExtractor={item => item.dt_txt} renderItem={({item}) => <ForecastCard detail={item} 
      location={this.state.forecast.city.name} country={this.state.forecast.city.country}  date={this.state.forecast.dt_txt} />} />
    );
  // }else{
  //   return false;
  // }
    }
}


import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import moment from 'moment';


export default class ForecastCard extends Component {

    render() {
       var day = moment().format('dddd');
        

        return (
            <Card containerStyle={styles.card}>
                <Text style={styles.country}>{this.props.country}</Text>
                <Text style={styles.location}>{this.props.location}</Text>
                
                
                
                
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Image style={{width:100, height:100}} source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}} /> 
                    <Text style={styles.time}> {this.props.detail.dt_txt}</Text>
                    <Text style={{fontSize: 18, color: '#fff'}}> {day}</Text>
                
                    
                </View>

                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />
                
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.notes}>Min : {Math.round(this.props.detail.main.temp_min * 10) / 10 }&#8451;</Text>
                    <Text style={styles.notes}>Max : {Math.round( this.props.detail.main.temp_max * 10) / 10 }&#8451;</Text>
                    
                    
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'rgba(56, 172, 236, 1)',
        borderWidth:0,
        borderRadius:20
    },
    time:{
        fontSize:18,
        color:'#fff'
        
    },
    notes: {
        fontSize: 18,
        color:'#fff',
        textTransform:'capitalize'
    },
    country: {
        fontSize: 18,
        color:'#fff',
        textTransform:'capitalize'
    },
    location:{
        fontSize: 25,
        color:'#fff',
        textTransform:'capitalize'
    }
});
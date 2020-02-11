import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Weather from './Weather';

const API_KEY="cc6fb174c21f832a77a0164413227879";



export default class Main extends Component{

    constructor(){
        super();

        this.state={
            isLoaded: false, 
            error: null,
            temp:null,
            name:null,
        }
    }

    componentDidMount(){
        Geolocation.getCurrentPosition(
            position=>{
                this._getWeather(position.coords.latitude, position.coords.longitude)
            },
            error=>{
                this.setState({
                    error: error
                })
            }
        );
    }


    render(){
        const {isLoaded, error} = this.state;
        return(
            <View style={style.loading}> 
                {isLoaded? <Weather/> : <View>
                    <ActivityIndicator/>
                    <Text style={style.loadingText}>날씨 정보를 불러오는 중입니다.</Text>
                    {error? <Text style={style.errorText}>{error}</Text> : null}
                    </View>}

            </View>
        );
    }

    _getWeather= (lat, long)=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}")
        .then(response => response.json())
        .then( responseJson =>{
            this.setState({
                temp:responseJson.main.temp,
                name:responseJson.weather[0].main,
                isLoaded: true,
            })
        })
    }

    
}

const style= StyleSheet.create({
    container:{
        flex:1, backgroundColor: '#fff',
    },
    errorText:{
        color:'red',
        marginBottom:40
    },
    loading:{
        flex:1,
        backgroundColor:'#FAF4C0',
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
    loadingText:{
        fontSize: 25,
        marginBottom: 100
    }

});

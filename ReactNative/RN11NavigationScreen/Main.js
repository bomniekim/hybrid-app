import React, {Component} from 'react';
import {View, Text} from 'react-native';

// stack-navigator
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

import { createAppContainer } from 'react-navigation';

// stackNavigator 객체 생성
const stackNav= createStackNavigator(
    {
        Home: { screen: HomeScreen},
        Second: { screen: SecondScreen, navigationOptions:{headerShown:false}},
    }
    );

// navigator 객체를 가지고 있는 AppContainer객체 생성: 자체로 컴포넌트
const Container= createAppContainer( stackNav );

export default class Main extends Component{
    render(){
        return(
           <Container></Container>
        );
    }
}

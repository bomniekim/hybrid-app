import React, {Component} from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import First from './screens_bottom/First';
import Second from './screens_bottom/Second';
import Third from './screens_bottom/Third';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// BottomTabNavigator 생성
const bottomNav= createBottomTabNavigator(
    // RouteConfigs
    {
        First:{screen: First},
        Second:{screen: Second},
        Third:{screen: Third, navigationOptions:{tabBarIcon:()=><Icon name="apple" size={24} color="navy"></Icon>}},
    },
    // BottomTabNavigatorConfig (optional) : RN docs에서 찾아보기
    {
        initialRouteName:'Second',
        tabBarOptions:{
            showLabel: true,
            showIcon: true,
            // labelStyle:{ fontSize:20},
            style:{backgroundColor:'#eeeeee'},
            activeTintColor: 'red',
            activeBackgroundColor: 'gold',
            tabStyle: {
                borderTopWidth:1,
                borderBottomWidth:1,
                borderLeftWidth:0.5,
                borderRightWidth:0.5,
                borderColor:'black',
                paddingTop:8, //탭 사이즈가 커지진 않고 안의 content 조금 내려감
            }
        },

    }
);

// Navigator를 감싸는 AppContainer 생성
const AppContainer= createAppContainer(bottomNav);

export default class BottomTabMain extends Component{
    render(){
        return <AppContainer></AppContainer>
    }
}

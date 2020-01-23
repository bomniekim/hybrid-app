import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import First from './screens_toptab/First';
import Second from './screens_toptab/Second';
import Third from './screens_toptab/Third';

import Icon from 'react-native-vector-icons/FontAwesome';

// 화면 swipe 관련 라이브러리 
import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';

const toptabNav= createMaterialTopTabNavigator(
    { // RouteConfigs
        First: {screen:First},
        Second: {screen:Second, navigationOptions:{tabBarIcon: ()=><Icon name="search" size={20} color="white"></Icon>}},
        Third: {screen:Third, navigationOptions:{tabBarIcon: ()=><Icon name="user" size={20} color="white"></Icon>}},
    },
    { // TabNavigatorConfig
        // tabBarPosition: 'bottom',
        tabBarOptions:{
            showIcon:true,
            activeTintColor: 'orange',
            inactiveTintColor: 'grey',
            style:{
                backgroundColor:'navy'
            },
            indicatorStyle:{
                borderBottomColor:'gold',
                borderBottomWidth: 5,
            }
        },
        swipeEnabled: true,
        // pagerComponent: ViewPagerAdapter,// 속도가 느려짐, 아직은 불안정한 모양
    }
);

const AppContainer= createAppContainer(toptabNav);

export default class TopTabMain extends Component{
    render(){
        return <AppContainer></AppContainer>;
    }
}
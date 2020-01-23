import React, {Component} from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Screen1 from './screens_drawer/Screen1';
import Screen2 from './screens_drawer/Screen2';
import Screen3 from './screens_drawer/Screen3';
import { createAppContainer } from 'react-navigation';

const drawerNav=createDrawerNavigator(
    {
        one: {screen: Screen1},
        two: {screen: Screen2},
        three: {screen: Screen3},
    },
    {
        // edgeWidth:5,
    }
);

const AppContainer= createAppContainer(drawerNav);

export default class DrawerMain extends Component{
    render(){
        return <AppContainer></AppContainer>
    }

}
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screen_login/Login';
import SignUp from './screen_login/SignUp';
import ResetPassword from './screen_login/ResetPassword';

import MovieList from './screen_movie/MovieList';
import MovieDetail from './screen_movie/MovieDetail';

import Community from './screen_community/Community';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import CheckLogin from './CheckLogin';

// 로그인 관련 화면 3개는 StackNavigator로 Header(액션바)를 가지도록 생성
const loginStackNav= createStackNavigator({
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    RestPW: {screen: ResetPassword},
});

// 영화 관련화면 2개을 가진 StackNavigator 생성
const movieStackNav= createStackNavigator({
    MovieList,       //screen의 컴포넌트 명과 Navigator의 별명이 같다면 컴포넌트명만 작성할 수 있음
    MovieDetail,
});

// community 화면 관련 StackNavigator 생성
const communityStackNav= createStackNavigator({
    Community,
});

// Drawer로 영화 소개화면과 Community 화면으로 이동하기 위해 DrawerNavigator 생성
const drawerNav= createDrawerNavigator(
    {
        movieStackNav,
        communityStackNav,
    },
    { // drawer 옵션
        drawerPosition:'right',
        drawerType:'slide',
        // 드로우어의 모양을 변경하려면 
        //contentComponent: <컴포넌트>
    }
);

// 로그인 관련 화면들을 보유한 loginStackNav와 앱의 메인 화면들을 가진 drawerNav가 전환될 수 있도록 하되
// 백스택에 화면이 보유될 필요는 없기에 화면을 보관하지 않고 화면을 전환시켜주는 SwitchNavigator 생성
const switchNav= createSwitchNavigator(
    {
        CheckLogin,
        loginStackNav,
        drawerNav,
    },
    {
        // 앱이 시작될 때 로그인 정보가 저장되어 있다면 다시 입력하지 않도록 로그인체크(CheckLogin) 컴포넌트 포함
        initialRouteName:'CheckLogin',        
    }
);

// 모든 화면 Navigator를 가진 switchNav를 가진 AppContainer 생성
const AppContainer= createAppContainer( switchNav );

//Main컴포넌트에 AppContainer 보이기
export default class Main extends Component{
    render(){
        return <AppContainer></AppContainer>;
    }
}
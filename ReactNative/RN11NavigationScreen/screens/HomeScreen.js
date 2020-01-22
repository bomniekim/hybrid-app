import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class LogoTitle extends Component{
    render(){
        return(
            <View style={ {flexDirection:'row', padding:8, alignItems:'center'} }>
                <Image style={{width:30, height:30}} source={ require('../images/penguin.png')}></Image>
                <Text style={{fontWeight:'bold', fontSize:24, marginLeft:16}}>Home</Text>
            </View>
        );
    }

}

export default class HomeScreen extends Component{

    // toolbar 모양 설정
    // 특별한 static 변수를 지정하면 됨
    // 이 옵션적용은 다시 run-android해야만 적용됨
    // static navigationOptions={ // navigationOptions는 고정된 이름
    //     title: "This is HomeScreen",
    //     headerStyle:{
    //         backgroundColor:'#006700',// 헤더바 배경색
    //     },
    //     headerTintColor:'#ffffff', // 헤더 글씨 색상
    //     headerTitleStyle:{
    //         fontWeight:'bold',
    //     }
    // } 

    // 이미지를 가진 헤더 만들기
    static navigationOptions={
        headerTitle: ()=><LogoTitle></LogoTitle>,
        headerStyle:{backgroundColor:'hotpink'},
        title:"blahblah" // 이건 무시됨
    }

    // 헤더바를 없애고 싶다면
    // static navigationOptions={header:null}

    
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>HomeScreen</Text>
                <Button title="Go to SecondScreen" onPress={this.goToSecond}></Button>
            </View>
        );
    }

    goToSecond=()=>{
        // 네비게이터에 의해 보여지는 컴포넌트들은 '자동으로'
        // this.props 변수 안에 navigation이라는 객체가 전달됨
        this.props.navigation.navigate('Second'); // 탐색할 Screen의 별명
    }
}
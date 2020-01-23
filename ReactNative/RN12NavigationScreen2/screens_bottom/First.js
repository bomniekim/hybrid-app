import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class First extends Component{


    // 탭 아이콘 지정
    // static은 hot-reload로 갱신이 안됨 (껐-켰해야됨)
    static navigationOptions={
        tabBarIcon:()=>{ return <Image source={ require('../icons/icon1.png') } style={ {width:24, height:24}}></Image>}
    }



    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>First Tab</Text>
            </View>
        );
    }
}
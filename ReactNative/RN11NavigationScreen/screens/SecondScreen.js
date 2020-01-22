import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class SecondScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>SecondScreen</Text>
                <Button color="hotpink" onPress={ ()=>{this.props.navigation.navigate('Home')} } title="Go back"></Button>
            </View>
        );
    }
}

// 스택 구조이기 때문에 SecondScreen에서 뒤로가기를 누르면
// 앱이 꺼지는 것이 아니라 HomeScreen으로 돌아감
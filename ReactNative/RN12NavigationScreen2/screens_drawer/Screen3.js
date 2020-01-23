import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen3 extends Component{

    static navigationOptions={
        drawerLabel: 'Screen #3',
        drawerIcon: ()=><Image source={require('../icons/ben3.jpg')} style={{width:30, height:30, borderRadius:15}}></Image>
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Screen #3</Text>

                <View style={{margin:8}}>
                    {/* 무조건 Screen #1로 이동 */}
                    <Button title="go home" color="navy" onPress={ ()=>this.props.navigation.goBack()}></Button>
                    {/* goBack(): 스크린의 initial page로 돌아가는 함수 */}
                </View>
            </View>
        );
    }
}
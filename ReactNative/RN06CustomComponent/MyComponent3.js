import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent3 extends Component{

    // props가 전달되지 않았을 때를 대비하기: defaultProps(기본값)
    static defaultProps={
        title: "untitled",
        color: 'gold',
        onPress: ()=>{},
    }

    render(){
        return(
            <View style={{margin:8}}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onPress}></Button>
            </View>
        );
    }

}
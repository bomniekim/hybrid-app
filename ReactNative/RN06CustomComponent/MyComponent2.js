import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class MyComponent2 extends Component{
    render(){
        return(
            <View style={ {margin:16} }>
                <Text> {this.props.p1} </Text>
                <Button onPress={ this.props.onPress } title={this.props.title} color={this.props.color}></Button>
            </View>
        );
    }
}

clickBtn=()=>{
    alert('clicked');
}

// 다른 문서에서 이 컴포넌트를 인식할 수 있도록 
export default MyComponent2;
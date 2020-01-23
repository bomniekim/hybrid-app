import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen2 extends Component{

    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Screen #2</Text>

                <View style={ {margin:8} }>
                    <Button title="toggle drawer" onPress={this.toggleDrawer}></Button>
                </View>
            </View>
        );
    }

    toggleDrawer=()=>{
        const {navigation}= this.props;
        navigation.toggleDrawer();

    }
}
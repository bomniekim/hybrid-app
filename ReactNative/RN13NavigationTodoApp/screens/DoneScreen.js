import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DoneScreen extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.title}>Done List</Text>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root: {lex:1, justifyContent:'center', alignItems:'center'},
    title:{ fontWeight:'bold', margin:16}
});
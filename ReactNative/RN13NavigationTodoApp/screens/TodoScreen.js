import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class TodoScreen extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text style={style.title}>Todo List</Text>

                {/* 우선 Main.js의 todo 데이터를 받았는지 확인 */}
                <Text>Todo list number: {this.props.screenProps.todo.length}</Text>


                {/* 받은 todo 배열을 화면에 리스트로 보여주기 */}
                {
                    this.props.screenProps.todo.map((item, index)=>{ 
                        return (
                        <TouchableOpacity key={index}>
                            <Text>{item}</Text>
                        </TouchableOpacity>)
                    })
                }


                {/* 페이지 이동 버튼 */}
                <TouchableOpacity onPress={ ()=>{ this.props.navigation.navigate('Done')} }>
                    <Text style={{color:'blue'}}>Go to DoneList</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style= StyleSheet.create({
    root: {lex:1, justifyContent:'center', alignItems:'center'},
    title:{ fontWeight:'bold', margin:16}
});
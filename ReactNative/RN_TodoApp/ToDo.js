import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ToDo extends Component{

    state={
        isEditing: false,
        isCompleted: false,
    }
    render(){

        const {isCompleted} = this.state;

        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleCompleteTodo} >
                    <View style={
                        [styles.circle,
                        isCompleted? styles.completedCircle : styles.uncompletedCircle]} />
                    {/* 스타일을 배열로 작성해 여러 개를 줄 수 있음 */}
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm Todo</Text>
            </View>
        );
    }

    _toggleCompleteTodo = ()=>{
        this.setState(prevState =>{
            return{
                isCompleted: !prevState.isCompleted
                // 전의 boolean 값과 반대로 toggle
                // 완료되지 않은 상태에서 누르면 완료되고, 완료된 상태에서 누르면 완료되지 않은 상태로 돌아감
            };

        });
    };
}

const styles = StyleSheet.create({
    container:{
        width: width -70,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection:'row',
        alignItems:"center",

    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor:"red",
        borderWidth: 4,
        marginRight:15,
        marginLeft:5,
    },
    completedCircle:{
        borderColor:"#bbb"

    },
    uncompletedCircle:{
        borderColor: "#8BBCFF",

    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        marginVertical: 15,
    },
})


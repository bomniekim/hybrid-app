import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component{

    constructor(){
        super();

        this.state={
            inputText:"",
            text:"",
        };
    }
    render() {
        return (
            <View style={style.root}>
                <TextInput
                    style={style.textInput}
                    placeholder="Enter some text here"
                    onChangeText={this.changeText}
                    value={this.state.inputText}>
                </TextInput>
                <Button title="save data" onPress={this.saveData}></Button>

                <View style={{ marginTop: 16 }}></View>

                <Button title="load data" color="orange" onPress={this.loadData} ></Button>
                <Text style={style.text}>{this.state.text}</Text>

                <Button title="storage data" color="hotpink" onPress={this.storageData}></Button>
                <Button title="get data" color="navy" onPress={this.getData}></Button>
            </View>
        );
    }

    // textInput의 값이 변경될 때마다 호출되는 함수로 지정된 메소드
    changeText= (value)=>{ // 파라미터: 변경된 데이터
        this.setState({inputText:value});
    }

    saveData= ()=>{
        // state.inputText에 저장된 입력값을 영구적으로 저장하기 위해
        // AsyncStorage에 저장 [Android의 SharedPreferences와 거의 같음]
        AsyncStorage.setItem('Data', this.state.inputText); // ('key', value)
        Alert.alert('saved data');

        // 다음 입력이 편하도록 textInput에 써있는 값 제거
        this.setState({inputText:""});

    }

    loadData= ()=>{
        // 키값을 이용해서 저장된 값 읽어오기
        // 비동기 방식이므로 명령을 호출하자마자 결과가 오지 않음
        // 즉, 리턴으로 결과를 받지 못함
        // 따라서 promise 문법 사용 .then() 사용
        AsyncStorage.getItem('Data').then( (value)=>{this.setState({text:value})} )

    }

    storageData= async()=>{
        // ES7에서 도입된 문법: async await
        // 비동기로 처리하는 동안 기다려!
        await AsyncStorage.setItem('msg', "hello React Native");

        Alert.alert('saved data');
        this.setState({inputText:""});
    }

    getData= async()=>{
        let msg= await AsyncStorage.getItem('msg');
        if (msg !=null) this.setState({text:msg});
    }
}


const style = StyleSheet.create({
    root: { flex: 1, padding: 16 },
    textInput: {
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'black',
        marginBottom: 16,
    },
    text: {
        marginTop: 16,
        padding: 8,
        fontWeight: 'bold',
    }
});
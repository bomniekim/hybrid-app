import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native';


// ### AsyncStorage : Android의 SharedPreferences와 비슷한 역할 ###
// react native version >= 0.59 이전버전에서는 React Native에 포함되어 있었음
// $ npm install --save @react-native-community/async-storage

// # Link (0.6 버전부터는 autolink라서 필요없음)
// $ react-native link @react-native-community/async-storage

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
                    // 글씨 입력 후 다음 데이터 작성을 편하게 하기 위한 value값을 state.inputText변수로 설정
                    // savaData()메소드 마지막코드 참고]
                    value={this.state.inputText}>
                </TextInput>
                <Button title="save data" onPress={this.saveData}></Button>

                {/* 간격 조정을 위한 컴포넌트 */}
                <View style={{ marginTop: 16 }}></View>

                <Button title="load data" color="orange" onPress={this.loadData} ></Button>
                <Text style={style.text}>{this.state.text}</Text>

                {/* async-await 문법 사용하기 (ES7 의 새로운 문법) */}
                <Button title="storage data" color="hotpink" onPress={this.storageData}></Button>
                <Button title="get data" color="navy" onPress={this.getData}></Button>
            </View>
        );
    }

    // textInput의 값이 변경될 때마다 값을 저장하는 메소드
    changeText= (value)=>{ // 파라미터: 변경된 데이터
        this.setState({inputText:value});
    }

    saveData= ()=>{
        // state.inputText에 저장된 입력값을 영구적으로 저장하기 위해
        // AsyncStorage에 저장 ('Data'라는 식별자 키 사용)
        AsyncStorage.setItem('Data', this.state.inputText); // ('key', value)
        Alert.alert('saved data');

        // 다음 입력이 편하도록 textInput에 써있는 값 제거
        this.setState({inputText:""});

    }

    loadData= ()=>{
        // 식별자 'Data' 키값을 이용해서 AsyncStorage에 저장된 데이터 읽어오기
        // getItem()은 비동기 방식이므로 명령을 호출하자마자 결과가 오지 않음
        // 즉, 리턴으로 결과를 받지 못함
        // 따라서 promise 문법 .then() 사용
        AsyncStorage.getItem('Data').then( (value)=>{this.setState({text:value})} )

    }

    storageData= async()=>{
        // ES7에서 도입된 문법: async-await
        // 비동기로 처리하는 동안 기다려! (동기식으로 처리)
        // 메소드 앞에 async 키워드를 작성 필수

        // await이 명시된 메소드의 작업이 끝났을 때 다음 줄의 코드가 실행되도록(마치 동기식처럼)
        await AsyncStorage.setItem('msg', "hello React Native");

        Alert.alert('saved data'); // 이 alert()는 위의 await 키워드가 명시된 setItem()의 작업이 끝났을 때 실행됨
        this.setState({inputText:""});
    }

    getData= async()=>{
        let msg= await AsyncStorage.getItem('msg');
        // 이 리턴값 msg는 await 키워드가 명시된 getItem()의 작업이 끝났을 때 리턴됨
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
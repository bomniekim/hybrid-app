import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';

// 단순 스타일링된 TextInput을 만들 것이므로 별도의 state가 필요 없음
// 간단하게 stateless 컴포넌트로 사용 (const는 만들면서 export default 할 수 없음)

const InputComponent= (props)=>{ //파라미터로 property(속성)을 전달받음
    return (
        <View style={style.container}>
            <TextInput 
                style={style.input}
                secureTextEntry={props.secureTextEntry}  // 입력글씨 가려지는 속성을 컴포넌트 사용하는 곳으로부터 전달받기
                selectionColor="#292929"
                autoCapitalize="none" // 자동 첫글자 대문자 변환
                autoCorrect={false}   // 자동 교정 기능 여부 
                placeholder={props.placeholder}  // 힌트글씨는 사용하는 곳으로부터 전달받기
                placeholderTextColor="#c3c2c8"
                // 실제 앱의 기능을 구현할 때는 입력된 글씨를 저장하는 메소드가 있어야 함
                onChangeText={props.onChangeText}>
            </TextInput>
        </View>
    );
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor: '#D3D3D3',
        backgroundColor: '#FAFAFA',
        marginTop:8,
        marginBottom:8,        
    },
    input:{
        flex:1,   // TextInput의 높이를 container 높이 40으로 맞추기
        color: '#292929',
    }
});

//외부에서 사용할 수 있도록 export
export default InputComponent;
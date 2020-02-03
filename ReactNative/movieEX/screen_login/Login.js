import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import InputComponent from '../components/InputComponent';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component{
    render(){
        return (
            <View style={style.root}>                
                {/* 크게 2개 영역으로 구성 : 로그인 콘텐츠영역, 아래쪽의 회사이름 or 앱이름 표시영역 */}
                {/* 1. 로그인 영역 */}
                <View style={style.content}>
                    {/* 1.1 로고 */}
                    <Text style={style.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 */}
                    {/* TextInput은 로그인,회원가입,비밀번호리셋화면에 모두 사용되므로 사용빈도가 높음 */}
                    {/* 이를 일일이 스타일링하는 것이 번거롭고 수정도 어려워서 별도의 CustomComponent로 제작하여 재사용하기 */}
                    <InputComponent placeholder="이메일" secureTextEntry={false}></InputComponent>
                    <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>

                    {/* 1.3 비밀번호 재설정 버튼 - <Text>는 onPress가 동작함 */}
                    <Text style={style.resetPW} onPress={()=>{this.props.navigation.navigate('RestPW')}}>비밀번호 재설정</Text>

                    {/* 1.4 로그인 버튼 */}
                    {/* 가로 전체 사이즈의 버튼을 만들기 위해 View로 감싸기 */}
                    <View style={{width:'100%', marginBottom:24,}}>
                        <Button title="로그인" onPress={this.login}></Button>
                    </View> 

                    {/* 1.5 회원가입 */}
                    <Text style={style.signup}>
                        계정이 없으신가요? <Text style={style.signupLink} onPress={ ()=>this.props.navigation.navigate('SignUp') }>가입하기</Text>
                    </Text>
                </View>

                {/* 2. Footer영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}> MovieApp by bomnie</Text>
                </View>
            </View>
        );
    }//render

    login= async ()=>{
        //원래는 서버에 전송하는 코드 작성해야 하지만 시간상 이는 생략

        //대신 AsyncStorage를 이용해 디바이스에 로그인 유무를 저장
        await AsyncStorage.setItem('isLogin', 'email');//임시로 'email'이라는 글씨저장

        //로그인이 되었다면 앱의 메인화면인 MovieList.js를 가진 DrawerNav로 이동
        this.props.navigation.navigate('drawerNav');
    }

    //네비게이터 옵션 (static은 새로고침으로 반영되지 않으므로 반드시 re-run 필요)
    static navigationOptions={
        headerShown: false,  //헤더영역 없애기
    };

}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex:1, //높이가 footer제외 모든 영역
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding:8,
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    },
    logo:{
        color:'#292929',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:32,
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        color:'#3796EF',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
    },
    signup:{
        color:'#929292',
        textAlign:'center',
    },
    signupLink:{
        color:'#3796EF',
    }
});
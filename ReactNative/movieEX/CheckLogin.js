import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


//특별하게 화면을 구성하는 목적이 아니라 단순히 AsyncStorage에 저장된 로그인 정보의 유무에 따라 navigate만 수행하므로
// stateful Component( Component를 상속한 클래스)로 만들 필요 없어 stateless컴포넌트로 제작

const CheckLogin= (props)=>{ // stateless는 props를 파라미터로 전달받음

    // 아래 return으로 화면에 보이는 컴포넌트가 보여지는 작업 확인 후
    //AsyncStorage에 저장된 로그인 유무정보 읽어오기 (promiss문법 .then()사용)     
    AsyncStorage.getItem('isLogin')
    .then( (value)=>{
        if(value) props.navigation.navigate('drawerNav');
        // 로그인정보가 있다면 곧바로 앱의 메인화면인 MovieList.js 화면을 가진 drawerNav로 이동
        // * 참고, 원한다면  MovieList.js 직접이동할 수도 있음
        else props.navigation.navigate('loginStackNav');
        //로그인정보가 없다면 로그인화면(Login.js)을 가진 loginStackNav로 이동
    } );


    //AsyncStorage가 비동기 방식이므로 데이터를 로딩하는 사이에 잠시 보여질 수도 있는 화면이 있을 필요 있음 
    // 데이터가 작은사이즈면 거의 인식하지 못할 수 있음 (progressbar 같은 개념)
    return (
        <View style={style.root}>
            <ActivityIndicator></ActivityIndicator>
        </View>
    );
}

export default CheckLogin;


// - 테스트 목적으로 보여질 stateful component 화면
// export default class CheckLogin extends Component{
//     render(){
//         return (
//             <View style={style.root}>
//                 <Text>Check Login</Text>
//             </View>
//         );
//     }
// }

const style= StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});
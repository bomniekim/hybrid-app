// React 라이브러리 사용
import React, { Component } from 'react'; // jsx를 알아듣게 하는 import

//React Native 라이브러리 클래스들 import해야 사용 가능
import {Text, View, Button, StyleSheet, Image} from 'react-native';

// React Native에서는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    // React의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드(onDraw같은 메소드)
    // 이 메소드 안에서 JSX(Javascript+XML)언어로 뷰를 설계하고 이를 return해주면 됨

    render(){

        let name= "Sonny";
        let btnTitle="click me";

        // return <Text>Hello React Native!</Text>
        // 여러 줄로 xml을 작성하려면 ()가 필요함

        return (

            // render()안에 지역변수 선언

            // return() 안에 2개 이상의 Component는 리턴할 수 없음
            // <Text>Hello React Native!</Text>
            // <Text>Hello React Native!</Text>

            // 2개 이상을 리턴하려면 ViewGroup과 같은 역할을 하는 Component 필요(Web의 <div>같은 역할)
            // 안드로이드와 다르게 Layout을 사용하지 않고 View Component사용
            // View를 import해야 함
           
            // <View>
            //     <Text>Hello React Native</Text>
            //     <Text>Nice to meet you</Text>
            //     <Button title="button"></Button>
            // {/* Button은 title 속성이 필수 */}
            // </View>

            // 텍스트에 보여줄 글씨를 변수의 값으로 보여주기
            // JSX의 특징: <> 중간에 JS의 변수 사용이 가능==> { }을 사용!
            // <View>
            //     <Text>Hello {name}</Text>
            //     <Text>Nice to meet you</Text>
            //     <Button title={btnTitle}></Button>
            // </View>

            // 스타일 적용하기
            // style 속성: 적용방법이 css와 다소 다름
            // style 속성의 값은 [※객체※]로 제공되어야 함

            // <View style={ rootContainerStyle }> 
            //     {/* flex:1 ==android의 match-parent*/}
            //     <Text style={textStyle}>Hello {name}</Text>
            //     <Text style={plainTextStyle}>Nice to meet you</Text>

            //     {/* Button Component는 style 속성이 존재하지 않음 */}
            //     {/* <Button title={btnTitle} style={btnStyle}></Button> */}
            //     {/* 버튼의 색상은 color속성으로 처리 */}
            //     <Button title={btnTitle} color='#851fe4'></Button>

            //     {/* margin같은 속성을 사용하려면 버튼을 감싸는 뷰를 이용함*/}
            //     <View style={ {marginTop: 10, width: 150} }>
            //         <Button title={btnTitle} color="orange"></Button>
            //     </View>

                
            //     {/* 스타일 여러 개를 하나의 객체에 모두 설정하여 사용하기 */}
            //     {/* [StyleSheet 클래스]를 사용 */}

            //     <View style={ styles.root }>
            //         <Text style={ styles.mainText}>hello React Native</Text>
            //         <Text style={ styles.plainText}>Nice to meet you</Text>
            //         <Button title={ btnTitle } color="lightpink"></Button>
            //     </View>
            // </View>

            
            <View style={ styles.root }>
                <Text style={ styles.mainText}>hello React Native</Text>
                <Text style={ styles.plainText}>Nice to meet you</Text>
                <Button title={ btnTitle } color="indigo"></Button>
                {/* 이미지 컴포넌트 사용하기 */}
                {/* 이미지의 경로명 작성 시에 문자열 결합 +를 사용하면 error */}

                <Image source={ require('./images/pengsoo.jpg') } style={ styles.img }></Image>
            </View>
            
        );
    }
}  


// MyApp class 밖에 변수를 선언-> '전역변수' (물론 MyApp.js안에서만)
const rootContainerStyle={
    backgroundColor: '#afe1df',
    flex: 1,
    // 기본단위는 dp
    padding: 16,

    // 컴포넌트 가로축 가운데 정렬하기
    // 현재 flex-direction에 해당하는 세로방향의 반대축 정렬인 align-items 속성 사용
    // alignItems: 'center',
};

// 스타일 변경
const textStyle={
    color: '#050099',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
};

const plainTextStyle={
    margin: 8,
    color: '#5D5D5D',
};

const btnStyle={
    margin: 50,
    backgroundColor: '#ff0000'
};


// 스타일 변수들을 하나의 객체에 모아서 만들기
const styles= StyleSheet.create({
    root: {
        backgroundColor: '#afe1df',
        flex: 1,
        padding: 16,
    },

    mainText: {
        color: 'navy',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
    },

    plainText: {
        marginTop: 8,
        color: 'darkgray',
    },

    img: {
        margin: 4,
        flex: 1,
        width: null, // 가로 사이지를 화면의 사이즈로 맞춰줌
        resizeMode:'contain',

    },
});

// MyApp class를 다른 문서에서 사용하려면 export 해줘야 함(index.js에서 처음 실행되는 Component로 등록하고자 함)
export default MyApp;
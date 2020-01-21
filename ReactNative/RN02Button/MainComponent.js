import React, {Component} from 'react';
import {Text, View, Button, Alert, Image} from 'react-native';

class MainComponent extends Component{

    // 멤버변수 만들기
    // let name; //error

    // 모든 JavaScript문법에서 class안의 멤버변수는 생성자 안에서 this.키워드로 생성 및 지정
    constructor(){
        // 상속받은 클래스는 반드시 생성자를 만들 때 명시적으로 부모 생성자를 호출해야만 함: super()
        // 생략하면 error
        super(); 

        // 3-2)의 실습에 사용할 멤버변수 선언
        // let text; // 이건 멤버변수가 아닌 지역변수
        this.text="Hello";

        // 3-5) state: 화면의 갱신을 자동으로 해주는 데 영향을 주는 객체참조변수
        // state 변수는 생성하는 것이라기 보다는 원래부터 Component클래스의 멤버변수로 존재-> 대입의 개념
        this.state={
            text: "Hello",
            // 이미지를 사용할 때는 require()를 통째로 사용하는 것이 필수
            img: require('./images/pengsoo.jpg'),
        };
    }

    //이 컴포넌트 클래스가 화면에 보여줄 내용을 그려내는(컴포넌트를 리턴하는) 함수
    render(){
        //뷰(컴포넌트)를 리턴
        return (
            // <View style={ {padding:16, flex:1 }}>
            //     {/* 1) 기본 버튼: 필수속성 title - 버튼의 글씨지정*/}
            //     {/* 버튼 클릭이벤트 처리: onPress - 버튼 클릭 시 발동할 콜백함수 지정 */}
            //     {}안에 함수객체명이 아니라 함수호출문 ()를 쓰면 onPress상황과 상관없이 함수가 실행됨
            //     {/* onPress에 함수를 지정하는 것이지 실행하는 것이 아니므로 () 쓰지 말아야 함 */}
            //     <Button title="button" onPress={ clickBtnFunction }></Button>

            //     {/* 1-4,5)익명함수를 변수에 대입하지 않고 곧바로 사용가능 */}
            //     {/* <Button title="button" onPress={ function(){Alert.alert('clicked')}}></Button>
            //     <Button title="button" onPress={ ()=>{Alert.alert('clicked')}}></Button> */}


            //     {/* 2) 콜백함수는 멤버메소드로 만드는 것을 권장 */}
            //     {/* 멤버 사용 시 반드시 this. 키워드를 써야함 */}
            //     <Button title="button" color="orange" onPress={ this.clickBtn }></Button> 
            // </View>


            // 3) 버튼 클릭 시 텍스트 변경하기
            // 기존의 방식과 완전히 다름 
            // 기존의 방법: 버튼을 클릭하면 글씨를 가지고 있는 TextView를 참조하여 글씨를 변경
            // RN의 방법: state 변수로 텍스트의 값을 설정하고 값이 변경되면 자동으로 render()가 다시 실행되어 자연스럽게 갱신
        
            // <View style={ {padding:16, flex:1} }>
            //     <Button title="button" onPress={ this.changeTextByClickBtn }></Button>

            //     {/* Text가 보여줄 내용이 고정된 텍스트가 아니라 변수로 설정하기 */}
            //     {/* 3-1) 우선은 전역변수로 만들어보기 */}
            //     {/* <Text style={ textStyle }>{ text }</Text> */}
            //     {/* 전역변수로 만드니깐 갱신되지 않음
            // </View>

        
            
            //  3-2) 멤버변수로 텍스트 값 지정해보기 
            // </View>
            // <View style={ {padding:16, flex:1} }>
            //     <Button title="button" onPress={ this.changeMemberTextByClickBtn }></Button>
            
            //     {/* Text가 보여줄 내용이 고정된 텍스트가 아니라 변수로 설정하기 */}
            //     {/* 3-1) 우선은 전역변수로 만들어보기 */}
            //     {/* <Text style={ textStyle }>{ text }</Text> */}
            //     {/* 전역변수로 만드니깐 갱신되지 않음
            
            //     //  3-2)멤버변수로 텍스트 값 지정해보기 
            //     <Text style={ textStyle }>{ this.text }</Text>
    
            //      해결1. bind() 이용
            //     <Button title="button" onPress={ this.changeMemberTextByClickBtn.bind(this) }></Button>
            //     <Text style={ textStyle }>{ this.text }</Text>
            
            //      해결2. 화살표함수 이용
            //     <Button title="button" onPress={ this.changeTextByArrow }></Button>
            //     <Text style={ textStyle }>{ this.text }</Text>

            // </View>


            // 3-5) state 변수를 이용해서 <Text> 글씨 변경과 이미지 이미지 변경
            <View style={ {padding:16, flex:1} }>
                <Button title="change text" onPress={this.changeText}></Button>
                <Text style={ textStyle }>{ this.state.text }</Text>

                <View style={ {marginTop:16, width:150 } }>
                    <Button title="change image" color="orange" onPress={this.changeImg.bind(this)}></Button>
                </View>
                <Image source={ this.state.img } style={ imgStyle }></Image>
            </View>
        
        );
    }


    // 3-5)의 실습에 사용할 화살표함수
    changeText= ()=>{
        // this.state.text="nice to meet you";
        // 자동갱신이 되려면 state의 값을 반드시 setState() 사용해야 함
        // setState의 특징: 객체를 받으면 전체를 바꾸는 것이 아니라 필요한 멤버 속성만 바꿈
        this.setState({text:"nice to meet you"});
    }
    
    // 화살표 함수가 아닌
    // 일반함수로도 this.를 통해 화면 갱신 가능: bind()사용
    changeImg= function() {
        // bind()로 전달된 this객체가 이 함수 안에서의 this로 연결됨
        this.setState( {img: require('./images/pengsoo2.jpg')} );
        
    }

    // 2)의 실습에 사용할 메소드
    clickBtn(){
        Alert.alert('clicked!');
    }

    // 3-1)의 실습에 사용할 메소드 
    changeTextByClickBtn(){
        // Text가 보여주는 전역변수 값을 변경
        text="Nice to meet you";
        Alert.alert(text);
        // text의 값은 변경되었지만 화면 갱신이 되지 않음
    }

    // 3-2)의 실습에 사용할 메소드 
    changeMemberTextByClickBtn(){
        // this.text 멤버변수 값 변경
        // this.text="Nice to meet you";
        // 일반 함수 안에서의 this는 함수(객체) 자체를 의미하므로 error

        // 해결방법
        // 1. bind()이용
        // 2. 화살표함수 이용
    }

    // 함수를 만드는 다른 방법
    //3-3) 익명함수로 만드는 방법
    changeTextByAnonymous= function() {

        // 익명함수도 this는 본인 객체(함수)를 의미함
        // 그래서 this.text가 MainComponent의 text 변수가 아니었음
        this.text="Good!";
    }

    //3-4) 화살표함수로 만드는 방법
    changeTextByArrow= ()=>{
        this.text="Have a good day";

        // 3-4)로 해도 어찌되었든 화면갱신은 안됨
        // 화면을 갱신하라는 별도의 명령이 없기 때문
        // 화면을 갱신하라는 메소드는 존재하나 권장하지는 않음
        this.forceUpdate(); // re-render() 호출 함수
    }

    // RN에서는 화면의 갱신이 자동으로 이루어지는 것을 권장
    // 3-5) 그래서 Component 클래스 안에 아주 특별한 멤버변수를 이미 만들어 놓았음
    // (※핵심※) state: 변화하는 데이터를 다룰 때 사용하는 변수
    // state의 값을 변경하면 자동으로 화면이 갱신되도록 시스템화되어 있음
    // 즉, 이 컴포넌트 클래스가 상태값(state)을 저장하고 있고 이 state값을 화면에 보여준다는 개념을 형성시켜 놓았음

}

// 1)의 실습에 사용할 버튼 클릭 콜백함수 : 1-1) 선언적함수(전역함수)
// function clickBtnFunction(){
//     // alert('clicked'); // 웹용 alert
//     Alert.alert('clicked');
// }

// 1-2) JS에서는 함수도 객체이므로 객체를 참조하듯이 함수를 변수에 넣을 수 있음: 익명함수
// let clickBtnFunction= function(){
//     Alert.alert('Pressed Button');
// }


// 1-3) 두꺼운 화살표함수(java의 람다식 표기법)
let clickBtnFunction= ()=>{
    Alert.alert('Pressed Button by Arrow function');
}

// React Native는 객체 지향이므로 전역함수를 사용하는 것을 권장하지 않음
// 객체의 버튼 이벤트는 그 객체 안에 처리 메소드가 있는 것이 좋음 --> 실습 2)


// 3)의 실습에서 사용할 전역변수 
let text="Hello";


// **** 종합 **********************************************************************
    // 멤버변수는 state를 이용
    // 멤버메소드는 화살표함수를 이용하는 것이 편하게 앱을 제작하는 기법이라고 볼수 있음 
    // ****************************************************************************

// 스타일 변수
const textStyle={
    marginTop:16,
    fontWeight:'bold',
    paddingLeft:10,  
    paddingRight:10,  
};

const imgStyle={
    marginTop:8,
    flex:1,
    width:null,
    resizeMode:'cover',
}


//다른 문서에서 이 클래스를 알아듣도록(import 하도록) export
export default MainComponent;
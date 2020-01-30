import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';


// 새로운 Custom Component를 만드는 2가지 방법- 즉, RN에서는 2가지 종류의 Component가 존재 

// 1. stateful Component : Component class를 상속해서 만드는 일반적인 Component
// 2. stateless Component : 마치 익명함수를 만드는 방식처럼 만들어진 (함수형) Component

// 둘의 차이?
// stateless는 class가 없으니 멤버변수를 만들 수 없기에 state 변수를 가질 수 없음
// 또한 Lifecycle 메소드도 존재하지 않음


export default class Main extends Component{

    constructor(){
        super();
        this.state={
            msg:"Hello",
        }
    }

    clickBtn= ()=> this.setState({msg:"Nice to meet you"})

    render(){
        return(
            <View style={{flex:1, padding:16}}>
            
                {/* 1. stateful Component */}
                <MyComponent></MyComponent>

                {/* 2. stateless Component: state멤버변수 없음*/}
                {/* 간단한 컨텐츠를 화면에 보여주고자 할 때 사용하기 편한 Component*/}
                <MyComponent2></MyComponent2>


                {/* 1) state는 없지만 props는 가질 수 있음 */}

                {/* 1.1) stateful 컴포넌트가 props를 받는 방법 */}
                <MyComponent3 data="sonny"></MyComponent3>
                <MyComponent3 data="dele"></MyComponent3>

                {/* 1.2) stateless 컴포넌트가 props를 받는 방법 */}
                <MyComponent4 data="harry"></MyComponent4>
                <MyComponent4 data="mussa"></MyComponent4>

                <MyComponent5 data="Tottenham" title="COYS"></MyComponent5>


                {/* 컴포넌트들 간의 제어 : Main 컴포넌트의 state값이 BB 컴포넌트의 props로 전달 */}
                <AA onPress={this.clickBtn}></AA>
                <BB msg={this.state.msg}></BB>
                
            </View>
        );

    }
}


// 1. stateful Component
class MyComponent extends Component{
    constructor(){
        super();
        this.state={text:"MyComponent"}
    }

    render(){
        return(
            <View>
                <Text style={{padding:8, margin:8}}>Hello {this.state.text}</Text>
            </View>
        );
    }
}

// 2. stateless Component : 익명함수를 만드는 방법과 동일
// 문법형태를 보면 Component를 상속하여 class를 만들고 render()하는 코드를 축약해서 작성한 모습처럼 보이기도 함
// 그러나 실제로 class는 없기에 constructor를 만들 수 없고 state도 가질 수 없음 -> stateless!
const MyComponent2 =()=>{
    // constructor를 만들 수 없음
    return(
        <View>
            <Text style={{padding:8, margin:8}}>MyComponent2</Text>
        </View>
    );
}

// * 위의 화살표 함수 대신 일반 익명함수 or 일반함수를 만드는 방법으로 만들어도 되나 
// this 키워드와 파라미터의 문제로 인해 화살표함수를 사용하는 것을 권장


// 1.1) props를 받는 stateful Component
class MyComponent3 extends Component{
    render(){
        return(
            <Text>MyComponent3: {this.props.data}</Text>
        );
    }
}



// 1.2) props를 받는 stateless Component
// const MyComponent4= ()=>{
    //  return <Text>MyComponent4: {this.props.data} </Text>
    //  여기서 this는 감싸는 클래스가 없음
    //  Component를 상속하지 않았으므로 this.props가 undefined(존재하지 않음)
    // }
    
    
// stateless는 전달된 속성들(property)을 파라미터로 받음
const MyComponent4= props=> <Text>MyComponent4: {props.data}</Text>


// stateless Component 역시 여러 개의 파라미터를 전달할 수 있음
const MyComponent5= ( props )=>{
    return <View>
        {/* 파라미터로 받은 객체의 properties 출력 */}
              <Text>{ props.data }</Text>
              <Text>{ props.title }</Text>
           </View>
}

// props(파라미터)를 구조분해할당으로도 받을 수 있음
const MyComponent6= ( {data, title} )=>{
    return <View>
              <Text>{ data }</Text>
              <Text>{ title }</Text>
           </View>
}


const AA= (props)=><Button title="button" onPress={props.onPress}></Button>
const BB= props=><Text>{props.msg}</Text>
// const BB= ({msg})=><Text>{msg}</Text> // 구조분해할당
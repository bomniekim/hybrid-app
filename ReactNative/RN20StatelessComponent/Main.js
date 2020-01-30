import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

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
                {/* 새로운 Custom Component를 만드는 2가지 방법 */}
                {/* 1. stateful Component */}
                <MyComponent></MyComponent>

                {/* 2. stateless Component: state멤버변수 없음 (함수형 컴포넌트) */}
                <MyComponent2></MyComponent2>

                {/* state는 없지만 props는 가질 수 있음 */}
                {/* stateful 컴포넌트가 props를 받는 방법 */}
                <MyComponent3 data="sonny"></MyComponent3>
                <MyComponent3 data="dele"></MyComponent3>

                {/* stateless에서 props를 받는 방법 */}
                <MyComponent4 data="harry"></MyComponent4>
                <MyComponent4 data="mussa"></MyComponent4>

                <MyComponent5 data="Tottenham" title="COYS"></MyComponent5>


                {/* 컴포넌트들 간의 제어:  */}
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



// 2. stateless Component
const MyComponent2 =()=>{
    // constructor를 만들 수 없음
    return(
        <View>
            <Text style={{padding:8, margin:8}}>MyComponent2</Text>
        </View>
    );
}


class MyComponent3 extends Component{
    render(){
        return(
            <Text>MyComponent3: {this.props.data}</Text>
        );
    }
}

// const MyComponent4= ()=>{
    //     return <Text>MyComponent4: {this.props} </Text>
    //     여기서 this는 감싸는 클래스가 없기 때문에 전역이 됨
    // }
    
    
// stateless는 전달된 속성들(property)을 파라미터로 받음
const MyComponent4= props=> <Text>MyComponent4: {props.data}</Text>


const MyComponent5= ( props )=>{
    return <View>
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
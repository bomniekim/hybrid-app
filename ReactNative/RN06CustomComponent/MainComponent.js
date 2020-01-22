import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';

export default class MainComponent extends Component{

    // 특별한 멤버변수
    state={msg:"Hello World"};

    render(){
        return (

            // 1. 나만의 Component 만들어 사용하기
            <View style={style.root}>
                <Text>Hello React</Text>
                <MyComponent></MyComponent>
            </View>
            // 이를 이용하여 header, body, nav등의 영역으로 나누어 코드 작성 가능


            //2. Hello Sonny!의 Sonny!대신 다른 여러 이름을 보여주기
            // property를 이용해서 값을 전달할 수 있음: property의 이름은 임의로 지정 가능
            // <View style={style.root}>
            //     <Text>Hello React</Text>
            //     <MyComponent></MyComponent>
            // </View>

            // <View style={ style.root }>
            //     <Text>{ this.state.msg }</Text>

            //     {/* property를 이용해서 값을 전달할 수 있음 */}
            //     <MyComponent name="Son" title="click me"></MyComponent>
            //     <MyComponent name="Harry" title="button"></MyComponent>

            //     {/* 별도 .js의 컴포넌트 사용 */}
            //     {/* 버튼 콜백함수를 전달 */}
            //     <MyComponent2 onPress={this.changeMessage} p1="World" title="press" color="orange"></MyComponent2>
                
            //     <MyComponent3 onPress={ this.changeMessage} title="Dele" color="indigo"></MyComponent3>
            //     <MyComponent3 onPress={ this.changeMessage} title="Dele"></MyComponent3>

            //     {/* title은 button의 필수속성이므로 전달하지 않으면 error */}
            //     {/* defaultProps 설정 전 */}
            //     {/* <MyComponent3 onPress={ this.changeMessage} ></MyComponent3> */}
                
            //     {/* 즉, 필수속성이 아닌 경우 전달되지 않아도 error 아님 */}
            //     <MyComponent3 title="Dele" color="hotpink"></MyComponent3>
            //     {/* static defaultProps를 사용해서 필수속성을 전달하지 않아도 error가 나지 않도록 대비가능 */}
            //     <MyComponent3 onPress={ this.changeMessage} ></MyComponent3>
                
            //     {/*  */}
            //     <MyComponent4 title="Press the button" color="navy" onPress={this.changeMessage}></MyComponent4>
            // </View> 
        );
    }

    changeMessage=()=>{
        this.setState({msg:"Nice to meet you"});
    }
}// MainComponent class


//나만의 컴포넌트 클래스 (android의 CustomView)
class MyComponent extends Component{
    // 이 컴포넌트를 사용하면서 전달한 속성들은 모두 특별한 멤버변수 this.props에 저장

    // render(){
    //     return (
    //         <View style={ {margin:16} }>
    //             <Text style={ {marginBottom:8} }>Hello Sonny!</Text>
    //             <Button title="click me"></Button>
    //         </View>
    //     );
    // }


    render(){
        return (
            <View style={ {margin:16} }>
                <Text style={ {marginBottom:8} }>Hello {this.props.name}</Text>
                <Button title={this.props.title}></Button>
            </View>
        );
    }
}


//스타일 객체
const style= StyleSheet.create( {
    root:{
        flex:1,
        padding:16,
    }
} );
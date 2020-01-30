import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{
    // Main class state에 저장된 문자열 데이터
    state= {data:"Bomin"};

    // state를 변경하는 메소드를 만들고 이를 자식에서 사용할 수 있도록 전달
    changeData=(data)=>{
        // this.setState({data: data}) 
        this.setState({data}) // 키값과 변수명이 같으면 생략 가능
    }

    render(){
        return(
            <View style={{padding:16}}>
                <Text>Main class의 state data: {this.state.data}</Text>

                {/* 부모-자식-손자-증손자로 data를 전달하는 구조 (상속의 개념은 아님)*/}
                {/* Main의 자식 컴포넌트를 추가하면서 데이터 전달 */}
                <First data={this.state.data} onPress={this.changeData}></First>

            </View>
        );
    }
}

// 1) Main의 자식 컴포넌트
class First extends Component{
    render(){
        return(
            // 1.1) Main으로부터 property로 전달받은 데이터 출력
            <View style={{padding:16, backgroundColor:'lightgreen'}}>
                <Text>Main으로부터 받은 data: {this.props.data}</Text>

                {/* 1.2) Main에게 받은 data를 First의 자식(Main의 손자)인 Second에게 전달하기 */}
                <Second data={this.props.data} onPress={this.props.onPress}></Second> 
                {/* this.props.onPress는 속성 이름을 전달한 것 */}
            </View>
        );
    }
}

//2) First의 자식이자 Main의 손자인 컴포넌트
class Second extends Component{

    state={data:this.props.data};

    render(){
        return(
            <View style={{padding:16, backgroundColor:'skyblue'}}>
                <Text>First로부터 받은 data: {this.state.data}</Text>

                
                {/* 전달받은 값 변경하는 버튼 */}
                <View style={{marginTop:8}}>
                    <Button title="change data" color="indigo" onPress={ this.clickBtn } ></Button>
                </View>
                <View>
                    <Button title="change data" color="indigo" onPress={ ()=>{ this.props.onPress('hi'); } }></Button>
                </View>
            </View>
        );
    }
    
    // 2.1) Second에서 데이터를 변경하는 이벤트 처리: props를 직접 변경해보기 
    clickBtn=()=>{
        // this.props.data="Nice";
        this.setState({data:"Nice"});
        // 이렇게 하면 Second의 data 값만 변경됨
        // 변경할 data를 state로 보유하고 있는 Main에서 변경하는 코드를 작성해야하며 이를 Second에서 호출해야 함
    }
}
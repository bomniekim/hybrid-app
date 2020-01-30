import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main2 extends Component{

    //Main클래싀 state에 저장된 문자열 데이터
    state= {data:"Hello"};

    //state를 변경하는 메소드를 만들고 이를 자식에서 사용할 수 있도록 전달
    chageData= data=> this.setState({data});

    render(){
        return (
            <View style={{padding:16,}}>
                <Text>Main클래스의 state Data : {this.state.data} </Text>

                {/* 부모-자식->손자->증손자로 data를 전달하는 구조 */}
                {/* Main의 자식 컴포넌트 추가하면서 데이터 전달 */}
                <First data={this.state.data} onPress={this.chageData}></First>
            </View>
        );
    }
}//Main...

//Main의 자식 컴포넌트
class First extends Component{
    render(){
        return (
            <View style={{padding:16, backgroundColor:'lightgreen'}}>
                <Text>Main으로 부터 받은 Data : {this.props.data}</Text>

                {/* Main에게 받은 데이터를 First의 자식에게 전달하기 */}
                <Second data={ this.props.data } onPress={this.props.onPress}></Second>
            </View>
        );
    }
}//First

//First의 자식(Main의 손자) 컴포넌트
class Second extends Component{

    state= {data:this.props.data}

    render(){
        return (
            <View style={{padding:16, backgroundColor:'blue'}}>
                <Text style={{color:'white'}}>First로 부터 받은 Data : {this.props.data}</Text>

                {/* 전달받은 값 변경하는 버튼 */}
                {/* 변경할 데이터를 state로 보유하고 있는 Main에서 변경하는 코드 작성해야하며 이를 이 Second에서 호출해야만 함 */}
                <View style={{marginTop:8}}>
                    <Button color="orange" title="changeData" onPress={ ()=>this.props.onPress('Good') }></Button>
                </View>
            </View>
        );
    }

    clickBtn=()=>{
        //this.props.data="Nice";
        this.setState({data:"Nice"});
    }
}
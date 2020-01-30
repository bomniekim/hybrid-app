import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Third from './Third';

// Flux패턴(일종의 전역변수 사용)을 구현한 Context API사용

// Context 객체 만들기 (React 클래스의 메소드)
export const MyContext = React.createContext(); // Third.js에서도 사용할 수 있도록 export


export default class Main extends Component{

    // Main의 state data
    state= {data:"Bomin"};

    changeData=(data)=>{
        this.setState({data: data}); // 키값과 변수명이 같으면 키값 생략가능(키값이 자동으로 변수명으로 됨)
    }

    render() {
        return (
            // 자식들에게 데이터를 전달하지 않고 값을 제공하는 컴포넌트(Provider)사용
            // Provider 컴포넌트의 자식들은 어느 계층에서든 Consumer로써 Provider에 value 속성값을 사용할 수 있음
            // * Root로써 Provider로 사용하면 됨

            <MyContext.Provider
                value={ // 일종의 전역변수를 만드는 영역
                    {
                        data: this.state.data,   // 데이터 전달
                        changeData: this.changeData // 메소드 전달
                    }
                }>
                <View style={{ padding: 16, }}>
                    <Text>Main의 데이터 : {this.state.data}</Text>

                    {/* 자식 컴포넌트 - 데이터 전달 */}
                    <First></First>
                </View>
            </MyContext.Provider>
        );
    }
}

class First extends Component{
    render(){
        return (
            <View style={{marginTop:16, backgroundColor:'lightgreen', padding:16}}>
                <Text style={{fontWeight:'bold'}}>First : </Text>
                {/* Main의 Provider에 의해 저장된 value를 사용하고 싶다면 */}
                {/* Consumer 컴포넌트 사용 */}
                <MyContext.Consumer>
                    {/* 이 Consumer가 보여줄 View를 return 하는 콜백 화살표 함수 작성 */}
                    {
                        //Consumer가 자동으로 호출해주는 함수
                        (value)=>{ // 파라미터: Provider의 value속성 값
                            return <Text>Main의 data: {value.data}</Text>
                        }
                    }
                </MyContext.Consumer>

                {/* 손자 컴포넌트 - 데이터 전달 없음*/}
                <Second></Second>

                {/* 별도의 js문서의 컴포넌트 사용해보기 - 데이터 전달 없음 */}
                <Third></Third>
            </View>
        );
    }
}

class Second extends Component{
    render(){
        return (
            <View style={{marginTop:16, backgroundColor:'skyblue', padding:16}}>
                <Text style={{fontWeight:'bold'}}>Second : </Text>

                {/* Main의 전역 value 사용하기 */}
                <MyContext.Consumer>
                    {
                        (value)=>{
                            return (
                                <View>
                                    <Text>Main의 data: {value.data}</Text>
                                    <Button title="change data" color="indigo" onPress={()=>{value.changeData('ZZz')}}></Button>
                                </View>
                                );
                        }
                    }
                </MyContext.Consumer>
            </View>
        );
    }
}
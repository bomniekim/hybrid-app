import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// 외부문서 export후 import
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';

export default class MainComponent extends Component{

    // 특별한 멤버변수
    state={msg:"Hello World"};
    
    render(){

        // 5의 실습에서 사용할 render()의 지역변수
        let titles=["first", "second", "third"];
        let colors=["green","orange","hotpink"]

        return (

            // 1. 나만의 Component 만들어 사용하기
            // <View style={style.root}>
            //     <Text>Hello React</Text>
            //     <MyComponent></MyComponent>
            // </View>
            // 이를 이용하여 header, body, nav등의 영역으로 나누어 코드 작성 가능


            //2. Hello Sonny!의 Sonny!대신 다른 여러 이름을 보여주기
            // property를 이용해서 값을 전달할 수 있음: property의 이름은 임의로 지정 가능
            // <View style={style.root}>
            //     <Text>Hello React</Text>
            //     <My_Component name="Son" title="button1"></My_Component>
            //     <My_Component name="Harry" title="button2"></My_Component>
            // </View>


            // 3. 별도의 .js의 컴포넌트를 사용하여 커스텀하기
            // <View style={style.root}>
            //     <Text>{ this.state.msg }</Text>
            //     {/* 3.1 onPress속성에 버튼 콜백함수를 전달 */}
            //     <MyComponent2 onPress={this.changeMessage} p1="World" title="press" color="orange"></MyComponent2>
                
            //     <MyComponent3 onPress={ this.changeMessage} title="Dele" color="indigo"></MyComponent3>
            //     <MyComponent3 onPress={ this.changeMessage} title="Dele"></MyComponent3>
            // </View>


            // 3.2 만약 MyComponent3에서 사용하는 속성을 모두 전달하지 않는다면?
            <View style={style.root}>
                <Text>{this.state.msg}</Text>
                    {/* title은 button의 필수속성이므로 전달하지 않으면 error */}
                    {/* defaultProps 설정 전 */}
                    {/* <MyComponent3 onPress={ this.changeMessage} ></MyComponent3> */}
                    {/* 즉, 필수속성이 아닌 경우 전달되지 않아도 error 아님 */}
                    {/* : onPress속성으로 함수를 전달하지 않으면 단지 클릭했을 때 아무 반응이 없을 뿐임 */}
                    <MyComponent3 title="Dele" color="hotpink"></MyComponent3> 

                    {/* 4. static defaultProps를 사용해서 필수속성을 전달하지 않아도 error가 나지 않도록 대비가능 */}
                    <MyComponent3 onPress={ this.changeMessage} ></MyComponent3>    
            </View> 
            
            // 4. 속성이 여러 개인 경우 한번에 전달하기: ... argument 기법 사용하기
            // MyComponent4.js 문서 참고!
            // <View>
            //     <MyComponent4 title="Press the button" color="navy" onPress={this.changeMessage}></MyComponent4>
            // </View>

            
            // 5. title의 문자열 값을 배열데이터로 전달해보기 
            // render() 안에 지역변수로 만들어 보기

            // <View style={style.root}>
            //     {/* 지역변수이므로 {}안에 this키워드 없이 배열요소 사용 */}
            //     <MyComponent4 title={ titles[0]}></MyComponent4>
            //     <MyComponent4 title={ titles[1]}></MyComponent4>
            //     <MyComponent4 title={ titles[2]}></MyComponent4>

            //     {/* colors 배열도 같이 적용해보기 */}
            //     <MyComponent4 title={ titles[0]} color={colors[0]}></MyComponent4>
            //     <MyComponent4 title={ titles[1]} color={colors[1]}></MyComponent4>
            //     <MyComponent4 title={ titles[2]} color={colors[2]}></MyComponent4>
            // </View>

            // 이렇게 Custom Component를 만들어 사용할 때 전달하는 값들을
            // 대량의 데이터(배열)로 관리하여 리스트뷰 형태로 응용 (RN07 예제)

        );
    }

    changeMessage=()=>{
        this.setState({msg:"Nice to meet you"});
    }
}// MainComponent class


//나만의 컴포넌트 클래스 (android의 CustomView)
class MyComponent extends Component{

    render(){
        return (
            <View style={ {margin:16} }>
                <Text style={ {marginBottom:8} }>Hello Sonny!</Text>
                <Button title="click me"></Button>
            </View>
        );
    }

}

class My_Component extends Component{

    // 이 컴포넌트를 사용하면서 전달한 속성들은 모두 특별한 멤버변수 this.props에 저장

    render(){
        return (
            <View style={ {margin:16} }>
                {/* My_Component를 사용할 때 설정한 속성 중 name 속성으로 지정한 값 사용 */}
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
import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native';

export default class MainComponent extends Component{

    // 생성자 : MainComponent클래스가 만들어질 때 자동으로 실행되는 메소드
    constructor(){
        super();

        // state: 데이터 변경 및 화면 자동갱신을 하게 하는 특별한 멤버변수
        this.state= {
            text: "Hello",
            msg:"",
        };

        // 일반 멤버변수 (사용자 입력 값을 저장하는 변수: 이 변수값이 변해도 화면은 자동 갱신되지 않음)
        this.inputText="";
        this.inputText2="";
    }

    render(){
        const {msg}= this.state; // 구조분해할당

        return (


            //  1) 텍스트를 입력받을 수 있는 TextInput : android의 EditText
            // 기본적으로 한 줄 입력
            // <View style={ style.root }>
            //         <TextInput style={style.TextInput}></TextInput>
            // </View>


            // 2) TextInput을 이용하여 입력한 글씨를 Text에 보이기
            // 객체를 참조하여 제어하는 방식이 아닌 binding 방식으로 데이터를 보여줌 
            // onChangeText에 실행할 함수를 지정하여 텍스트가 변경되도록 
            // <View style={style.root}>
            //     {/* 이 경우 TextInput창에 글씨를 입력할 때 마다마다 텍스트가 변경됨 */}
            //     <TextInput style={style.textInput} onChangeText={this.changeText}></TextInput>

            //     {/* 입력된 글씨를 보여주는 Text컴포넌트 */}
            //     <Text style={style.plainText}>{this.state.text}</Text>
            // </View>


            // 3) TextInput 작성을 완료(submit)하면 텍스트의 내용 변경하기
            // onSubmitEditing: 텍스트 입력 후 '키보드'의 완료버튼을 눌러 입력완료를 시키도록하는 속성
            // <View style={style.root}>
            //     <TextInput style={ style.textInput } onChangeText={ this.changeText2} onSubmitEditing={this.submitEdit.bind(this)}></TextInput>
            //     <Text style={style.plainText}>{this.state.text}</Text>
            // </View>


            // 4) 버튼 클릭 시 TextInput의 값을 얻어와서 Text 컴포넌트에 보여주기
            // {/* Text를 전부 입력하고 입력 버튼을 눌렀을 때 입력된 값으로 변경되도록 코딩 */}
            <View style={style.root}>
                <TextInput style={ style.textInput } onChangeText={ this.changeText2 }></TextInput>
                <Text style={style.plainText}>{this.state.text}</Text>
                <View style={ {marginTop:16, marginBottom:16} }>
                    <Button title="완료" onPress={ this.clickBtn }></Button>
                </View>

                {/* 5) textInput 여러 줄 입력 */}
                {/* true라는 boolean값은 JS문법이므로 {} 안에 값을 입력 */}
                <TextInput onChangeText={ value=> this.inputText2 = value } multiline={ true } numberOfLines={4} style={ style.textInput2 }></TextInput>
                <Button title="입력완료" onPress={ ()=> this.setState({ msg:this.inputText2 })}></Button>
                <Text style={ style.plainText }>{ msg }</Text>
            </View>

           
        );
    }

    // 버튼 클릭 시 실행되는 함수
    clickBtn= ()=>{
        // 입력 값을 저장하고 있는 변수 this.inpuText의 값을 Text가 보여주고 있는 state변수 text에 대입
        this.setState( {text: this.inputText });
    }

    // 키보드의 완료버튼 클릭 시 반응
    submitEdit= function(){
        // 익명함수 안에서 bind()로 전달된 객체가 이 함수 안에서 this가 됨
        // 여기서 this는 class가 됨
        this.setState( {text: this.inputText});
    }

    //TextInput의 onChangeText 속성에 지정된 콜백함수
    changeText= (value)=>{
        // Alert.alert('changed text');
        // 파라미터 value: TextInput에 쓰여진 문자열 데이터
        // TextInput의 글씨가 변경될 때 마다마다 발동하면서 파라미터로 입력된 텍스트를 전달함
        this.setState( {text:value} );

    }

    changeText2= (value)=>{
        // 모든 입력을 받은 후의 텍스트를 한꺼번에 보여주기 위해서
        // 일반 멤버변수에 입력값 저장
        // 이 경우 state가 갱신되었다는 것을 인지하지 못해 화면이 자동갱신이 되지 않음
        this.inputText= value;

    }
}


// ** 주의 ********************************************
// onChangeText에 의해 실행될 멤버메소드를 만들때
// this 키워드로 state 변수를 사용하려면 화살표함수로
// 일반함수를 사용하려면 bind()를 사용해야 함
// *****************************************************

//스타일 객체
const style= StyleSheet.create( {
    root:{
        flex:1,
        padding:16,
    },
    textInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'green',
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight:16,
        height: 40,
    },
    plainText:{
        marginTop:16,
        fontWeight: 'bold',
        paddingLeft:10,
        paddingRight:10,
    },
    textInput2:{
        borderWidth:2,
        borderColor:'blue',
        backgroundColor:'white',
        borderRadius: 8,
        padding: 16,

        // TextInput이 일정 사이즈 이상 되지 않도록 내용이 더 길어지면 자동스크롤
        maxHeight: 150,
    }
} );


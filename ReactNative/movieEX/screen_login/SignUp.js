import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TabComponent from '../components/TabComponent';
import InputComponent from '../components/InputComponent';

export default class SignUp extends Component{


    // 탭 작업 시에 탭이 여러개 일수도 있고 탭에 따라 보여지는 내용이 다르므로 탭을 배열로 만들어 index번호로 어느 탭인지 인지하도록 코딩
    // 단, 탭선택에 따라 화면 갱신이 되어야 하므로 state 로
    constructor(){
        super();
        this.state={
            tabs: ["전화번호", "이메일"],  // 탭의 label을 배열로 저장
            tabIndex: 0,                  // 현재 선택된 탭번호 저장변수
        };
    }

    //현재 선택된 탭번호(tabIndex)를 변경하는 메소드
    setTabIndex= (index)=>{
        this.setState({tabIndex: index});
    }

    render(){
        return (
            <View style={style.root}>
                {/* 1. 콘텐츠 영역 */}
                <View style={style.content}>
                    {/* 1.1 탭 영역 */}
                    <View style={style.tabContainer}>
                        {/* Tab버튼은 다른 곳에서도 사용할 수 있도록 별도의 CustomComponent로 만들어서 재사용 */}
                        {/* 선택된 탭이 어느 것인지 제어할 수 있도록 탭들을 배열로 관리하고자 함 */}
                        {/* <TabComponent label={this.state.tabs[0]} selected={this.state.tabIndex==0} onPress={ ()=>this.setTabIndex(0) }></TabComponent>
                        <TabComponent label={this.state.tabs[1]} selected={this.state.tabIndex==1} onPress={ ()=>this.setTabIndex(1) }></TabComponent> */}

                        {/* 위 작업을 반복문으로 */}
                        {
                            this.state.tabs.map( (item, index)=>{
                                // tabs 배열의 항목값을 Label로 전달하고 현재 선택된 탭번호(state.tabIndex)가 현재 탭번호과 같은지 비교연산 결과전달(전달값 : boolean결과) 및 선택된 index 번호의 탭을 현재 선택한 탭값으로 변경하는 메소드 전달
                                return <TabComponent label={item} selected={this.state.tabIndex==index} onPress={ ()=>this.setTabIndex(index) } key={"Tab"+index}></TabComponent>
                            } )
                        }
                    </View>

                    {/* 1.2 정보입력 - 미리 만들어놓았던 InputComponent 이용 : 현재 탭의 라벨값으로 힌트제공*/}
                    <InputComponent placeholder={this.state.tabs[this.state.tabIndex]}></InputComponent>

                    {/* 1.3 이메일 입력일 때(tabIndex==1)는 비밀번호 입력 칸도 존재하도록 */}
                    {
                        //if( this.state.tabIndex==1) //if 문법 사용불가

                        // && 연산자를 통해 앞의 조건이 true일때 && 다음 코드가 실행되도록
                        this.state.tabIndex===1 && <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>
                    }

                    {/* 1.4 전화번호 탭일때 다음 버튼 */}
                    {
                        this.state.tabIndex===0 && <View style={{width:'100%', margin:16}}><Button title="다음" onPress={ ()=>this.setTabIndex(1) }></Button></View> 
                    }

                    {/* 1.5 이메일 탭일때 다음 버튼 */}
                    {
                        this.state.tabIndex===1 && <View style={{width:'100%', margin:16}}><Button title="완료" onPress={ ()=>this.props.navigation.goBack() }></Button></View> 
                    }

                    {/* 1.6 전화번호 탭일때 안내메세지 */}
                    {
                        this.state.tabIndex===0 && <Text style={style.telMessage}>Movie App의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든지 수신을 취소할 수 있습니다.</Text>
                    }

                </View>

                {/* 2. footer영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                        이미 계정이 있으신가요? <Text style={style.goBack} onPress={ ()=>this.props.navigation.goBack() }>로그인</Text>
                    </Text>
                </View>
                
            </View>
        );
    }

    //네비게이터 옵션 [static은 새로고침으로 반영되지 않음. 반드시 re-run해야함]
    static navigationOptions={
        headerShown: false,  //헤더영역 없애기
    };

}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    content:{
        flex: 1,
        width:'100%',
        alignItems:'center', //가로축 가운데 정렬
        padding:32,
    },
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding:8,
    },
    footerMsg:{
        color:"#929292",
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF',
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom: 16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginLeft:8,
        marginRight:8,
    },
});
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MainComponent extends Component{

    render(){
        
        // 지역변수: 태그문 문자열을 저장한 것이 아니라 Text컴포넌트를 저장한 것
        // 즉, 변수에 컴포넌트 객체 자체를 저장
        const aaa= <Text>Nice</Text>;

        // 여러 뷰를 가진 뷰도 저장 가능
        const bbb= <View style={ {marginTop:16}}>
                        <Text>Hello React Native</Text>
                        <Button title="button"></Button>
                   </View>;

        // 배열변수
        const array=[ aaa, bbb, bbb];

        // 원래 배열을 출력하면 각 요소를 구별하는 key속성이 없으면 경고
        // 그래서 key값을 부여했어야 했음 - 이제는 경고창 안뜨는걸 보니 괜찮나봉가
        // 속성명 'key'는 고정
        const array2=[
            <View key="k1">{aaa}</View>,
            <View key="k2">{bbb}</View>,
            <View key="k3">{bbb}</View>
        ];

        // 실제 앱에서는 배열에 저장된 대량의 데이터가 컴포넌트가 아니라 데이터 자체일 것
        // ex) 공공API parsing/ 서버데이터 fetch
        let data= ["Changmo", "Leella", "Hash"];

        return(

            // 1. 변수에 컴포넌트를 저장한 후 사용하기 (여러 뷰를 가진 뷰를 저장한 변수도 물론 가능)
            // <View style={style.root}>
            //     <Text style={style.title}>List Layout Test</Text>
            //     {/* JSX에서 JS 변수를 사용하려면 {} 안에 작성 */}
            //     { aaa }
            //     { bbb }
            // </View>


            // 2. 메소드를 호출하여 컴포넌트를 리턴하여 사용하기
            // <View style={style.root}>
            //     <Text style={style.title}>List Layout Test</Text>

            //     {/* 멤버메소드 호출 */}
            //     { this.showItemView() }

            //     {/* 메소드 호출 시 파라미터 전달도 가능 */}
            //     { this.showItemView2("Genie", "press me", "indigo") }
            // </View>

            // 3. 배열변수에 컴포넌트를 요소로 넣어 사용하기 
            <View style={style.root}>
                <Text style={style.title}>List Layout Test</Text>
                {/* 배열에 저장된 컴포넌트들 출력 */}
                {/* { array } */}
                {/* 배열변숨여을 작성하기만 하면 자동으로 안에 있는 요소들의 값들이 출력됨 */}
                {/* 원래는 배열의 요소들을 구분하는 식별자 key 속성이 없다고 경고창이 뜸 */}

                { array2 }

                {/* 데이터 자체만으로는 컴포넌트가 아니므로 직접 출력이 불가 */}
                {/* 데이터(string)의 개수만큼 <Text>를 만들고 그 안에 데이터를 출력 */}
                {/* 배열객체의 map(): 배열의 요소 개수만큼 반복하면서 그 값을 새로운 배열로 리턴 */}
                {/* 즉, 배열 개수만큼 리턴하여 새로운 배열이 만들어짐 */}
                {
                    data.map( function(value, index, array){
                        return (
                            // 배열요소들의 값을 구별하는 정해진 식별자 key props 적용
                            <View key={index} style={{margin:16}}>
                                <Text>{ value }</Text>
                            </View>
                        );
                    } )
                }

                
            </View>

            // 단순 문자열뿐만 아닌 객체들로서 item의 내용을 꾸밀 수 있음
            // RN08 예제로..
        );
    }

    // 메소드
    showItemView(){
        return(
            <View style={{marginTop:16}}>
                <Text>Come On Your Spurs</Text>
                <Button title="click me" color="hotpink"></Button>
            </View>
        );
    
    }

    // 파라미터를 전달받는 메소드
    showItemView2(name, title, color){
        return(
            <View style={{marginTop:16}}>
                <Text>Come On Your {name}</Text>
                <Button title={title} color={color}></Button>
            </View>
        );
    }
}

const style=StyleSheet.create({
    root:{
        flex:1, padding:16
    },
    title:{
        fontSize:24, fontWeight:'bold'
    }

});
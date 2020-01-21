import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class MainComponent extends Component{

    render(){
        
        // 지역변수: 태그문 문자열을 저장한 것이 아니라 Text컴포넌트를 저장한 것
        const aaa= <Text>Nice</Text>;
        const bbb= <View style={ {marginTop:16}}>
                        <Text>Hello React Native</Text>
                        <Button title="button"></Button>
                   </View>;

        // 배열변수
        const array=[ aaa, bbb, bbb];

        // 원래 배열을 출력하면 각 요소를 구별하는 key속성이 없으면 경고
        // 그래서 key값을 부여했어야 했음 - 이제는 경고창 안뜨는걸 보니 괜찮나봉가
        const array2=[
            <View key="k1">{aaa}</View>,
            <View key="k2">{bbb}</View>,
            <View key="k3">{bbb}</View>
        ];

        // 실제 앱에서는 배열에 저장된 대량의 데이터가 컴포넌트가 아니라 데이터 자체일 것
        // ex) 공공API parsing/ 서버데이터 fetch
        let data= ["Changmo", "Leella", "Hash"];

        return(
            <View style={style.root}>
                <Text style={style.title}>List Layout Test</Text>
                { aaa }
                { bbb }

                {/* 메소드 호출 */}
                { this.showItemView() }
                { this.showItemView2("Genie", "press me", "indigo") }

                {/* 배열에 저장된 컴포넌트들 출력 */}
                {/* { array } */}
                {/* 원래는 배열의 요소들을 구분하는 식별자 key 속성이 없다고 경고창이 뜸 */}

                { array2 }

                {/* 데이터 자체만으로는 컴포넌트가 아니므로 직접 출력이 불가 */}
                {/* 데이터(string)의 개수만큼 <Text>를 만들고 그 안에 데이터를 출력 */}
                {/* 배열객체의 map(): 배열의 요소개수만큼 반복하면서 그 값을 새로운 배열로 리턴 */}
                {
                    data.map( function(value, index, array){
                        return (
                            <View key={index} style={{margin:16}}>
                                <Text>{ value }</Text>
                            </View>
                        );
                    } )
                }

                
            </View>
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
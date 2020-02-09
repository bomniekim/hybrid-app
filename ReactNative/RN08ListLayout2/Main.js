import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        // 대량의 데이터를 멤버변수로 만들기
        // name, message, img를 property로 가진 객체들 배열
        this.state={
            data: [
                {name:"Changmo", message:"METEOR", img: require('./images/ben1.jpg')},
                {name:"Leellamarz", message:"Ambition", img: require('./images/ben2.jpg')},
                {name:"HashSwan", message:"Alexandar Wang", img: require('./images/ben3.jpg')},
                {name:"Ash Island", message:"Empty Head", img: require('./images/pengsoo.jpg')},
                {name:"HyoEun", message:"geoyeo", img: require('./images/pengsoo2.jpg')},
                {name:"Beenzino", message:"If I die tomorrow", img: require('./images/pengsoo3.jpg')},
            ],
        };
    }
    render(){
        return (

            <ScrollView style={ style.container }>
                {this.state.data.map((element, index)=>{
                    return(
                        
                        // 1. 우선 대량의 데이터 '객체'를 리스트뷰 스타일로 보여주기 
                        // <View key={index} style={style.item}>
                        //     <Image source={element.img} style={style.itemImg}></Image>
                        //     <View style={ {flexDirection:'column'}} >
                        //         <Text style={style.itemName}>{ element.name }</Text>
                        //         <Text style={style.itemMsg}>{ element.message }</Text>
                        //     </View>
                        // </View>

                        // 2. 아이템뷰를 클릭했을 때 반응하기 : 해당 아이템의 이름 출력
                        // * onPress에 메소드만 넣으면 아이템 번호를 구별할 수 없음
                        // <TouchableOpacity key={index} style={style.item} onPress={this.clickItem}>
                        //     <Image source={ element.img } style={style.itemImg}></Image>
                        //     <View style={ {flexDirection:'column'}} >
                        //         <Text style={style.itemName}>{ element.name }</Text>
                        //         <Text style={style.itemMsg}>{ element.message }</Text>
                        //     </View>
                        // </TouchableOpacity>
                        
                        
                        // 2. 아이템뷰를 클릭했을 때 반응하기 : 해당 아이템의 이름 출력
                        // onPress에 익명콜백함수를 넣고 거기에 멤버메소드의 index 전달

                        <TouchableOpacity key={index} style={style.item} onPress={ ()=> {this.clickItem(index)} }>
                            {/* 익명함수를 지정해서 대리호출하도록 만드는 방식..wow.. */}
                            <Image source={ element.img } style={style.itemImg}></Image>
                            <View style={ {flexDirection:'column'}} >
                                <Text style={style.itemName}>{ element.name }</Text>
                                <Text style={style.itemMsg}>{ element.message }</Text>
                            </View>
                        </TouchableOpacity>
                    )
            })}
            </ScrollView>
        );
    }

    clickItem = ()=>{
        alert("index: "+ index); // error: index 식별 불가
    }

    // 클릭한 아이템의 name값 보여주기
    clickItem2 = (index) => {
        // 메소드를 호출하면서 파라미터로 클릭된 아이템의 index를 받아야 함
        alert(this.state.data[index].name);
    }
}

// ListView 컴포넌트 없이 리스트뷰의 형태를 잘 만든 것 같지만 데이터가 많을 때는 문제가 있음
// 데이터(배열)의 개수가 매우 많을 때에 화면에 보이지도 않는 컴포넌트들이 무조건 만들어져 있음
// 예를 들어 배열 데이터 안에 데이터의 수가 100개라면 보여지는 컴포넌트의 개수와 상관없이
// 앱 실행 시 100개의 아이템 컴포넌트를 모두 만들어 놓기에 메모리 문제도 있고 뷰의 재활용이 이루어지지 못함
// 안드로이드 native app의 ListView처럼 뷰의 재활용 기능을 가진 React Natvie의 컴포넌트 사용 해보기 (RN09 예제로..)

const style= StyleSheet.create( {
    container: {flex:1, padding:16},
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120, height:100, resizeMode:'cover',
        marginRight:8, 
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    },
} );
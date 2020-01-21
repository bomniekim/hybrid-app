import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        // 대량의 데이터
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
                {/* 대량의 데이터 배열의 요소 개수만큼 Component를 리턴하는 map() 이용 */}
                {this.state.data.map(( element, index )=>{
                    return(
                        <TouchableOpacity key={index} style={style.item} onPress={ ()=> {this.clickItem(index)} }>
                            {/* 익명함수를 지정해서 대리호출하도록 만드는 방식..wow.. */}
                            <Image source={ element.img } style={style.itemImg}></Image>
                            <View style={ {flexDirection:'column'}} >
                                <Text style={style.itemName}>{ element.name }</Text>
                                <Text style={style.itemMsg}>{ element.message }</Text>
                            </View>
                        </TouchableOpacity>
                    );

                })}
            </ScrollView>
        );
    }

    clickItem = (index) => {
        // 클릭한 아이템의 name값 보여주기
        // 메소드를 호출하면서 파라미터로 클릭된 아이템의 index를 받아야 함
        alert(this.state.data[index].name);
    }
}


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
import React,{Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Image} from 'react-native';

export default class Main extends Component{

    // RN에서의 ListView용 컴포넌트
    // 1. FlatList
    // 2. SectionList

    constructor(){
        super();

        this.state={
            // 리스트에 보여줄 대량의 데이터
            data: ['a','b','c','d'],

            // key 속성을 가진 대량의 데이터
            data2: [
                {key:"0", data:"aa"},
                {key:"1", data:"bb"},
                {key:"2", data:"cc"},
                {key:"3", data:"dd"},
                {key:"4", data:"ee"},
                {key:"5", data:"ff"},
                {key:"6", data:"gg"},
                {key:"7", data:"hh"},
            ],

            // 08ListLayout2 예제 FlatList로 만들어보기
            listData: [
                {name:"Susie", message:"뚜띠뽀뽀", img: require('./images/img02.jpg')},
                {name:"MingMing", message:"강밍", img: require('./images/img01.jpg')},
                {name:"Gyun", message:"균", img: require('./images/omori.jpg')},
                {name:"YujinChoi", message:"애미새(애플에 미친 새ㄲ)", img: require('./images/img04.jpg')},
            ],
        }
    }

    render(){

        // 대량의 데이터의 각 아이템에 [key]라는 이름의 프로퍼티가 존재해야만 함
        // 기존의 배열요소객체들의 key라는 이름의 멤버변수 추가하기
        // 배열의 요소 개수만큼 요소들을 순회하면서 파라미터로 전달된 콜백함수를 호출하는 forEach()
        // this.state.listData.forEach( (element, index)=>{
        //     element.key= index; // 배열 요소에 새로운 멤버변수 key 추가
        // });

        return(
            // <View style={ style.root }>
            //     <Text style={ style.titleText }>FlatList Test</Text>

            //     {/* 1. FlatList */}
            //     {/* 2가지 필수 속성 */}
            //     {/* ⑴ data: FlatList가 보여줄 대량의 데이터 */}
            //     {/* ⑵ renderItem: 아이템 하나의 모양(Component)를 만들어서 리턴하는 콜백함수 */}
            //     {/* <FlatList 
            //         data={ this.state.data }

            //         // renderItem의 함수 파라미터에 전달된 객체는
            //         // this.stae.data 배열의 하나하나 요소의 값과 인덱스번호를 멤버로 가지고 있는 객체(obj)가 전달됨
            //         // renderItem={ ( obj )=>{ return <Text>{ obj.item }</Text>} }>
                    
            //         // 그 객체의 멤버인 item, index를 구조분해할당으로 파라미터로 전달받기 
            //         renderItem={ ( {item, index} )=>{ return <Text>{item}, {index}</Text>} }>
            //     </FlatList> */}


            //     <FlatList
            //         data={this.state.data2}
            //         renderItem={ ( {item} )=>{ return <Text>{item.data},{item.key}</Text>} }>
            //     </FlatList>
            // </View>


            // 클릭 시 반응하기
            // <View style={ style.root }>
            //     <Text style={ style.titleText }>FlatList Test</Text>
            //     <FlatList
            //         data={this.state.data2}
            //         renderItem={ ({item}) =>{ // 전달하는 파라미터는 하나지만 구조분해할당도 하나의 명령이므로 () 생략 불가
            //             return(
            //                 <TouchableOpacity onPress={ ()=>{ Alert.alert(item.data);} }>
            //                     <View style={ {borderWidth:1, borderRadius:8, padding:8, margin:8} }>
            //                         <Text>{item.key}</Text>
            //                         <Text>{item.data}</Text>
            //                     </View>
            //                 </TouchableOpacity>
            //             );
            //         }}>

            //         {/* return이 한 줄의 코드이므로 return 키워드와 return을 감싸는 {}, ; 생략가능  */}
            //         {/* return 뒤의 ()도 버전업이 되어 이제는 생략 가능 */}
            //     </FlatList>
            // </View>

            // map()으로도 만들 수 있음
            // 단, 자동스크롤링이 안되므로 ScrollView로 감싸야 함
            // 하지만 위의 방법은 화면을 벗어나면 자동스크롤링 


            // 08ListLayout2 예제 FlatList로 만들어보기
            <View style={ style.root }>
                <Text style={ style.titleText }>FlatList Test</Text>
                <FlatList
                    data={this.state.listData}
                    renderItem={this.renderItem}
                    // FlatList의 각 요소에 key를 추출해주는 콜백함수: keyExtractor
                    // 보통 유일한 식별자를 가진 변수가 key가 됨
                    keyExtractor={(item)=>{return item.name;}}
                    // keyExtractor={item=>item.name}
                    >
                </FlatList>
            </View>

        );
    }

    // 멤버메소드: FlatList의 renderItem용
    renderItem=({item})=>{
        return <TouchableOpacity style={style.itemView} onPress={()=>{Alert.alert(item.name);}}>
                    <Image source={item.img} style={style.itemImg}></Image>
                    <View style={{flexDirection:'column'}}>
                        <Text style={style.itemName}>{item.name}</Text>
                        <Text style={style.itemMsg}>{item.message}</Text>
                    </View>
                </TouchableOpacity>
    }
}

const style= StyleSheet.create({
    root:{flex:1, padding:16, },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic',
    }
});
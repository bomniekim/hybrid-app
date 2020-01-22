import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();

        // 대량의 데이터
        this.state={
            sectionData: [
                // SectionList의 섹션 하나 객체에는 title, data 2개의 property 필요
                {title: '한식', data: ["김치찌개","비빔밥","고기산적"] },
                {title: '중식', data: ["짜장면", "짬뽕", "탕수육"] },
                {title: '일식', data: ["초밥", "나베", "라멘"]},
            ],
        };
    }

    render(){
        return (
            <View style={ style.root }>
                {/* SectionList: 리스트에 grouping이 가능한 리스트 뷰 */}
                {/* 3가지 필수 속성 */}
                {/* ⑴ sections: 섹션 title과 섹션별 data들을 가진 대량의 데이터 */}
                {/* ⑵ renderSectionHeader: 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정*/}
                {/* ⑶ renderItem: 섹션별 item 영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정*/}
                <SectionList
                    sections={this.state.sectionData}
                    renderSectionHeader={( {section} )=>{
                        return (
                            <View style={ style.sectionHeader }>
                                <Text style={style.sectionTitle}>{obj.section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={( {item, index, section} )=>{
                        return(
                            <TouchableOpacity style={style.itemView} onPress={()=>{ this.clickItem(item); }}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={ (item, index)=>{return index}}>
                </SectionList>

            </View>
        );
    }

    clickItem=(item)=>{
        Alert.alert(item);
    }
    // clickItem=item=>Alert.alert(item) // 위와 같은 코드


}

const style= StyleSheet.create({
    root:{flex:1, padding:16},
    sectionHeader:{
        padding:4,
        backgroundColor:'#cccccc'
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:'bold'
    },
    itemView:{
        padding:8
    }
});
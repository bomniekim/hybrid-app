import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';
import BigCatalog from '../components_movie/BigCatalog';

export default class MovieDetail extends Component{

    constructor(){
        super();
        this.state={
            data: null,  // 영화 상세정보
        }
    }

    render(){        
        return this.state.data? // 삼항연산자로 처리
        (
            <ScrollView style={style.root}>
                {/* 큰 이미지 보여주기 - 이미 만들어놓은 BigCatalog 컴포넌트 재사용 가능 */}
                <BigCatalog movie={this.state.data}></BigCatalog>

                {/* 영화정보 영역 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{this.state.data.runtime}분</Text>
                        <Text>평점: {this.state.data.rating}</Text>
                        <Text>좋아요: {this.state.data.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 영역 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.description}>{this.state.data.description_full}</Text>
                </View>
            </ScrollView>
        )
        :
        (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" color="#E70915"></ActivityIndicator> 
                {/* 효과적으로 사용자에게 로딩중임을 표시 가능 */}
            </View>
        );
    }

    loadData=()=>{
        const id= this.props.navigation.getParam('id');
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movie}) );
    }

    componentDidMount(){
        this.loadData();
    }
}

const style= StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF'},
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16,
        paddingBottom:8,
        paddingLeft:16,
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:16,
        paddingRight:16,
    },
    description:{
        paddingLeft:16,
        paddingRight:16,
    }
});
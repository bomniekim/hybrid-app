import React, {Component} from 'react';
import {View} from 'react-native';

export default class MainComponent extends Component{
    render(){
        return (
            // return은 1개만 가능하기 때문에
            //여러 개의 뷰를 배치하려면 가장 큰 뷰가 필요함
            
            // 별도로 부모 뷰에 스타일을 주지 않으면 기본적인 자식 뷰들의 position은 relative
            // 기본 flex스타일이며 기본적으로 flex-direction은 column(vertical) 방향
            // 크기값 숫자의 기본단위는 dp (px를 명시적으로 쓰지 못함)
            // 뷰의 사이즈는 숫자, %(문자열로 지정) 또는 flex를 통해서 지정가능

            // 1) 뷰에 3개의 자식 뷰 배치하기
            // <View>
            //     <View style={ {width:50, height:50, backgroundColor:'red'} }></View>
            //     <View style={ {width:100, height:100, backgroundColor:'blue'} }></View>
            //     <View style={ {width:'70%', height:150, backgroundColor:'green'} }></View>
            // </View>

           
            // 부모 뷰의 높이가 지정되어 있지 않으면 자식뷰의 flex는 높이를 계산하지 못하여 출력되지 못함
            // 즉, 자식 뷰의 너비나 높이를 flex를 통해 지정하려면 부모 뷰의 너비나 높이가 반드시 있어야 함

            // 2) 전체 사이즈 높이 350, 그 안에 뷰 3개를 놓고 크기배분을 1:2:4로 배치하기
            // <View style={ {height:350} }>
            //     <View style={ {flex:1, backgroundColor:'navy'} }></View>
            //     <View style={ {flex:2, backgroundColor:'gold'} }></View>
            //     <View style={ {flex:4, backgroundColor:'tomato'} }></View>
            // </View>
            
            // device 마다 높이 값이 다르므로 화면 높이의 전체를 사용하려면 flex 사용 권장

            // 3) 부모 뷰에 flex를 이용하여 전체화면 높이 설정하기
            // android의 weight="1"과 같음
            // <View style={ {flex:1} }>
            //     <View style={ {flex:1, backgroundColor:'navy'} }></View>
            //     <View style={ {flex:2, backgroundColor:'gold'} }></View>
            //     <View style={ {flex:4, backgroundColor:'tomato'} }></View>
            // </View>

            // 4) 자식 뷰들의 방향을 수평(row)으로 배치해보기\
            // 이 경우 flex는 높이가 아닌 너비 설정이 됨
            // <View style={ {flex:1, flexDirection:'row'} }>
            //     <View style={ {flex:1, backgroundColor:'navy'} }></View>
            //     <View style={ {flex:2, backgroundColor:'gold'} }></View>
            //     <View style={ {flex:4, backgroundColor:'tomato'} }></View>
            // </View>
            
            
            // css의 flex와 같음
            // justifyContent: 배치 방향과 같은 축의 정렬
            // alignItems: 배치방향과 교차되는 축의 정렬

            // space-evenly: 모든 여백이 같은 크기
            // space-around: 각 요소를 둘러싼 여백의 크기기 같게
            // space-between: 각 요소들 사이의 여백이 같게

            // 5) 자식 뷰들의 높이와 너비를 개별 지정하여 배치 정렬
            // <View style={ {flex:1, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'} }>
            //     {/* 자식 뷰들의 너비와 높이 지정 */}
            //     <View style={ {width:50, height:50, backgroundColor:'navy'} }></View>
            //     <View style={ {width:100, height:100, backgroundColor:'gold'} }></View>
            //     <View style={ {width:150, height:150, backgroundColor:'tomato'} }></View>
            // </View>


            // 6) 자식 뷰들의 너비나 높이를 하나의 뷰에만 주고 나머지 뷰들에는 flex를 통해 비율로 크기 지정
            // <View style={ {flex:1, flexDirection:'column'} }>
            //     <View style={ {height:50, backgroundColor:'indigo'}}></View>
            //     {/* 남은 공간을 1:2로 배치 */}
            //     <View style={ {flex:1, backgroundColor:'gold'}}></View>
            //     <View style={ {flex:1, backgroundColor:'tomato'}}></View>
            // </View>


            // 7) 중첩구조
            <View style={ {flex:1, flexDirection:'column'} }>
                {/* 크게 세로방향으로 1:2 분할 */}
                <View style={ {flex:1, flexDirection:'row'}}>
                    {/*가로방향 1:2 분할  */}
                    <View style={ {flex:1, backgroundColor:"tomato"}}></View>
                    <View style={ {flex:2, flexDirection:'column'} }>
                        <View style={ {flex:1, backgroundColor:"navy"}}>
                            {/* 8) 절대 위치 지정으로 뷰 겹치기 */}
                            <View style={ {width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'} }></View>
                            <View style={ {width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'} }></View>
                        </View>
                        <View style={ {flex:1, backgroundColor:"darkgreen"}}></View>
                    </View>
                </View>
                <View style={ {flex:2, flexDirection:'row'}}>
                    <View style={ {flex:2, backgroundColor:"gold"}}>
                        <View style={ {flex:1, backgroundColor:"gold"}}></View>
                        <View style={ {flex:1, backgroundColor:"indigo"}}>
                            {/* 절대 위치 지정으로 뷰 겹치기 */}
                            <View style={ {width:50, height:50, backgroundColor:'white', left:10, top:10, position:'absolute'} }></View>
                            <View style={ {width:50, height:50, backgroundColor:'gray', left:20, top:20, position:'absolute'} }></View>
                        </View>
                    </View>
                    <View style={ {flex:1, backgroundColor:"hotpink"}}></View>
                </View>

                {/* 절대 위치 지정으로 원모양의 뷰 겹치기 */}
                <View style={{width:100, height:100, backgroundColor:'white', borderRadius:50, bottom:100, right:90, position:'absolute'}}></View>

            </View>
        );
    }
}
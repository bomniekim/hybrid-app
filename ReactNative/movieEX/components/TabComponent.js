import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 단순 스타일링된 Tab버튼 만들면 되기에 별도의 state는 필요 없어 stateless 컴포넌트로 제작

const TabComponent= (props)=>{ // 파라미터로 속성을 전달받음

    //선택된 탭에 따라 색상이 변경되므로
    let color= props.selected ? '#292929' : '#929292'; // 삼항연산자를 사용해 색 변경

    //선택된 탭에 따라 아래경계선(Indicator역할)의 색상도 변경
    containerSytle.borderColor= color;

    return (
        <TouchableOpacity style={containerSytle} onPress={props.onPress}>
            {/* 전달받은 label값을 탭 버튼의 텍스트로 표시 */}
            <Text style={{color: color}}>{props.label}</Text>
        </TouchableOpacity>
        
    );
}

let containerSytle={
    flex:1,  //탭이 놓여질 때 다른 탭과 flex값을 같게하여 가로 사이즈를 균등하게 하기 위해
    borderBottomWidth: 1,
    borderColor:'#929292',
    paddingBottom: 8,
    alignItems:'center',
    justifyContent:'center',
};


export default TabComponent;
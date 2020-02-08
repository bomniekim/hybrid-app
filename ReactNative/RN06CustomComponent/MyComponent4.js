import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent4 extends Component{
    render(){
        return(
            <View style={{margin:16}}>
                {/* 전달받을 속성을 한번에 적용하기 */}
                {/* 스프레드 연산자: ... / 구조분해할당 */}
                {/* 매개변수로 다중 argument를 전달받을 때 사용 */}
                {/* 파라미터로 배열을 받을 때와 다르게 0개짜리 배열도 전달받을 수 있음 */}
                <Button {...this.props}></Button>
            </View>
        );
    }
}

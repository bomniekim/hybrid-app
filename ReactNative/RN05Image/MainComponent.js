import React, {Component} from 'react';
import {Text, View, Button, Image, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, ImageBackground} from 'react-native';

export default class MainComponent extends Component{

    // constructor(){
    //     super();

    //     // 컴포넌트의 특별한 멤버변수 state
    //     this.state={
    //         img: require('./images/ben1.jpg'),

    //         // 이미지를 순차적으로 변경하기 위해
    //         imgNum: 0, // 배열의 index 번호
    //         imgArray: [ // 함수도 객체이므로 JS의 배열 안에 넣을 수 있음
    //             require('./images/ben1.jpg'),  
    //             require('./images/ben2.jpg'),  
    //             require('./images/ben3.jpg'),
    //             //네트워크 이미지도 당연히 사용가능
    //             { uri: 'https://pbs.twimg.com/media/EJlJ_DNU8AA37Bw.jpg'}  
    //         ]  

    //     };
    // }

    render(){
        return(

            // 1) Image Component
            // <View style={{flex:1}}>
            //     <Image source={require("./images/ben1.jpg")}></Image>
            // </View>

            // 2) 스타일 적용하기
            // <View style={{ flex: 1, padding: 16 }}>
            //     <Image
            //         style={{ width: 150, height: 150, resizeMode: 'cover' }}
            //         source={require("./images/pengsoo.jpg")}>
            //     </Image>

            //     {/* 3) 네트워크 상의 이미지 보여주기*/}
            //     {/* 네트워크 이미지는 사이즈 지정이 없으면 화면에 보이지 않음 */}
            //     <Image
            //          style={{ width: 150, height: 150 }}
            //          source={{ uri: 'https://pbs.twimg.com/media/EJlJ_DNU8AA37Bw.jpg' }}>
            //     </Image>
            // </View>

            // 4) 이미지 클릭 반응하기: Button이 아니면 onPress 속성은 사용할 수 없음
            // 터치를 인지하도록 만들어진 컴포넌트들 (TouchableXXX)을 사용
            //         <TouchableHighlight onPress={this.clickImage}>
            //             <Image
            //                 style={{ width: 150, height: 150, resizeMode: 'cover' }}
            //                 source={require("./images/pengsoo2.jpg")}>
            //             </Image>
            //         </TouchableHighlight>
            //         {/* Button이 아닌 컴포넌트들을 클릭하고 싶을 때 이 방법으로 모두 사용 가능 */}

            //         {/* <TouchableOpacity>
            //         <Image
            //             style={{ width: 150, height: 150, resizeMode: 'cover' }}
            //             source={require("./images/pengsoo3.jpg")}>
            //         </Image>
            //     </TouchableOpacity> */}

            //         {/* 이미지 바꾸기 */}
            //         {/* RN에서는 이미지를 보여주는 객체를 변수로 만들고 변수값을 변경해서 보여주는 방법을 사용 */}
            //         <TouchableOpacity onPress={ this.changeImage }>
            //         <Image
            //             style={{ width: 150, height: 150, resizeMode: 'cover' }}
            //             source={ this.state.imgArray[this.state.imgNum] }>
            //         </Image>
            //     </TouchableOpacity>

            //         {/* 클릭 시 아무런 효과가 발생하지 않도록 */}
            //         <TouchableWithoutFeedback onPress={ this.changeImage }>
            //         <Image
            //             style={{ width: 150, height: 150, resizeMode: 'cover' }}
            //             source={ this.state.imgArray[this.state.imgNum] }>
            //         </Image>
            //     </TouchableWithoutFeedback>

            //         {/* <TouchableNativeFeedback onPress={this.changeImage}
            //         background={TouchableNativeFeedback.SelectableBackground()}>
            //         <Image
            //             style={{ width: 150, height: 150, resizeMode: 'contain' }}
            //             source={this.state.imgArr[this.state.imgNum]}>
            //         </Image>
            //     </TouchableNativeFeedback> */}

            //     </ScrollView>

           // </View>
            <View>
                <ImageBackground source={ require('./images/pengsoo.jpg')} style={ {width:'100%', height:'100%'} }>
                    <Text style={ {color:'white', fontSize:23, fontWeight:'bold', margin:16}}>Image</Text>
                    <Text style={ {color:'navy', fontSize:24, margin:8}}>Pengsoo</Text>

                </ImageBackground>
            </View>
        );
    }

    clickImage= ()=>{
        alert('clicked');
    }

    changeImage= ()=>{
        // 이미지의 경로만 변경하는 것이 아니라 require()를 전체 변경
        let num= this.state.imgNum;
        num++;

        if(num>4) num=0;
        this.setState({imgNum: num});

    }
}
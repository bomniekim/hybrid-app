import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class Main extends Component{
    constructor(){
        super();
        this.state={
            currPos:{latitude:0.0, longitude:0.0}, // 최초 좌표객체(위도, 경도)

        }
    }
    render(){
        return(
            <View style={{flex:1, padding:16}}>
                {/* 1. 현재 내 위치 한번 얻어오기 */}
                <Button title="get my location" onPress={this.getloca}></Button>

                {/* 2. 내 위치 실시간 업데이트 */}
                <View style={style.buttonView}>
                    <Button title="watch my location" onPress={this.watch} color="green"></Button>
                    <Button title="stop my location" color="tomato" onPress={this.stop}></Button>
                </View>

                <View style={style.textroot}>
                    <Text style={style.text}>Latitude: {this.state.currPos.latitude} </Text>
                    <Text style={style.text}>Longitude: {this.state.currPos.longitude}</Text>
                </View>
            </View>
        );
    }

    getloca =()=>{
        //Geolocation객체에게 현재 위치 얻어오기(web의 코드와 거의 비슷)
        Geolocation.getCurrentPosition( (position)=>{
            // 성공했을 때 실행되는 영역
            // 파라미터로 받은 info 객체 안에 좌표가 정보 있음
            this.setState({currPos: position.coords})
        },
        (error)=>{
            // 퍼미션이 없으면 에러 (AndroidManifest.xml에서 추가)
            // API26버전부터 동적퍼미션이 추가됨
            // Geolocation은 동적퍼미션을 자동으로 해주지 않음

           alert('error: '+ error.message);

        });

    }

    watch= ()=>{

        // 기존에 watch하던 값이 있다면 지우도록
        Geolocation.clearWatch(this.state.id); // 만약 id가 없다면 무시됨

        const id=Geolocation.watchPosition((position)=>{
            this.setState({currPos: position.coords});
        },(error)=>{
            alert('error: '+error.message);
    
        });

        //watchID를 state에 저장
        // this.setState({id: id}); // 새로이 id프로퍼티 동적추가 가능
        // 변수명과 키값이 같다면 변수명만 기입하면 키값은 자동 변수명으로 적용
        this.setState({id}); 
    }

    stop=()=>{
        Geolocation.clearWatch(this.state.id);
        this.setState({currPos:{latitude:0.0, longitude:0.0}});

    }

    ////// 동적퍼미션 ///////////////////////////////////////
    async requestLocationPermission(){
        try{
            // 퍼미션 요청 dialog 보이기
            const granted= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

            if(granted == PermissionsAndroid.RESULTS.GRANTED){
                alert('위치 정보 사용을 허가합니다.')
            }else{
                alert('위치 정보 사용을 거부합니다.\n 앱의 기능 사용이 제한됩니다.')
            }
            
        }catch(err){
            alert('퍼미션 작업 에러');
        }

    }

    // 화면이 시작될 때 퍼미션 받도록 라이프사이클 메소드 이용
    async componentDidMount(){
        await this.requestLocationPermission();
    }

}

const style=StyleSheet.create({
    buttonView:{flexDirection:'row', marginTop:16, justifyContent:'space-evenly'},
    textroot:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{fontWeight:'bold', fontSize:20, padding:4}
});
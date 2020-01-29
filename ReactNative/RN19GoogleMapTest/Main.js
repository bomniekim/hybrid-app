import React, {Component} from 'react';
import {View, Text, Linking} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Main extends Component{
    constructor(){
        super();
        this.state={
            region: {
                latitude: 37.562087,
                longitude: 127.035192,
                latitudeDelta: 0.009,
                longitudeDelta: 0.004,
            },

            markers:[
                {
                    latlng:{latitude:37.562516, longitude:127.035679},
                    title:"희망약국",
                    description:"왕십리에 있는 약국"
                },
                {
                    latlng:{latitude:37.561155, longitude:127.034560},
                    title:"이수프라자약국",
                    description:"왕십리에 있는 약국"
                },
                {
                    latlng:{latitude:37.560710, longitude:127.035978},
                    title:"연세우리약국",
                    description:"왕십리에 있는 약국"
                },
                {
                    latlng:{latitude:37.562162, longitude:127.032171},
                    title:"왕십리약국",
                    description:"왕십리에 있는 약국"
                },
                
            ],
        }
    }
    
    render(){
        return (
            <View style={{flex:1, padding:16,}}>
                <Text style={{padding:8,}}>Map Test</Text>

                <MapView 
                    style={{flex:1}}
                    provider={PROVIDER_GOOGLE}
                    region={this.state.region}>
                    
                    {/* 마커 추가: 클릭 시 뜸 */}
                    <Marker
                        coordinate={this.state.region}
                        title="미래능력개발교육원"
                        description="http://www.mrhi.or.kr"
                        onCalloutPress={this.clickCallout}></Marker>
                    <Marker
                        coordinate={{latitude:37.561727, longitude:127.036370}}
                        title="성동경찰서"
                        description="http://www.smpa.go.kr"></Marker>

                    {/* 마커 여러개 동시에 찍기 */}

                    {
                        this.state.markers.map( (marker, index)=>{
                            return <Marker
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                                key={index}
                                image={ require('./icon.png')}></Marker>
                        })
                    }
                </MapView>
            </View>
        );
    }

    clickCallout= ()=>{
        // 특정 URL의 웹문서를 디바이스의 웹브라우저를 통해 열기
        // Linking.canOpenURL //브라우저가 있느냐?
        Linking.openURL('http://www.mrhi.or.kr');
    }
}
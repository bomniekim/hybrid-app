import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// Main.js의 MyContext 객체 import
import {MyContext} from './Main';

export default class Third extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {
                    (value)=>(
                        <View style={{marginTop:16, padding:16, backgroundColor:'gold'}}>
                            <Text style={{fontWeight:'bold'}}>Third : </Text>
                            <Text>Main의 전역 data: {value.data}</Text>
                            <Button title="button" onPress={()=>{value.changeData('Apple')}}></Button>
                        </View>
                    )
                    
                }
            </MyContext.Consumer>
        );
    }
}
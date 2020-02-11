import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

// export default class Weather extends Component{
//     render(){
//         return(
//         <LinearGradient colors={['#00c6fb', '#005bea']} style={style.container}>
//             <View style={style.upper}>
//                 <Icon color="white" size={144} name="ios-rainy"/>
//                 <Text style={style.temp}>35°</Text>
//             </View>
//             <View style={style.lower}>
//                 <Text style={style.title}>Raining</Text>
//                 <Text style={style.subtitle}>For more info look outside</Text>
//             </View>
//         </LinearGradient>
//         )
//     }
// }

function Weather(){
    return(
        <LinearGradient colors={['#00c6fb', '#005bea']} style={style.container}>
            <View style={style.upper}>
                <Icon color="white" size={144} name="ios-rainy"/>
                <Text style={style.temp}>35°</Text>
            </View>
            <View style={style.lower}>
                <Text style={style.title}>Raining</Text>
                <Text style={style.subtitle}>For more info look outside</Text>
            </View>
        </LinearGradient>
    )

}

export default Weather;

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    upper:{
        flex:1,
        alignItems:'center', justifyContent:'center',
    },
    temp:{
        fontSize:50,
        color:'white',
        marginTop: 10,

    },
    lower:{
        flex:1,
        alignItems:'flex-start', justifyContent:'flex-end',
        paddingLeft:25,
    },
    title:{
        fontSize:25,
        color:'white',
        marginBottom: 10,
    },
    subtitle:{
        fontSize:20,
        color:'white',
        marginBottom:20,
    }
})
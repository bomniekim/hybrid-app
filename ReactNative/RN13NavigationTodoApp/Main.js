import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import TodoScreen from './screens/TodoScreen';
import DoneScreen from './screens/DoneScreen';
import { createAppContainer } from 'react-navigation';


const stackNav=createStackNavigator(
    {
        Todo: {screen:TodoScreen},
        Done: {screen: DoneScreen},
    }
);

const AppContainer=createAppContainer(stackNav);


export default class Main extends Component{

    // 스크린(컴포넌트) 간에는 데이터를 전달할 수 없어서 스크린들을 Navigator로 가지고 있는 
    // 이 Main.js에서 데이터를 만들고 이를 스크린들에 전달하여 사용하도록 해야함
    constructor(){
        super();

        this.state={
            todo:['study Android', 'study ReactNative', 'travel', 'health'],
        }

    }


    render(){
        return(
            <AppContainer
                screenProps={
                    {
                    todo:this.state.todo,
                    }
                }>
            </AppContainer>         
        );
    }
}
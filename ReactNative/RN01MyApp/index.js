/**
 * @format
 */

 // java의 import와 같은 역할
import {AppRegistry} from 'react-native';
// import App from './App.js';
import {name as appName} from './app.json';
// app.json의 name을 이 문서에서는 appName이라는 별명으로 명칭
import MyApp from './MyApp';

//처음 실행되는 Component(android의 Acitvity, View와 같은 역할)를 지정
// 1번째 파라미터: 프로젝트의 이름
// 2번째 파라미터: 처음 실행할 컴포넌트를 리턴해주는 콜백함수
// AppRegistry.registerComponent(appName, () => App); // appName==RN01MyApp

AppRegistry.registerComponent(appName, () => MyApp); 

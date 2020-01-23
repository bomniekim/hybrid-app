/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './BottomTabMain';
import TopTabMain from './TopTabMain';
import DrawerMain from './DrawerMain';

// AppRegistry.registerComponent(appName, () => BottomTabMain); 
// AppRegistry.registerComponent(appName, () => TopTabMain);
AppRegistry.registerComponent(appName, () => DrawerMain);

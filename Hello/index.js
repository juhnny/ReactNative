/**
 * @format
 */

import {AppRegistry} from 'react-native'; //import는 js를 위해 만들어진 것이라 확장자가 없는 파일이면 js 파일이라고 보면 됨
import App from './App'; 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

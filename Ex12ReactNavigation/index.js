/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Main from './Main';
import MainMaterialTopTap from './MainMaterialTopTap'

// AppRegistry.registerComponent(appName, () => Main);
AppRegistry.registerComponent(appName, () => MainMaterialTopTap);

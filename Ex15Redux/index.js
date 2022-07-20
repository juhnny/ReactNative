/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './Main';
import Main2 from './Main2';
import Counter from './Counter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Counter);

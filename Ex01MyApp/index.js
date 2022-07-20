/**
 * @format
 */

import {AppRegistry} from 'react-native'; //.js 문서가 생략된 것
import App from './App';
import {name as appName} from './app.json';

//처음 실행되는 컴포넌트(Activity, Fragment, View 모두 JS에서는 Component)를 지정하는 메소드
//첫번째 파라미터 : 앱 이름
//두번째 파라미터 : 처음 실행될 컴포넌트를 리턴해주는 콜백함수 
//AppRegistry.registerComponent(appName, () => App);

//새롭게 MyApp.jsx 문서를 만들자. .js라고만 써도 된다.
import MyApp from './MyApp';
AppRegistry.registerComponent(appName, () => MyApp);


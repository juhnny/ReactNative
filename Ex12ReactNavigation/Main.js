// RN은 기본적으로 화면전환기술이 존재하지 않음. 
// React Navigation library
// > npm install @react-navigation/native

//추가 라이브러리 2개
// > npm install react-native-screens react-native-safe-area-context

import React, { Component } from "react";
// XML에서 외부 라이브러리를 뜻하는 문자가 @
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Navigator가 내가 보여주고자 하는 화면들을 전환해주는 방식
// 1) 가장 먼저 Navigator들을 감싸는 최상위 NavigationContainer 컴포넌트를 배치
//Note: In a typical React Native app, the NavigationContainer should be only used once in your app at the root. 
//You shouldn't nest multiple NavigationContainers unless you have a specific use case for them.

//Stack Navigator가 보여줄 스크린(컴포넌트)들
import Home from "./screens/Home";
import Second from "./screens/Second";
import { Button } from "react-native";

const Stack = createStackNavigator()

export default class Main extends Component{

    render(){
        return(
            <NavigationContainer>
                {/* 원하는 화면전환 방식을 결정하는 Navigator를 배치 */}
                {/* Stack/Native Stack/Drawer/Bottom Tabs/Material Bottom Tabs/Material Top Tabs */}
                {/* 2) Stack Navigator - 제목줄(action bar)이 생기는 네비게이터 */}
                {/* 라이브러리부터 설치 */}
                {/* 제목줄의 디자인은 Navigator의 screenOptions 속성을 써서 공통으로 적용시킬 수도 있고, 
                Screen의 options 속성을 써서 각각 적용시킬 수도 있다. */}
                {/* 각종 설정은 문서 참조 : https://reactnavigation.org/docs/stack-navigator#options */}
                <Stack.Navigator
                // initialRouteName="SECOND" //초기화면
                screenOptions={{
                    // title:"aa",
                    headerStyle:{backgroundColor:'navy'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                    headerRight: () => {return <Button title="aa"></Button>},
                    headerLeft: () => <Button title="bb"></Button>,
                }}
                >
                    <Stack.Screen 
                        options={{title:'홈'}} 
                        name="HOME" 
                        component={Home} />
                    <Stack.Screen 
                        // options={{headerShown:false}} 
                        name="SECOND" 
                        component={Second} /> 
                    {/* name을 한글로 하는 건 비권장. 옵션을 통해 적용할 것 */}
                </Stack.Navigator>            
            </NavigationContainer>
        )
    }
}
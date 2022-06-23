import 'react-native-gesture-handler'
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//소문자로 돼있으면 함수 아니면 변수

import Intro from "./Intro";
import LoginNav from "./navigators/LoginNav";
import { Alert } from "react-native";
import MainDrawerNav from './navigators/MainDrawerNav';

const RootStack = createStackNavigator()

const Main = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown:false
                }}>
                <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                <RootStack.Screen name="LoginNav" component={LoginNav}></RootStack.Screen>
                <RootStack.Screen name='MainDrawerNav' component={MainDrawerNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Main
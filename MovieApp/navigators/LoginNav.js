import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens_login/Login";
import SignUp from "../screens_login/SignUp";
import ResetPW from "../screens_login/ResetPW";

const Stack = createStackNavigator()

//단순 Navigator 컴포넌트이기에 함수형 컴포넌트로 제작
const LoginNav = () => {
    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="ResetPW" component={ResetPW}></Stack.Screen>
        </Stack.Navigator>

    )
}

export default LoginNav
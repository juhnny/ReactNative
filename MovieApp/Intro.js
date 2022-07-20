import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { ActivityIndicator, Alert, Button, Text, View } from "react-native";

//로그인 정보가 저장되어 있는지 확인 후 로그인 화면 또는 메인 화면으로 이동하는 화면

function checkLogin(props){
    let ifLogin = false
    //로그인 확인
    AsyncStorage.getItem("email").then( (value) => {
        // Alert.alert(value)
        if(value == null || value == "") props.navigation.replace('LoginNav') 
        else props.navigation.replace("MainDrawerNav")
    } )

}

//화면전환 기능을 가진 navigation이라는 객체가 props로 전달되어 오지만 함수형 컴포넌트에는 props가 없기에
//함수 파라미터로 전닫되어짐
const Intro = (props) => {
    checkLogin(props)    

    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            {/* 로그인 정보를 파일입출력으로 읽어올 것 */}
            {/* Activity Indicator */}
            <ActivityIndicator
                size={'large'}
                color={'blue'}>
            </ActivityIndicator>
        </View>
    )
}

export default Intro
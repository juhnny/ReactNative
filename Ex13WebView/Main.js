// WebView library 적용

//https://github.com/react-native-webview/react-native-webview/blob/master/docs/Getting-Started.md
// $ npm install --save react-native-webview

import React from "react";
import { Button, View } from "react-native";
import WebView from "react-native-webview";

const Main = () => {
    return (
        <View style={{flex:1}}>
            {/* 1. 기본 WebView 배치 */}
            {/* style도 지정은 가능하나 */}
            {/* 크기가 기본 flex로 지정되어 있음. 높이를 지정해도 무시됨 */}
            <WebView source={{uri:"https://www.naver.com"}} style={{margin:8}}></WebView>

            {/* 다른 뷰가 있다면 다른 뷰의 높이값을 제외한 나머지 영역을 모두 차지하게 됨 */}
            <Button title="button"></Button>

            {/* 만약 억지로 사이즈를 정하고 싶다면 부모뷰를 만들어서 사이즈를 부모뷰에 지정 */}
            <View style={{height:250, borderWidth:2, margin:4}}>
                <WebView source={{uri:"https://www.google.com"}}></WebView>
            </View>

            {/* 웹뷰를 이용하면 RN에서 구현하기 번거로운 화면은 웹으로 만들어서 적용하는 것도 가능 */}
            {/* 예를 들어 지도 화면이나 로그인 화면 */}
            <WebView source={{uri:"https://juhnny.github.io/webkakaomap/03_kakaomap.html"}}></WebView>

        </View>
    )
}

export default Main

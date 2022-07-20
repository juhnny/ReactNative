import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Second extends Component{
    render(){
        const {name, age} = this.props.route.params

        return(
        <View style={style.root}>
            <Text style={style.text}>Second Screen</Text>

            {/* HOME 화면에서 전달받은 데이터 객체는 자동으로 props의 route.params라는 변수에 저장 */}
            <Text>{this.props.route.params.name}, {this.props.route.params.age}</Text>
            {/* 파라미터명이 너무 길어서 사용이 불편. 구조분해할당하자 */}
            <Text>{name}, {age}</Text>

            {/* 뒤로가기용 버튼 */}
            <Button title="go to Home" onPress={ () => this.props.navigation.goBack() }></Button>

            {/* 제목줄 옵션을 제어하는 버튼 */}
            <Button title="제목 변경" onPress={ () => this.props.navigation.setOptions({title:"세컨드"}) }></Button>
        </View>
        )
    }

    //Second 컴포넌트가 그려진(render) 후 자동으로 발동하는 라이프사이클 메소드
    componentDidMount(){
        // this.props.navigation.setOptions({title:"Good"})
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        padding:8,
        color:'black'
    }
})
import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Home extends Component{
    render(){
        return(
        <View style={style.root}>
            <Text style={style.text}>Home Screen</Text>
            {/* 화면 전환 버튼 */}
            <Button title="Go to the Second screen" onPress={this.goToSecond}></Button>
        </View>
        )
    }

    goToSecond = ()=>{
        //Home이 Second 화면을 직접 찾을 방법은 없다. 부모가 미리 Second로 전환하는 메소드를 만들어 자식을 생성할 때 전달해줘야 한다.
        //Navigator 안에 Screen으로 만드는 것만으로 navigator 객체가 전달되어 온다. 
        //즉 this.props 객체의 멤버로 navigation 객체가 이미 존재하고 다른 화면으로 전환하는 메소드를 갖고 있다.
        // this.props.navigation.navigate('SECOND')

        //만약, 화면을 전환하면서 기존 화면을 finish()하고 싶다면
        // this.props.navigation.replace('SECOND')

        //화면을 전환하면서 데이터 전달하려면? 객체로 만들어 두번째 파라미터로 전달
        this.props.navigation.navigate('SECOND', {name:'Sally', age:13})
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
import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class Main extends Component{
    //RN Component도 Lifecycle Method가 존재함 - 특정 상황에 자동 호출되는 메소드
    
    // 1. 생성자
    constructor(){
        super() //반드시 명시적으로 부모생성자 호출이 필요함

        //화면이 없기에 여기서 화면출력 불가. Log 출력하기
        console.log("constructor()") //node 콘솔창에 출력됨
    }

    //2.화면에 보여지기 전에 즉, 이 컴포넌트의 클래스가 화면에 연결되기 전에 [deprecated]
    // componentWillUnmount(){
    //     //deprecated
    // }

    // UNSAFE_componentWillMount(){
    //     //deprecated
    // }

    // 3. 화면에 그려내는 메소드
    render(){
        console.log("render()")
        return(
            <View>
                <Text>Lifecycle</Text>
                <Button title="Button" onPress={()=>{this.setState({data:"Hello"})}}></Button>
            </View>
        )
    }

    //4. 화면이 그려진 후 (render() 후)
    componentDidMount(){
        console.log("componentDidMount")
    }

    //5. 화면이 갱신될 때마다 호출되는 메소드
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    // 6. 컴포넌트가 종료될 때 호출
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

}
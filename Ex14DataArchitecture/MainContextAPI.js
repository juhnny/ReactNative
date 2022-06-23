//Context API
//계층구조의 컴포넌트들 사이에 데이터를 전달-전달-전달-전달 하지 않고
//일종의 전역변수 같은 곳에 데이터를 

import React, { Component } from "react";
import { Button, Text, View } from "react-native";

//Context API를 사용하기 위한 객체 생성
export const MyContext = React.createContext()
//정보를 제공하는 게 Provider, 사용하는 게 Consumer
//Provider 안에 있는 애들만 Consumer가 될 수 있음
//외부에 있는 Consumer가 이곳의 Provider를 쓰게 하려면 export 필요
import Third from './Third'

export default class MainContextAPI extends Component{

    state = {
        data: "안녕"
    }

    changeText = () => this.setState({data:"잘 가"})

    render(){
        return(
            //이 컴포넌트의 state 데이터를 자식 또는 자손들에게 제공하고 싶다면
            //반드시 Context API의 Provider 객체가 필요
            //이 Provider 안에 위치하는 컴포넌트들은 어디서든(어떤 계층이든)
            // Consumer로서 제공한 데이터를 사용할 수 있음
            // 
            <MyContext.Provider
                value={
                    {
                        data: this.state.data,
                        onPress: () => this.changeText()
                    }
                }
            >
                <View style={{flex:1, padding:16}}>
                    <Text>Main : {this.state.data}</Text>
                    {/* 자식 컴포넌트에게 data 전달 안했음 */}
                    <First></First>
                </View>
            </MyContext.Provider>

        )
    }
}

class First extends Component{
    render(){
        return(
            <View style={{padding: 16, backgroundColor:'lightblue'}}>
                <Text>First</Text>
                <Second></Second>
                {/* 외부 문서에 있는 Third */}
                <Third></Third>
            </View>
        )
    }
}

class Second extends Component{
    render(){
        return(
            <View style={{padding: 16, backgroundColor:'orange'}}>
                <Text>Second</Text>
                {/* Main의 Provider가 제공한 정보를 사용하고 싶다면 Consumer가 되어야 함 */}
                {/* 이 컨슈머 안에 콜백함수가 위치하며 이 함수의 파라미터로 Provider의 value 속성으로 지정한 객체가 전달되어 옮 */}
                {/* 이 콜백함수의 리턴으로 보여줄 컴포넌트를 작성하면 됨 */}
                <MyContext.Consumer>
                    {
                        (value) => {
                            return (
                                <View>
                                    <Text>{value.data}</Text>
                                    <Button title="Change Text" onPress={value.onPress}></Button>
                                </View>
                            )
                        }
                    }
                </MyContext.Consumer>
            </View>
        )
    }
}
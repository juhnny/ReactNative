// RN의 데이터 흐름은 단방향으로 설계되어 있음(부모에서 자식 방향으로만)
// 계층구조가 많으면 데이터를 전달-전달-전달-전달-전달... 해야함
// cf. 자식 컴포넌트끼리도 데이터를 서로 주고받을 수 없음
// 계층구조가 적으면 좋은 방법. 데이터 관리가 용이함
// 하지만 계층구조가 많아지면 많아질수록 전달이 많아져 번거로움
// 그래서 Flux 아키텍쳐 패턴이 만들어짐
// 전역변수들만 있는 영역을 따로 만들고 어디서든 이 변수들을 사용하도록 하는 기법
// 이를 가장 잘 구현한 라이브러리가 Redux
// 하지만 초기 학습이 다소 어려움
// RN 팀에서 Redux처럼 Flux 패턴을 구현할 수 있는 API를 제공
// 이를 Context API라고 함
// /https://ko.reactjs.org/docs/context.html

import React, { Component } from "react";
import { Button, Text, View } from "react-native";

//RN에서 데이터 전달이 얼마나 번거로운지 알아보자
export default class Main extends Component{

    state = {
        data:"Hello"
    }

    changeData = () => this.setState({data:"Goodbye"})

    //하위 컴포넌트에게 위 data를 전달해보자
    render(){
        return (
            <View style={{flex:1, padding:16}}>
                <Text>Main : {this.state.data}</Text>
                {/* 전달 */}
                <First data={this.state.data} aaa={ () => this.changeData() }></First>
                {/* aaa라고 안 하고 onPress라고 보내는 게 보통 */}
            </View>
        )
    }
}

class First extends Component{
    render(){
        return(
            <View style={{backgroundColor:'yellow', padding:16}}>
                <Text>First : {this.props.data}</Text>
                {/* 전달 */}
                <Second data={this.props.data} aaa={this.props.aaa} ></Second>
            </View>
        )
    }
}

const Second = (props) => {
    return(
        <View style={{backgroundColor:'yellowgreen', padding:16}}>
            <Text>Second : {props.data}</Text>
            {/* 버튼을 눌러서 위 텍스트를 바꾸려면? */}
            {/* Main에서부터 메소드를 만들어서 내려줘야 함! */}
            <Button title="Change Text" onPress={props.aaa}></Button>
        </View>
    )
}
import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class MyComponent3 extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                <Text>Component3</Text>
                <Button onPress={this.props.aaa} title={this.props.btnTitle}></Button>
                {/* 보통 onPress에 줄 props 멤버명은 aaa라고 임의로 쓰지 않고 onPress라고 일치시켜준다. */}
            </View>
        )
    }
}


//MyComponent3와 동일하지만 defaultProps만 추가한 클래스
//defaultProps - props에 기본값을 설정하기 위해 정해져 있는 변수
//RN 내부적으로 props 값이 없으면 그 다음으로 defaultProps를 찾는다
export class MyComponent4 extends Component{

    static defaultProps={
        btnTitle: "untitled",
        btnColor: "orange",
        aaa: () => {}

    }

    render(){
        return (
            <View style={{margin:8}}>
                <Text>Component4</Text>
                <Button onPress={this.props.aaa} title={this.props.btnTitle} color={this.props.btnColor}></Button>
            </View>
        )
    }
}
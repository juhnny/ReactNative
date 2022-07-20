import React, {Component} from "react"
import {View, Text, Button} from "react-native"
import { MyContext } from "./MainContextAPI"

export default class Third extends Component{
    render(){
        return(
            <View style={{padding: 16, backgroundColor:'red'}}>
                <Text>Third</Text>
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
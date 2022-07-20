import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class ComponentB extends Component{
    render(){
        return (
            <View>
                <Button title='글씨 변경' onPress={this.props.myOnPress}></Button>
            </View>
        )
    }
}
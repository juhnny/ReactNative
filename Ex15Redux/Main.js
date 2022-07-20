import React from "react";
import { Component } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { createStore } from "@reduxjs/toolkit";

function counterReducer(state = {value:0}, action){
    switch(action.type){
        case 'counter/add' :
            return {value : state.value + 1}
        case 'counter/substract' :
            return {value : state.value - 1}
        default :
            return state  
    }
}

let store = createStore(counterReducer)

store.subscribe( () => Alert.alert(store.getState().value.toString()))
store.subscribe( () => console.log(store.getState())) //node 메트로에 찍힘

export default class Main extends Component{

    render(){
        return(
            <View style={style.root}>
                <Text>{store.getState().value}</Text>
                <Button title="Btn" onPress={this.addState}></Button>
                <Button title="Btn2" onPress={this.substractState}></Button>

            </View>
        )
    }

    addState = () => {
        store.dispatch( {type:'counter/add'} )
    }

    substractState = () => {
        store.dispatch( {type:'counter/substract'} )
    }

}

const style = StyleSheet.create({
    root:{
        backgroundColor:'skyblue',
    }
})
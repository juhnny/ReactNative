import React from "react";
import { Component } from "react";
import { Button, Text, View } from "react-native";
import { configureStore, createSlice } from "@reduxjs/toolkit";
// redux core 패키지 말고 @reduxjs/toolkit 패키지만 쓰기를 권장(Redux 공식문서)

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers : {
        plus : (state) => {
            state.value += 1
        },
        minus : (state) => {
            state.value -= 1
        }
    }
})

export const {plus, minus} = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

store.subscribe( () => console.log(store.getState()) )

export default class Main2 extends Component{
    render(){
        return(
            <View>
                <Text></Text>
                <Button title="plus" onPress={() => store.dispatch(plus())}></Button>
                <Button title="minus" onPress={ () => store.dispatch(minus())}></Button>
            </View>
        )
    }
}

import React from "react";
import { Button, Text, View } from "react-native";
import { createSlice, configureStore, createStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";

function reducer(state, action){
    return state
}

const initialState = {value:0}
const store = createStore(reducer, initialState)

const CounterComponent = () => {
    const count = useSelector( state => state.value )
    return(
        <View>
            <Text>{count}</Text>
            <Button title="+"></Button>
        </View>
    )
}

const Counter2 = () => {
    return(
        <Provider store={store}>
            <CounterComponent></CounterComponent>
        </Provider>
    )
}

export default Counter2
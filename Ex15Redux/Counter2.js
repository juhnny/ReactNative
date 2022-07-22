import React from "react";
import { Button, Text, View } from "react-native";
import { createSlice, configureStore, createStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

//React-redux를 사용한 예제
function reducer(state, action){
    if(action.type === 'up'){
        return {...state, value:state.value + action.step}
    }
    return state
}

const initialState = {value:0}
const store = createStore(reducer, initialState)

const CounterComponent = () => {
    const count = useSelector( state => state.value )
    const dispatch = useDispatch()
    return(
        <View>
            <Text>{count}</Text>
            <Button title="+" onPress={()=>{dispatch({type:'up', step:2})}}></Button>
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
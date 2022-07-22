import React from "react";
import { Button, Text, View } from "react-native";
import { createSlice, configureStore, createStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

//React toolkit을 사용한 예제
const counterSlice = createSlice({
    name:'counterS',
    initialState:{value:100},
    reducers:{
        up:(state, action)=>{
            console.log(action)
            //action을 직접 지정했을 땐 action.step을 이용
            // state.value = state.value + action.step
            
            //자동으로 생성된 action creator를 이용할 땐 payload를 이용
            state.value = state.value + action.payload
        }
    }
})

const store = configureStore({
    reducer:{
        counterABC:counterSlice.reducer //counterSlice에 있는 여러 리듀서를 자동으로 하나로 만든 게 이 reducer
    }
})

/*
function reducer(state, action){
    if(action.type === 'up'){
        return {...state, value:state.value + action.step}
    }
    return state
}

const initialState = {value:0}
const store = createStore(reducer, initialState)
*/

const CounterComponent = () => {
    const count = useSelector( state => {
        console.log(state)
        return state.counterABC.value
    })
    const dispatch = useDispatch()
    return(
        <View>
            <Text>{count}</Text>
            <Button title="+" onPress={()=>{
                //action을 직접 지정할 때
                // dispatch({type:'counterS/up', step:2})

                //자동으로 action을 만드는 방법
                dispatch(counterSlice.actions.up(2))
                }}></Button>
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
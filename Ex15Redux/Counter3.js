import React from "react";
import { Button, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store"
import counterSlice from "./counterSlice";
import { up } from "./counterSlice";

//React toolkit을 사용한 예제

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
                // dispatch(counterSlice.actions.up(2))
                // dispatch(up(2)) 
                dispatch(up({value:2})) 
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
import { createSlice } from "@reduxjs/toolkit";

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
            // state.value = state.value + action.payload
            state.value = state.value + action.payload.value 
        }
    }
})

export default counterSlice
export const {up} = counterSlice.actions
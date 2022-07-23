import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import testSlice from "./testSlice";

//React toolkit을 사용한 예제
const store = configureStore({
    reducer:{
        counterABC:counterSlice.reducer, //counterSlice에 있는 여러 리듀서를 자동으로 하나로 만든 게 이 reducer
        test:testSlice.reducer,
    }
})

export default store
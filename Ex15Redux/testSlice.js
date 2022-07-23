import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name:"testSlice",
    initialState:{
        data:[
            {name: "Kim0", message:"I'm Sam", image: {uri:"https://firebasestorage.googleapis.com/v0/b/dailydiscovery-9497b.appspot.com/o/uploads%2Fphotos%2FIMG_20220508_055540_.png?alt=media&token=5820cf1d-819e-4cae-a2b8-2bb837608cb0"}},
            {name: "Kim1", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim2", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim3", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim4", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim5", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim6", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim7", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim8", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim9", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Kim10", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
        ],
        loading:false,
    },
    reducers:{
        add:(state, action)=>{
            console.log(action.type, action.payload)
            state.data[0].name = state.data[0].name + "+"
        },
        addData:(state, action)=>{
            console.log(action.type)
            state.data = state.data.concat(action.payload)
            console.log(state.data.length)
        },
        setLoading:(state, action) =>{
            console.log(action.type, action.payload)
            state.loading = action.payload
            console.log(state.loading)
        },
    }
})

export default testSlice
export const {add, addData, setLoading} = testSlice.actions
import React, { Component } from "react";
import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";
import testSlice, {add} from "./testSlice";
import store from "./store";
import { useSelector, useDispatch } from "react-redux/es/exports";



export default class FlatListEx extends Component{

    state = {
        data:[
            {name: "Sam0", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam1", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam2", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam3", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam4", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam5", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam6", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam7", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam8", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam9", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam10", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
        ]
    }

    render(){
        return(
            //SafeAreaView - iOS에서 노치 영역을 제외한 부분(SafeArea)에만 표현되는 뷰
            <SafeAreaView style={{flex:1, padding:8, backgroundColor:'grey'}}>
                <Text>AAA:</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={ obj => {
                        return(
                            <View style={{backgroundColor:'white', borderRadius:8, marginBottom:8}}>
                                <Text style={{height:100}}>{obj.item.name} - {obj.index}</Text>
                                <Image 
                                    source={obj.item.image} 
                                    style={{width:100, height:100}}></Image>
                            </View>
                        )
                    }}
                    contentContainerStyle={{backgroundColor:'green'}}
                    onEndReached={()=> console.log('End!')}
                    onEndReachedThreshold={1}>
                    
                </FlatList>
            </SafeAreaView>
        )
    }
}
import React, { Component, useEffect, useState } from "react";
import { ActivityIndicator, Animated, Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";
import testSlice, {add, addData, setLoading} from "./testSlice";
import store from "./store";
import { useSelector, useDispatch, Provider } from "react-redux";
import MasonryList from '@react-native-seoul/masonry-list';
import Spinner from "react-native-loading-spinner-overlay";

const FlatListEx2 = () => {
    return(
        <Provider store={store}>
            <MyList></MyList>
        </Provider>
    )
}

const MyList = () => {
    //state 사용
    const [animal, setAnimal] = useState("Otter")
    // Hook: 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능
    // useEffect() 함수는 React component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook 
    // Side effect는 component가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과들
    // 함수형 컴포넌트에서도 클래스형 컴포넌트에서 사용했던 생명주기 메서드를 사용할 수 있게 됨
    // useEffect(() => console.log(animal)) //렌더링 때마다 콜백함수 실행
    // useEffect(() => console.log(animal), [animal]) //animal이 렌더링될 때마다 콜백함수 실행
    // useEffect(() => console.log(animal), []) //맨 처음 렌더링시 한번만 실행
    // useEffect(() => loadData(), []) //맨 처음 렌더링시 한번만 실행

    const loadData = () => {
        dispatch(setLoading(true))
        //fetch를 여기서 했다고 치고
        newData = [
            {name: "New", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "New", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
        ]
        dispatch(addData(newData))
        dispatch(setLoading(false))
    }

    const getData = () => {
        // let url = "http://iwibest.dothome.co.kr/ClassumAssignment/getPost.php"
        let url = "http://iwibest.dothome.co.kr/ClassumAssignment/postChat.php"
        fetch(url)
        .then(res => res.text())
        .then(text => console.log(text))
        .catch(err => console.log(err))
    }

    //store 사용
    const slice = useSelector(state => {
        return state.test
    })
    const dispatch = useDispatch()

    const Header = () => {
        return(
            <View style={{height:40}}>
                <Text>HEADER</Text>
            </View>
        )
    }

    // const [leftColHeight, setLeftColHeight] = useState(0)
    // const [rightColHeight, setRightColHeight] = useState(0)
    let leftColHeight = 0
    let rightColHeight = 0

    return(
        //SafeAreaView - iOS에서 노치 영역을 제외한 부분(SafeArea)에만 표현되는 뷰
        <SafeAreaView style={{flex:1, padding:8, backgroundColor:'grey'}}>
            <Text>AAA/{animal}/{slice.data.length}</Text>
            <ActivityIndicator color={'#FF0000'}/>
            {/* <Spinner
                visible={true}
                textContent={'Loading...'}
                textStyle={{fontWeight:'bold'}}>
            </Spinner> */}
            {/* <MasonryList
                data={slice.data}
                renderItem={obj=>{
                    return(
                        <View style={{backgroundColor:'white', borderRadius:8, marginBottom:8}}>
                            <Text style={{height:100}}>{obj.item.name} - {obj.index}</Text>
                            <Image 
                                source={obj.item.image} 
                                style={{width:100, height:100}}></Image>
                            <Button title="+" onPress={getData}></Button>
                        </View>
                    )
                }}
                ListHeaderComponent={Header}
                // stickyHeaderIndices={[0, 2]}
                onEndReached={()=> {
                    console.log('End!')
                    if(slice.loading) return
                    else loadData()
                }}
                >
            </MasonryList> */}
            {/* <FlatList
                data={slice.data}
                renderItem={ obj => {
                    return(
                        <View
                            onLayout={event => {
                                console.log('start', leftColHeight, rightColHeight)
                                let height = event.nativeEvent.layout.height
                                console.log(height)
                                if(obj.index % 2 === 0){
                                    console.log('left')
                                    leftColHeight += height
                                } else {
                                    console.log('right')
                                    rightColHeight += height
                                }    
                                console.log("end", leftColHeight, rightColHeight)
                            }} 
                            style={{ width:"50%", alignSelf:"flex-start", marginTop:0, backgroundColor:'white', borderRadius:8, marginBottom:8}}>
                            <Text style={{}}>{obj.item.name} - {obj.index}</Text>
                            <Image 
                                source={obj.item.image} 
                                style={{width:"100%", height:150}}></Image>
                            <Button title="+" onPress={getData}></Button>
                        </View>
                    )
                }}
                contentContainerStyle={{backgroundColor:'green', alignItems:'baseline'}}
                ListHeaderComponent={Header}
                stickyHeaderIndices={[0, 2]}
                // StickyHeaderComponent={Header}
                onEndReached={()=> {
                    console.log('End!')
                    if(slice.loading) return
                    else loadData()
                }}
                numColumns={2}
                // onViewableItemsChanged={({viewableItems, changed})=>{
                //     // console.log("Visible items are: ", viewableItems)
                //     // console.log("changed in this iteration: ", changed)
                // }}
                >
            </FlatList> */}
        </SafeAreaView>
    )
}

export default FlatListEx2
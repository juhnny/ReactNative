import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableNativeFeedback, Image, Alert } from 'react-native'

export default class Main extends Component{

    //화면 갱신에 영향을 미치는 특별한 변수 
    state = {
        datas:["Hamburger", "Pizza", "Fries", "Chicken", "BBQ"],

        //조금 더 복잡한 구조의 데이터
        datas2:[
            {name: "Sam1", message:"I'm Sam", image: require('./image/plant.png')},
            {name: "Sam2", message:"I'm Sam", image: require('./image/plant.png')},
            {name: "Sam3", message:"I'm Sam", image: require('./image/plant.png')},
            {name: "Sam4", message:"I'm Sam", image: require('./image/plant.png')},
            {name: "Sam5", message:"I'm Sam", image: require('./image/plant.png')},
            {name: "Sam6", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam7", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam8", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam9", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
            {name: "Sam0", message:"I'm Sam", image: {uri:"https://cdn.pixabay.com/photo/2022/05/29/05/36/otter-7228458_960_720.jpg"}},
        ]
    }

    render(){
        return (
            <View style={style.root}>
                <Text style={style.titleText}>FlatList</Text>
                
                {/* RN에서는 RecyclerView 역할을 하는 Component가 두가지 있음 */}
                {/* FlatList - 일반적인 리스트뷰의 형태 */}
                {/* SectionList - 섹션마다 제목(헤더)을 붙일 수 있음. 그러나 그냥 Text와 FlatList로 구성하는 게 더 편해서 쓰이지 않음 */}

                {/* FlatList */}
                {/* 필수속성 두가지 - data와 renderItem(아이템 하나의 모양. 즉 컴포넌트를 만들어 리턴하는 콜백함수) */}
                {/* 안드로이드의 adapter같은 건 따로 만들지 않아도 됨 */}
                <FlatList
                // JS는 배열과 리스트가 따로 구분되지 않는다. 그냥 배열로 만들면 된다.
                // renderItem 속성에 지정한 함수는 data 속성에 지정한 배열의 개수만큼 호출된다.
                // map과 동일하게 value, index, array 세 개의 인수를 받음
                data={this.state.datas}
                renderItem={ (obj)=>{
                    //파라미터: 위 data 속성으로 지정한 배열의 요소와 각 요소의 index 번호를 멤버로 가진 객체 하나
                    return (
                        <Text>{obj.item} - {obj.index}</Text>
                        // 그런데 매번 obj. 을 쓰는 게 불편하니까..)
                    )
                }}>    
                </FlatList>

                {/* renderItem의 콜백함수 파라미터 객체를 받을 때 '구조분해할당'을 선호 */}
                <FlatList
                    data={this.state.datas}
                    renderItem={ ({item, index})=>{
                        return(
                        //실행문이 하나일 땐 function의 중괄호 생략 가능. 이 때는 return 키워드 생략
                        //클릭될 수 있도록 Touchable 사용
                        //onPress 안에 선언적 함수를 쓰면 파라미터를 받을 수가 없다. 소괄호를 열면 함수 호출이 돼버리니까.
                        //onPress 안에서 익명함수나 화살표함수를 쓰면 호출문이 아니라 선언문이 돼서 item, index를 파라미터로 사용 가능
                        <TouchableNativeFeedback style={style.itemView} onPress={()=>{alert(index)}}>
                            <View>
                                <Text>번호: {index}</Text>
                                <Text>값: {item}</Text>
                            </View>
                        </TouchableNativeFeedback>
                        )
                    }
                    }>
                </FlatList>

                <FlatList
                    data={this.state.datas2}
                    renderItem={({item, index})=>
                        <TouchableNativeFeedback style={style.item} onPress={()=>{Alert.alert(item.name)}}>
                            <View>
                                <Image source={item.image} style={style.itemImg}></Image>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemMsg}>{item.message}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    }>
                </FlatList>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:8,
        color:'black',
    },
    itemView:{
        borderWidth:1,
        borderRadius:4,
        margin:8,
        padding:8,
    },
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        marginBottom:8,
        padding:8,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
    },
    itemMsg:{
        fontSize:16,
        fontStyle:'italic'
    },
})
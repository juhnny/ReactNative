import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BigCatalog = (props) => {
    return(
        <TouchableOpacity
            //눌렸을 때 콘텐츠의 투명도를 어떻게 할 것인지 [0 ~ 1 사이]
            activeOpacity={0.9}
            onPress={ () => props.onPress(props.movie.id) }>
            {/* 커버 이미지 */}
            <Image 
                source={{uri:props.movie.large_cover_image}}
                // 이미지의 폭을 숫자로 정하면 디바이스마다 들어맞지 않을 수 있고
                // 100%로 정하면 FlatList의 한 항목의 너비(horizontal일 때)는 wrap이므로 상충된다.
                // 디바이스의 크기에 맞춰보자
                style={{width:Dimensions.get('window').width, height:300}}></Image>

            {/* 개봉일, 제목, 장르정보를 이미지와 겹치도록 배치하려면 - absolute 포지션 적용 */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    {/* <Text style={style.labelGenres}>{props.movie.genres.join(', ')}</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:"100%",
    }, 
    labelYear:{
        color:'white',
        padding:8,
        fontWeight:'bold',
        backgroundColor:'#E70915',
        alignSelf:'flex-start',
        marginLeft:4,
    },
    labelContainer:{
        backgroundColor:"#141414",
        width:"100%",
        opacity:0.8,
        padding:8,
    },
    labelTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        padding:8,
        
    },
    labelGenres:{
        fontSize:12,
        color:"white",
        padding:8,
    },
})

export default BigCatalog
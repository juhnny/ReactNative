import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BigCatalogList from "../components_movie/BigCatalogList";
import SmallCatalogList from "../components_movie/SmallCatalogList";

export default class MovieList extends Component{
    render(){
         //인기 영화 정보 불러오는 url [get방식]
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";

        // 최신등록순 영화 정보 불러오는 url 
        const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
        
        // 평점순 영화 정보 불러오는 url 
        const ratingtUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
        
        // 다운로드순 영화 정보 불러오는 url 
        const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";
 

        return (
            <ScrollView style={style.root}>
                {/* 인기순 영화를 fetch 해와서 큰 이미지로 ViewPager처럼 보여주기 */}
                <BigCatalogList 
                    url={bigUrl}
                    onPress={ id => this.props.navigation.navigate('MovieDetail', {id:id})}></BigCatalogList>

                {/* 최신순, 평점순, 다운로드순 영화목록을 가로 스크롤로 보여주기 */}
                {/* 세 종류 모두 한 컴포넌트를 써서 같은 디자인으로 만들자 */}
                <SmallCatalogList 
                    title="최신등록순" 
                    url={recentUrl}
                    //navigate()의 두번째 파라미터로 데이터를 객체로 전달
                    onPress={ id => this.props.navigation.navigate('MovieDetail', {id:id,})}></SmallCatalogList>
                <SmallCatalogList 
                    title="평점순" 
                    url={ratingtUrl}
                    //객체의 키 이름과 값 이름이 같으면 하나 생략 가능
                    onPress={ id => this.props.navigation.navigate('MovieDetail', {id,})}></SmallCatalogList>
                <SmallCatalogList 
                    title="다운로드순" 
                    url={downloadUrl}
                    onPress={ id => this.props.navigation.navigate('MovieDetail', {id,})}></SmallCatalogList>
            </ScrollView>
        )
    }

    //render() 실행 후 컴포넌트가 장착되면 자동으로 발동하는 lifecycle 메소드
    componentDidMount(){
        //제목줄에 햄버거 메뉴 아이콘, 로그아웃 메뉴 버튼 추가 및 타이틀 위치 중앙 정렬
        this.props.navigation.setOptions({
            headerTitleAlign:'center',
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={ () => this.props.navigation.toggleDrawer()} style={{marginLeft:16}}>
                        <Image source={require('../image/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },
            headerRight: () => (  
                <TouchableOpacity 
                    style={{flexDirection:'row', marginRight:16}}
                    onPress={ async () => {
                        //로그아웃이므로 AsyncStorage에 저장된 로그인 정보 email을 제거 혹은 수정
                        // AsyncStorage.setItem("email", "")
                        // promise 문법의 .then() 문법을 좀 더 쉽게 하기 위해
                        // ES7에서 async-await 문법이 등장
                        await AsyncStorage.setItem("email", "") //이 줄이 끝나기까지 기다렸다가 다음 줄이 시작됨

                        //로그아웃되면 자동으로 Intro 화면으로 다시 바뀌도록
                        this.props.navigation.navigate('Intro')
                    }}>
                    <Image source={require('../image/tabs/ic_profile.png')}></Image>
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            ) 
            
        })
    }
}

const style = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:"#FAFAFA"
    },
})
import React, { Component } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import BigCatalog from "../components_movie/BigCatalog";

export default class MovieDetail extends Component{

    state={
        movie: null,
    }

    render(){
        //삼항연산자 사용
        //0, false, undefined일 때 거짓
        return this.state.movie? 
        (
            <ScrollView style={style.root}>
                <BigCatalog movie={this.state.movie} onPress={()=>{}}></BigCatalog>
                {/* 영화정보 출력 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{this.state.movie.runtime}분</Text>
                        <Text>평점: {this.state.movie.rating}</Text>
                        <Text>좋아요: {this.state.movie.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 출력 영역 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.desc}>{this.state.movie.description_full} </Text>
                </View>

                {/* 배우 캐스팅 정보 - CastingList.js 별도 컴포넌트 제작 권장*/}

                {/* 스크린샷 이미지 - ScreenShot.js 별도 컴포넌트 제작 권장 */}

            </ScrollView>
        ) 
        : 
        (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size={'large'} color="red"></ActivityIndicator>
            </View>
        )
        // return (
        //     <View style={style.root}>
        //         <Text>Movie Detail</Text>
        //     </View> 
        // )
    }

    //전달받은 영화 id로 영화 상세정보를 fetch하는 기능메소드
    loadData(){
        //navigator에 의해 스크린이 전환될 때 전달되어온 데이터 받기
        //MovieDetail 페이지는 MovieList에서 넘어오지만 서로 같은 Navigator에 속한 병렬적인 구조
        //MovieList에서 MovieDetail을 만드는 것이 아니기 때문에 XML attribute, 즉 props로 전달받을 수가 없다.
        const id = this.props.route.params.id
        // alert(id)
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        // .then( res => res.text())
        // .then( resStr => alert(resStr) )
        .then( res => res.json())
        .then(obj => this.setState({movie:obj.data.movie}))
    }

    componentDidMount(){
        this.loadData()
    }
}

const style = StyleSheet.create({
    root:{flex:1},
    title:{
        fontSize:16,
        fontWeight:'bold',
        paddingTop:24,
        paddingRight:16, 
        paddingLeft:16,
        paddingBottom:8,
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
    },
    desc:{
        paddingHorizontal:16,
    }
})

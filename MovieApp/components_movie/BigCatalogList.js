import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BigCatalog from "./BigCatalog";

export default class BigCatalogList extends Component{

    state = {
        data:["a", "b", "C"]
    }

    render(){
        return(
            <View style={style.root}>
                {/* data, renderItem은 FlatList의 필수속성 */}
                <FlatList 
                    data={this.state.data} 
                    //renderItem은 data의 개수만큼 호출
                    renderItem={ ( {item, index} ) => {
                        //forEach, map과 다르게 배열의 요소값(item), 인덱스 번호(index), 구분자(separators)를 가진 객체 한 개가 파라미터로 전달됨
                        return <BigCatalog 
                                    movie={item}
                                    onPress={this.props.onPress}></BigCatalog>
                    }}
                    horizontal={true} //감싸고 있는 스크롤뷰와 스크롤 방향이 달라야 함
                    pagingEnabled={true}
                >

                </FlatList>
            </View>
        )
    }

    //컴포넌트가 화면에 보여진 후 자동 발동하는 lifecycle 메소드
    componentDidMount(){
        //인기순 API URL을 통해 데이터 받아오기(네트워크 작업)
        //XMLHttpRequest를 쓰다가 나온 게 AJAX
        //하지만 AJAX는 JQuery 문법을 사용하는데 JQuery가 업데이트 중단
        //요즘은 JS에 내장된 fetch library가 많이 쓰이고 있음
        //네트워크는 비동기 작업이므로 결과를 받으려면 promise 문법 사용
        //promise 문법에는 .then()을 쓰는 방법과 async-await을 쓰는 방법이 있음

        //응답 결과를 string으로 보기
        // fetch(this.props.url)
        // .then( (response) => { //응답 객체를 그냥 출력하면 객체 이름이 보임. 이 결과를 단순 string으로 변환
        //     return response.text() 
        // } ).then( (responseText) => {
        //     alert(responseText)
        // } )

        //응답 결과를 Json 파싱하기
        fetch(this.props.url)
        .then( (response) => {
            return response.json()
        }).then( (json) => {
            //JSON 데이터가 갖는 키를 찍어보자
            // alert(json.status)
            // alert(json.data.movies)
            this.setState({data: json.data.movies})
        })

    }
}

const style = StyleSheet.create({
    root:{
        height:300,
        backgroundColor:'pink',
        marginBottom:16,
    }
})
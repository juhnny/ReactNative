//무슨 문제인지 오류가 나므로 그냥 필기만 참고

// RN 주요 키워드
// 1. Component
// 2. State
// 3.props(Properties)


//render 함수가 React 클래스에 의해 돌아가기 때문에 React의 import는 필수
//react 라이브러리에 존재하는 Component 클래스를 import
import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, Image } from 'react-native'

//RN에서는 반드시 컴포넌트를 상속한 클래스만 화면에 보일 수 있다.
class MyApp extends Component{
    //리액트의 Component 클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    render(){
        //JSX언어의 특징은 JS 문법 안에서 XML 문법을 쓸 수 있고 그 반대도 가능하다는 것
        let name = "Sam" //지역변수
        let btnTitle = "GoGoGo"

        //이 메소드에서 리턴한 컴포넌트가 화면에 보여짐
        // var tv = new Text("Hello")
        // return tv

        // return <Text>Hello World</Text>
        
        //render()의 리턴은 오직 1개의 컴포넌트만 가능
        //여러 컴포넌트를 묶는 컴포넌트 그룹이 필요 - View
        //모양은 없고 그냥 묶어주는 기능만 있음 
        //기본적으로 보여지는 UI의 스타일은 CSS를 모티브로 적용되어 있음
        //단, 스타일을 CSS 문서로 적용하는 것이 아니라 스타일 값을 가진 객체를 만들어 속성으로 지정해서 적용함
        //HTML과 CSS, JS를 각각 분리하는 게 아니라 한 곳에서 다 하고 싶다는 것
        // return (
        //     <View style= {rootView}>
        //         {/* 여기는 xml 문법을 따른다 */}
        //         {/* JSX언어의 특징은 JS 문법 안에서 XML 문법을 쓸 수 있고 그 반대도 가능하다는 것 */}
        //         {/* XML 영역 안에서 JS 변수나 함수호출문을 쓰고 싶다면 {}만 쓰면 됨. 주석도 그 안에서 사용 */}
        //         <Text>Hellow World</Text>
        //         <Text style={textStyle}>Nice to meet you, {name}</Text>
        //         <Button title='Button'></Button>
        //         {/* Button은 style 속성이 없어 적용 불가  */}
        //         <Button title={btnTitle} style={btnStyle}></Button>
        //         <Text style={style.mainText}>I'm Jake hahaha{name}</Text>
        //         {/* Button의 크기는 부모뷰의 크기를 조절해 간접적으로 조절  */}
        //         <View style={ {margin:10, width:150} }>
        //             <Button title='Button'></Button>
        //         </View>
        //     </View>
        // ) //소괄호가 없어도 되지만 영역구분을 돕기 위해 괄호를 써주길 권장

        //이미지 컴포넌트도 연습해보기. 나중에 수업도 있을 것
        return (
            <View style={style.rootContainer}>
                <Text style={style.mainText}>Hwllo world</Text>
                <Text style={style.plainText}>I want you</Text>
                <Button title='button'></Button>
                <Button title='button' color={'orange'}></Button>
                <View style={ {marginTop:10, width:200} }>
                    <Button title='button' color={'#841584'}></Button>
                </View>

                {/* 이미지 컴포넌트 */}
                {/* 이미지의 경로를 그냥 '' 문자열로 쓰는 게 아니라 JS의 require() 함수(어떤 이미지를 객체로 만들어줌)를 이용해야만 함 */}
                <Image source={ require("./image/chair2")} style={ {margin: 4, flex: 1, resizeMode:'center', width:null} }></Image>
            </View>
        )

    }
}

//MyApp 클래스가 보여주는 컴포넌트들의 스타일값을 가진 객체를 생성
//1. 텍스트의 스타일 작업(CSS와 비슷. 케밥케이스에서 카멜케이스로 바뀌었고 달라진 글자들도 있음)
const textStyle = {
    margin: 8,
    color:'red', 
    fontSize:20, 
    fontWeight:'bold', 
    margin:16 //기본 단위 dp
}

const rootView = {
    backgroundColor : "#AAAA55",
    //View의 기본높이는 wrap
    // height: 500 //디바이스마다 높이가 다르므로
    // height: '100%' 
    //그치만 그보다 더 권장하는 방법
    //RN의 권장 사이즈 기법
    //RN은 기본적으로 무조건 display 속성이 flex 레이아웃으로 돼있음
    //그리고 기본 flex의 방향인 flex-direction값이 column(수직방향)으로 돼있음
    // flexDirection:'row'
    //flex-grow는 그냥 간략히 flex로 바뀜 - 다른 뷰와 비례적으로 사이즈를 결정하는 속성값
    flex : 1,
    padding : 16
}

//버튼은 스타일 작업이 불가. style 속성이 없음
const btnStyle = {
    marginTop: 40,
    backgroundColor: 'green'
}

//그러나 위처럼 개별 스타일 객체를 만들면 관리도 어렵고 자동완성기능도 제한적이어서 별로
//그래서 모든 스타일관련 객체를 하나로 묶는 클래스가 존재함
const style = StyleSheet.create({
    //객체를 만들어 인수로 넘김
    //그 안에는 각각의 스타일 객체들이..
    rootContainer: {
        backgroundColor: 'green',
        flex: 1,
        padding: 16
    },
    mainText: {
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16
    }, 
    plainText :{
        color: 'black',
        margin: 16
    }
})

//다른 문서(index.js)에서 이 클래스를 사용하려면(import) 반드시 여기서 추출(export) 해야함
//하나의 .js 문서에서 export는 여러 개 할 수 있음. 단, 그중 반드시 1개는 default여야 함
export default MyApp;

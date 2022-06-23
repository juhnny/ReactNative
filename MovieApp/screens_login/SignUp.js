import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyTab from "../components/MyTab";
import MyTextInput from "../components/MyTextInput";

export default class SignUp extends Component{

    //탭 선택 시 화면이 갱신되어야 하기에 탭 관련 변수는 state에 저장
    //state는 값을 바꾸면 화면이 바뀌는 특별한 변수
    state = {
        tabs:["전화번호", "이메일"],
        tabIndex:0, //현재 선택된 탭 번호
    }

    setTabIndex = (index) => {
        //이 함수를 실행시킬 때 index를 받아서 설정
        this.setState({tabIndex:index})
    }

    render(){
        return(
            <View style={style.root}>
                {/* 본문 영역 */}
                <View style={style.content}>
                    {/* 탭 레이아웃 영역 */}
                    <View style={style.tabContainer}>
                        {/* <MyTab label="Tab1" selected={true}></MyTab> */}
                        {/* <MyTab label="Tab2" selected={false}></MyTab> */}
                        {/* tabs라는 배열의 개수만큼 TabComponent 만들기 */}
                        {this.state.tabs.map( (value, index, array) => 
                            <MyTab 
                                label={value} 
                                selected={this.state.tabIndex == index}
                                myOnPress={ () => this.setTabIndex(index) }>
                            </MyTab> 
                        )}
                    </View>

                    {/* 입력 영역 */}
                    <MyTextInput placeholder={this.state.tabs[this.state.tabIndex]}></MyTextInput>
                    {/* 두번째 TextInput은 '이메일' 탭일 때만 보여지도록 함 */}
                    {
                        //if  //error. XML 영역 안의 중괄호에서는 if문 사용 금지. 변수나 함수호출문만 쓸 수 있음
                        // && 연산자의 특징: 앞의 연산 결과가 참일 때만 다음 연산을 실행한다. 거짓이면 뒤는 쳐다보지도 않고 실행하지 않는다.
                        // 이런 특징 덕에 if문처럼 활용되기도 함. C부터 있던 특징
                        this.state.tabIndex == 1 && <MyTextInput placeholder='비밀번호' secureTextEntry={true}></MyTextInput> 
                    }

                    {/* 전화번호 탭일 때 */}
                    {
                    this.state.tabIndex == 0 && 
                    <View style={{width:"100%", margin:16}}>
                        <Button title="다음" onPress={ () => this.setTabIndex(1)}></Button>
                        <Text style={{marginTop:16, color:'#929292', textAlign:'center', fontSize:12}}>
                            Movie 앱의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든 수신을 취소할 수 있습니다.
                        </Text>
                    </View> 
                    }

                    {/* 이메일 탭일 때 */}
                    {
                    this.state.tabIndex == 1 && 
                    <View style={{width:"100%", margin:16}}>
                        <Button title="완료" onPress={ () => {
                            //회원가입 코드 작성
                            //...
                            this.props.navigation.goBack()
                        }}></Button>
                    </View> 
                    }
                </View>

                {/* Footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerMsg}>
                        이미 계정이 있으신가요?&ensp; 
                        <Text style={style.goBack} onPress={()=>this.props.navigation.goBack()}>로그인</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF',},
    content:{
        flex:1,
        width:"100%",
        alignItems:'center',
        padding:32
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    footer:{
        borderTopColor:"lightgrey",
        borderWidth:1,
        padding:8,
    },
    footerMsg:{
        color:"#929292",
        textAlign:'center'
    },
    goBack:{
        color:"#3796EF"
    }
})
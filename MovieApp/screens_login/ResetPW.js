import React, { Component } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import MyTab from "../components/MyTab";
import MyTextInput from "../components/MyTextInput";

export default class ResetPW extends Component{

    state={
        tabs:['이메일', "전화번호"],
        tabIndex:0,
        //탭 선택에 따른 안내메세지
        tabMessages:[
            "이메일을 입력하면 임시비밀번호를 보내드립니다.",
            "전화번호를 입력하면 임시비밀번호를 보내드립니다.",
        ]
    }

    //탭번호를 변경하는 기능 메소드
    setTabIndex = (index) => this.setState({tabIndex:index})

    render(){
        return(
            <View style={style.root}>
                {/* 본문 영역 */}
                <View style={style.content}>
                    <View style={style.lockImageContainer}>
                        <Image source={require('../image/lock.png')}></Image>
                    </View>
                    <Text style={style.title}>로그인에 문제가 있나요?</Text>
                    <Text style={style.tabMessage}>{this.state.tabMessages[this.state.tabIndex]}</Text>
                    {/* 탭 영역 */}
                    <View style={{flexDirection:'row', marginBottom:16}}>
                    {
                        this.state.tabs.map( (value, index) => {
                            return(
                                <MyTab label={value}
                                    selected={this.state.tabIndex == index}
                                    myOnPress={() => this.setTabIndex(index)}>
                                </MyTab>
                            )
                        } )
                    }
                    </View>

                    {/* 정보입력 */}
                    <MyTextInput placeholder={this.state.tabs[this.state.tabIndex]}></MyTextInput>

                    {/* 버튼 */}
                    <View style={{width:"100%", margin:16}}>
                        <Button 
                            title="보내기" 
                            onPress={ () => {
                                //발송 작업
                                //...
                                Alert.alert("임시비밀번호가 발송되었습니다.", "로그인 후 정보수정을 통해 안전한 비밀번호로 변경해 주시기 바랍니다.")
                                }}>
                        </Button>
                    </View>
                </View>

                {/* footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.goBack} onPress={this.props.navigation.goBack}>로그인 화면으로 돌아가기</Text>
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
        padding:32,
    },
    lockImageContainer:{
      padding:24,
      borderWidth:1,
      borderColor:"#929292",
      borderRadius:500,  
    },
    title:{
        fontSize:16,
        color:"#929292",
        marginTop:16,
        marginBottom:16,
    },
    tabMessage:{
        textAlign:'center',
        marginBottom:16,
        color:"#292929"
    },
    footer:{
        borderTopColor:"#929292",
        borderTopWidth:1,
        padding:8,
    },
    goBack:{
        color:"#3796EF",
        textAlign:'center',
    },
})
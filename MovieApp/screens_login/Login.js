import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyTextInput from "../components/MyTextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends Component{
    render(){
        return(
            <View style={style.root}>
                {/* 콘텐츠 영역 */}
                <View style={style.content}> 
                    {/* Logo */}
                    <Text style={style.logo}>MOVIE</Text>
                    {/* 이메일과 비밀번호 입력칸 */}
                    {/* TextInput은 기본적으로 아무 디자인이 없어서 스타일이 필요 */}
                    {/* TextInput은 여기저기 앱 전반에서 쓰이므로 아예 커스텀 컴포넌트로 만들어 쓰자 */}
                    {/* 아래 placeholder 속성명은 내가 지정한 이름 */}
                    <MyTextInput placeholder="이메일" onChangeText={this.onChangeText}></MyTextInput>
                    <MyTextInput placeholder="비밀번호" secureTextEntry={true}></MyTextInput>
                    {/* Text 컴포넌트에도 onPress가 있음 */}
                    <Text style={style.resetPW} onPress={ () => this.props.navigation.navigate('ResetPW')}>비밀번호 재설정</Text>
                    {/* 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:32}}>
                        <Button title="로그인" color="#3796EF" onPress={ this.login }></Button>
                    </View>
                    {/* 회원가입 */}
                    <Text style={style.signup}>
                        계정이 없으신가요?&nbsp;&nbsp; 
                        <Text style={style.signupLink} onPress={ () => this.props.navigation.navigate("SignUp") }>가입하기</Text>
                    </Text>
                </View>
                {/* Footer 영역 */}
                <View style={style.footer}>
                    <Text style={style.footerCopyright}>MovieApp by Juhnny</Text>
                </View>
            </View>
        )
    }

    //로그인 버튼 클릭 시 
    login = () => {
        //다음 접속 시 로그인을 또 요청하지 않도록 디바이스에 로그인 정보 저장해놓기(Android SharedPreference와 비슷)
        // AsyncStorage library 필요
        //비동기(멀티 스레드)이기 때문에 저장이 완료되기 전에 아래 화면 전환 코드가 실행될 수도 있음
        //때문에 저장이 완료된 뒤에 다음 작업이 이뤄지도록 하는 기법이 (JS에서는) promise 기법
        //이 promise를 위해 만들어진 메소드: then() 메소드
        AsyncStorage.setItem('email', this.email).then( () => {
            //화면 전환할 때 현재 Login 화면은 종료 - replace
            this.props.navigation.replace('MainDrawerNav')
        })
        
        //로그인 되었으니 앱의 메인화면인 MovieList 화면으로 이동
        //하기 위해 MovieList를 가진 MovieStackNav를 가진 DrawerNav로 이동
        // this.props.navigation.navigate('MainDrawerNav')
    }

    //이메일을 입력하는 MyTextInput에 전달할 메소드
    onChangeText = (value) => { //TextInput의 글씨가 변경될때마다 파라미터로 글씨가 전달된다.
        //state을 사용하면 값이 변경될 때마다 화면이 갱신돼버리니 그냥 일반 변수를 사용한다.
        this.email = value
    }
    //입력된 이메일 입력값을 저장할 일반 멤버변수
    email = ""
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#FEFFFF',},
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:32,
    },
    logo:{
        color:'#929292',
        fontWeight:'bold',
        fontSize:40,
        marginBottom:20,
    }, 
    resetPW:{
        width:"100%",
        textAlign:'right',
        color:"#3796EF",
        marginTop:8,
        marginBottom:16,
    },
    signup:{
        color:"#929292"
    },
    signupLink:{
        color:"#3796EF"
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'lightgrey',
        alignItems:'center',
        padding:4
    },
    footerCopyright:{
        color:'#929292',
    }
})
import React, {Component} from "react";
import { View, Text, Image, Button, TextInput, StyleSheet } from "react-native";

export default class MainComponent extends Component{
    render(){
        return (
            <View style={style.root}>
                <TextInput style={style.textInput} onChangeText={this.changeText}></TextInput>
                {/* 위 TextInput에 글씨를 쓸 때마다 실시간으로 아래 Text에 보여지게 하자 */}
                <Text style={style.plainText}>{this.state.msg}</Text>

                {/* 버튼을 누르면 글씨 바꾸기 */}
                <View style={{marginTop:40}}></View>
                <TextInput style={style.textInput} onChangeText={this.changeText2}></TextInput>
                <Button title="입력완료" onPress={this.clickBtn}></Button>
                <Text style={style.plainText}>{this.state.msg2}</Text>

                {/* 키패드의 확인 버튼을 누르면 글씨 바꾸기 */}
                <View style={{marginTop:40}}></View>
                <TextInput onSubmitEditing={this.submitText} style={style.textInput} multiline={true} numberOfLines={4}></TextInput>
                <Text style={style.plainText}>{this.state.msg3}</Text>

            </View>
        )
    }

    //TextInput에 글씨를 쓸 때마다 실시간으로 반응하기
    //화면 갱신에 영향을 주는 아주 특별한 변수 - state
    //Component 클래스에서 이미 state라는 프로퍼티를 갖고 있고 사용하고 있다.
    //여기서 다시 state라고 쓰면 JS에서는 오버라이드가 없어서 그냥 변수가 새로 만들어지고 덮어쓰기됨. 변수가 하나만 남게 된다.
    state = {
        msg: "_",
        msg2 : "_",
        msg3 : "_"
    }

    //TextInput의 글씨가 변경될 때마다 발동될 콜백 메소드
    //이 메소드의 파라미터로 변경된 글씨가 자동 전달되어 온다.
    changeText = (inputText) => {
        this.setState({msg:inputText})
    }
    

    //2. 버튼을 누르면 그 때 반응하게 하려면?
    //TextInput의 글씨가 변경될 때마다 일반 변수에 저장하고
    str = ""
    changeText2 = (inputText) => {
        this.str = inputText 
    }

    //버튼을 누르면 저장된 값을 불러와 setState
    clickBtn = () => {
        this.setState({msg2:this.str})
    }


    //3.키패드의 확인 버튼에 반응하기
    //onSubmitEditing은 파라미터로 입력된 글씨를 가진 이벤트객체가 입력됨
    submitText = (submitEvent) => {
        let value = submitEvent.nativeEvent.text
        this.setState({msg3 : value})
    }

}

const style = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    },
    textInput:{
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 8,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        maxHeight:150
    },
    plainText: {
        marginTop: 16,
        fontWeight: 'bold',
        padding: 10,
        color: 'black'
    }
})

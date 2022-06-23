import React, {Component} from "react";
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
//내가 만든 컴포넌트 문서
import MyComponent3, {MyComponent4} from "./MyComponent3";

export default class Main extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.text}>Hello World</Text>

                {/* 개발자가 만든 커스텀 Component를 사용해보자 */}
                {/* 재사용이 가능해 편리! */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>
                
                {/* 안에 쓴 글씨를 컴포먼트마다 다르게 하고 싶으면? */}
                {/* props */}
                {/* class에 {this.props.aaa}라는 변수를 만들어서 설계해놓으면 XML에서 attribute명으로 참조해서 값/함수/객체를 전달할 수 있다. */}
                <MyComponent2 aaa="Kim" btnTitle="press me" btnColor="salmon"></MyComponent2>
                {/* <MyComponent2 aaa="Lee"></MyComponent2> */}

                {/* 별도의 문서로 만든 컴포넌트 사용 - export, import 필요 */}
                <MyComponent3 btnTitle="Button from MyComponent3"></MyComponent3>
                {/* 속성으로 값 전달 말고 함수도 전달 가능 */}
                <MyComponent3 btnTitle="Button1" aaa={this.fun1}></MyComponent3>

                {/* 필수 속성에 필요한 값(여기선 Button의 title 속성값)을 안 전달하면 에러지만 */}
                {/* <MyComponent3 aaa={this.fun1}></MyComponent3> */}
                
                {/* 없어도 괜찮은 값은 안 전달해줘도 무관. 그냥 무시된다. */}
                <MyComponent3 btnTitle="Button3"></MyComponent3>

                {/* defaultProps - props에 기본값을 설정하기 위해 정해져 있는 변수 */}
                {/* RN 내부적으로 props 값이 없으면 그 다음으로 defaultProps를 찾는다 */}
                {/* 원래 아래처럼만 쓰면 Button에 title값이 전달되지 않아서 에러지만 defaultProps를 정해주면 해결 */}
                <MyComponent4></MyComponent4>
                <MyComponent4 btnTitle="TITLED"></MyComponent4>

                {/* 컴포넌트끼리의 통신은 기본적으로 불가 */}
                {/* 배치상의 부모 컴포넌트가 자식 컴포넌트들의 통신을 대신 전담 */}
                <ComponentA message="aaa"></ComponentA>
                <ComponentA message={this.state.msg}></ComponentA>
                <ComponentB myOnPress={this.changeText}></ComponentB>

                {/* RN에서 데이터의 전달은 위에서 아래로만 이뤄짐. 데이터 변경의 진원을 찾기가 용이 */}
                {/* 안드로이드라면 뷰 A의 글자가 바뀐 게 부모뷰 때문인지 자식뷰 때문인지 알 수 없음 */}
                {/* RN에서는 컴포넌트 A가 보여주는 글자가 바뀌면 A의 (배치상의) 상위 컴포넌트에서 일어난 일이란 걸 알 수 있음  */}
                {/* 그리고 정보 전달은 바로 아래 컴포넌트로밖에 이뤄질 수 없음. 한단계 한단계씩 건너서  */}
                {/* 이런 게 불편해서 가장 상위에 Provider라는 Global 클래스 같은 존재를 만들어서 사용하는 게 Redux */}

                {/* RN팀에서는 화면에 보이는 컴포넌트들을 커스텀 컴포넌트로 만들어 사용하길 권장 */}
            </View>
        )
    }


    //커스텀 컴포넌트로 전달할 함수
    fun1 = () => {
        Alert.alert("Clicked") 
    }

    state={
        msg:"Hello"
    }

    changeText = () => {
        this.setState({msg:"from Adele"})
    }
}

//사용자 정의 Component 클래스
class MyComponent extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                <Text>I'm Android</Text>
                <Button title="click me"></Button>
            </View>
        )
    }
}

class MyComponent2 extends Component{
    render(){
        return (
            <View style={{margin:8}}>
                {/* 이 클래스를 사용할 때 속성(attribute)명으로 지정한 변수는 
                자동으로 아주 특별한 멤버변수(props)에 자동으로 멤버로 저장되어 있음 */}
                {/* state와 마찬가지로 props도 Component로부터 상속받은 것 */}
                {/* state 객체의 멤버들은 내가 만들어야 하지만, props 객체의 멤버들은 태그문에 적은대로 자동으로 만들어짐 */}
                {/* state는 내가 가진 값, props는 전달받은 값 */}
                {/* state 값은 변경이 가능하지만 props의 멤버들은 const. 전달받은 값은 변경할 수 없다. 변경하고 싶다면 가공해서 state에 다시 저장 */}
                <Text>{this.props.aaa}</Text>
                <Button title={this.props.btnTitle} color={this.props.btnColor}></Button>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root:{flex:1},
    text:{color:'black'},
})
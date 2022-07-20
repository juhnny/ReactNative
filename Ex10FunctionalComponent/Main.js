import React, { Component, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Main extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text>Functional Component</Text>

                {/* Custom Component를 만드는 방법 두가지 */}
                {/* 1. class Component : Component 클래스를 상속해서 만드는 일반적인 컴포넌트 (6번 예제) */}
                {/* 2. functional Component: 익명함수 문법과 비슷한 방식 */}

                {/* 1) class component */}
                {/* stateful component라고도 함 */}
                <MyComponent></MyComponent>

                {/* 2) functional component 함수형 컴포넌트 */}
                {/* stateless component라고도 함 */}
                {MyComponent2()}
                {/* 이렇게 원래 함수 호출문을 써야 하지만 */}
                {/* JS에서는 함수도 객체이므로 new를 써서 생성자함수처럼 쓰는 게 가능 */}
                {/* 그리고 태그문이 곧 new로 동작하므로 */}
                <MyComponent2></MyComponent2>

                {/* 함수형이 클래스형보다 간결한 것이 장점 */}
                {/* 차이점은 함수형은 state, props라는 멤버가 없고 Lifecycle methods도 없음 */}
                {/* 함수형은 화면갱신이 이뤄지는 state가 없으므로 단순하게 반복되는 모양을 보여줄 때 적합함 */}
                {/* props라는 변수는 없지만 그래도 속성을 파라미터로 전달받는 것은 가능 */}
                <MyComponent3 aaa="마이컴포넌트3"></MyComponent3>
                <MyComponent3 aaa="마이컴포넌트3는 props 사용"></MyComponent3>

                <MyComponent4 bbb="마이컴포넌트4"></MyComponent4>
                <MyComponent4 bbb="마이컴포넌트4는 파라미터로 전달됨"></MyComponent4>

                <MyComponent5></MyComponent5>
                <MyComponent5 name="Romeo" message="I die here"></MyComponent5>

                <MyComponent6 name="Juliet" message="I'll survive"></MyComponent6>


                {/* 두 함수형 컴포넌트끼리의 통신 */}
                <ComponentA text={this.state.text}></ComponentA>
                <ComponentB onPress={this.changeText}></ComponentB>

                {/* 예전에는 state가 필요하면 class component로, 필요없으면 functional component를 만들었으나 */}
                {/* 함수형이 더 간결하고 선호도가 높다보니 결국 함수형에도 원한다면 state를 만들 수 있게 되었음 */}
                {/* 또한 라이프사이클과 유사한 동작을 수행하는 것도 가능하게 되었음 */}
                {/* 그래서 지금의 */}
                <MyComponent7></MyComponent7>
            </View>
        )
    }

    state={
        text:"Text to be changed"
    }

    changeText = ()=>{
        this.setState({text:"Text changed"})
    }
    
}

// 1) stateful component
class MyComponent extends Component{
    render(){
        return (
            <View>
                <Text style={style.text}>MyComponent</Text>
            </View>
        )
    }
}

// 2) functional component
// 화살표 함수를 써도 무방
const MyComponent2 = function(){
    return (
        <View>
            <Text style={style.text}>MyComponent2 - functional</Text>
        </View>
    )
}

//3) 속성을 전달받는 stateful component 
//props 사용
class MyComponent3 extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.aaa}</Text>
            </View>
        )
    }
}
// 3.1) 속성을 전달받는 functional component
//props 멤버는 없지만 전달한 값들이 한 개의 객체로 파라미터에 전달됨
const MyComponent4 = (obj)=>{
    return(
        <View>
            <Text>Hello {obj.bbb}</Text>
        </View>
    )
}

//4. 여러 속성을 전달받는 functional component
//이렇게 용도가 props와 비슷하다보니 엄밀히 말해 props는 아니지만 파라미터명도 props라고 쓴다.
const MyComponent5 = (props) => {
    return(
        <View>
            <Text>MyComponent5: {props.name}</Text>
            <Text>MyComponent5: {props.message}</Text>
        </View>
    )
}

//5. 구조분해할당 사용
const MyComponent6 = ({name, message})=>
    <View>
        <Text>MyComponent6: {name}</Text>
        <Text>MyComponent6: {message}</Text>
    </View>
//중괄호 안쓰니 영역 구분이 애매해지네 ㅎㅎ

// 6. 함수형 컴포넌트끼리의 통신
//컴포B의 버튼을 누르면 컴포A의 글자가 바뀌도록
const ComponentA = (props)=>{
    return(
    <View>
        <Text>{props.text}</Text>
    </View>
    )
}

//얘는 구조분해할당 적용
const ComponentB = ({onPress})=>{
    return (
    <View>
        <Button title="Button" onPress={onPress}></Button>
    </View>
    )
}

//7. functional component Hook [useState(), useEffect() 등]
//원래 
const MyComponent7 = ()=>{

    // Hook 함수
    //Lifecycle 메소드 중 가장 중요한 componentDidMount, componentDidUpdate 두 메소드의 역할을 하는 함수
    //화면이 갱신될 때마다 해야 할 작업이 있다면 여기서 하면 된다.
    useEffect( ()=>{alert("useEffect()")} ) 

    //useState()
    //state 역할을 수행하는 변수와 그 값을 갱신하는 함수도 만들어줌
    // 변수 두 개를 만들어주는 문법
    // 이 대괄호 문법은 Hook에서 두루 쓰임
    const [msg, setMsg] = useState("Hello") //msg의 초기값을 입력 
    
    let [age, setAge] = useState(0)

    //이렇게 만들면 전역변수니 주의
    // aaa = "aaa"

    return(
        <View>
            {/* msg는 지역변수이니까 this 없이 참조 */}
            {/* 첫번째 버튼은 화면이 한번만 갱신되니까 useEffect가 한번만 발동, 두번째 버튼은 계속 발동 */}
            <Text>{msg}</Text> 
            <Button title="Button" onPress={()=>{setMsg("Helloooooo")}}></Button>
            <Text>{age}</Text> 
            <Button title="Button" onPress={()=>{setAge( age + 1 )}}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, padding:15},
    text:{margin:8, padding:8}
})
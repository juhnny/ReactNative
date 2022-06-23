import React, {Component} from "react";
import {View, Text, Button, StyleSheet, Alert, Image} from "react-native"

class MainComponent extends Component{
    render(){
        return (
            <View style={style.root}>
                <Text style={style.plainText}>Hello</Text>

                <Button title="Button" onPress={ clickBtn }></Button> 
                {/* onPress의 중괄호 안은 JS 영역이라서 괄호를 쓰면 뷰를 만들 때 바로 실행되므로 주의 */}
                <Button title="Button" onPress={ clickBtn2 }></Button> 
                <Button title="Button" onPress={ clickBtn3 }></Button> 
                {/* 클래스 외부의 함수를 버튼 클릭 콜백함수로 사용해도 동작은 한다.
                하지만, 기본적으로 클래스의 컴포넌트를 외부에서 제어하는 방식은 그리 좋지 않음. 
                (선생님 생각: 재사용성이 떨어지기 때문. 다른 곳에서 클래스를 쓸 때 관련된 함수도 전부 export를 시켜줘야 해서 불편
                객체지향이 반영된 것 같지는 않다.)
                그래서 가급적 클래스의 콜백함수는 멤버함수, 즉 메소드로 만들 것을 권장함 */}
                <Button title="Button" onPress={ this.clickBtn4 }></Button> 
                {/* 멤버를 지칭할 때 반드시 this 키워드 필요 */}

                {/* 버튼 클릭 시 다른 값을 보여주도록 하기 */}
                {/* 정적으로 써둔 텍스트는 변하지 않는다. */}
                <Text style={style.plainText}>{this.text1}나는 안 변해</Text>
                <Button title="Button" onPress={ this.changeText }></Button> 
                <Button title="Button" onPress={ this.changeText2 }></Button> 
                <Text style={style.plainText}>{this.state.msg}</Text>
                <Button title="Button" onPress={ this.changeText3 }></Button> 

                <View style={{marginTop:40}}></View>
                <Button title="Change image" color="green" onPress={ this.changeImage }></Button>
                {/* 이미지 소스로는 경로를 주는 게 아니라 그 이미지로 객체를 만들어서 줘야 한다. require() 메소드를 사용 */}
                {/* <Image style={style.img} source={require('./image/plant.png')}></Image> */}
                {/* 근데 이렇게 require를 정적으로 정해두면 바꿀 수 없음  */}
                <Image style={style.img} source={this.state.imgSrc}></Image>

            </View>
        )
    }

    //콜백함수는 앞으로 무조건 메소드(멤버함수)로 만들 것을 권장
    clickBtn4(){
        Alert.alert("I'm a method")
    }

    //버튼 클릭 시 Text 컴포넌트의 글씨를 변경해보자
    //안드로이드나 웹에서는 그 객체가 가진 글씨를 보여주는 프로퍼티를 직접 바꿨다면
    //여기서는 그 객체가 외부에 있는 글씨 객체를 보여주도록 하고 그 글씨 객체를 바꾼다.
    
    //property
    text1 = "안녕!"

    changeText(){
        //Text 컴포넌트가 보여주고 있는 text1의 글씨를 바꿔보자
        // this.text1 = "Hello!" //error
        //왜? JS의 function은 생성자 함수로서의 기능도 지원하기 때문에 이 안에서 this.을 쓰면 이 function의 멤버로 인식됨
        //하지만 우리는 클래스의 멤버변수 text1이 필요함. 그러면 어떻게?
        super.text1 = "니하오!" //이건 되나? 안되네
    }

    //함수는 함수지만 생성자 함수의 성질을 가지지 않는 화살표함수를 사용
    //이런 이유로 메소드로는 화살표함수를 사용할 것을 강하게(MUST!) 권장
    changeText2 = () => {
        this.text1 = "오하요오"
    }
    //헌데 이것만으로는 변수값이 바뀌어도 화면 갱신이 되지 않음
    //아무 변수나 바뀔 때마다 계속 화면을 바꾸는 건 비효율적
    //특별한 변수를 활용하도록 하고 있다.
    //Component 클래스 안에서 화면 갱신에 영향을 주는 특별한 멤버변수가 이미 존재함 - state
    //state는 컴포넌트 당 하나만 가질 수 있는데 여러 곳에서 텍스트를 바꿔줘야 할 수도 있으니 객체로 만들어 사용
    state = {
        msg : "Zambo",
        imgSrc: require('./image/plant.png')
    }

    changeText3 = () => {
        this.state.msg = "Hello" //하지만 이것만으로는 불충분
        //state 값을 바꿨다고 말해주는 메소드
        //setState()를 하면 값이 바뀌어 있는 멤버는 다 적용됨. 위 "요하요오"까지 적용됨
        this.setState({msg: "Hellooo"})
    }

    //이미지 변경하는 기능 메소드
    changeImage = () => {
        //state에 멤버가 여럿 있더라도 필요한 멤버만 넣어준다. 
        this.setState({imgSrc : require("./image/chair.png")})
    }

}

// 스타일값을 가진 객체들을 모아놓을 곳 - StyleSheet
const style = StyleSheet.create({
    root:{
        flex : 1,
        padding : 16, 
    },
    plainText: {
        marginBottom: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    img:{
        marginTop:8,
        flex: 1,
        width: null,
        resizeMode: 'cover'
    }
})

//버튼 클릭 시 발동하도록 지정한 (콜백)함수 - 메소드(클래스 안에 있는 함수) 아님. 함수 밖이야
function clickBtn(){
    alert('Button Pressed')
}

//익명함수로 콜백함수 만들기
let clickBtn2 = function(){
    Alert.alert('Button Pressed!!')
}

//화살표함수로 콜백함수 만들기(권장)
let clickBtn3 = () => {
    Alert.alert('Button Pressed!!!!')
}

export default MainComponent
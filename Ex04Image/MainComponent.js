import React, {Component} from "react";
import {View, Text, Image, Touchable, TouchableOpacity, Alert, TouchableHighlight, TouchableNativeFeedback, ImageBackground, ScrollView} from "react-native"

export default class MainComponent extends Component{
    render(){
        return(
            //기본적으로 높이는 wrap. 높이 전체를 사용하도록 
            <ScrollView style={{flex:1}} horizontal={false}>
                {/* 배경을 이미지로 넣으려면? 스타일로는 못하고 배경이미지용 뷰가 따로 있음 */}
                {/* ImageBackground를 View 대신 최상위로 써도 된다. 뷰그룹 같은 느낌 */}
                <ImageBackground
                    source={{uri:"https://cdn.pixabay.com/photo/2022/05/31/00/56/sky-7232494_960_720.jpg"}}
                    // 아래서 height이나 flex로 높이를 변경하려고 해봐도 wrap 이상으로 커지지 않는다. 안드로이드의 ScrollView의 특징 때문
                    style = {{width:"90%", height:"100%", flex:1}}
                    resizeMode="stretch">
                    {/* 그림 이미지는 require()함수 이용. 별도의 스타일이 없다면 그림은 원본 사이즈로 만들어짐 */}
                    <Image 
                        source={require('./image/plant.png')} 
                        style={{width:100, height:100}}>
                    </Image>

                    
                    {/* 네트워크상에 있는 이미지 보여주기 - uri라는 이름의 멤버를 가진 객체를 source로 설정*/}
                    {/* 네트워크 이미지는 사이즈 지정이 없으면 보이지 않음! */}
                    <Image 
                        source={ {uri:"https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg"} } 
                        style={{width:100, height:100}}>
                    </Image>

                    {/* 이미지에 클릭이벤트 발생 시 처리 - TouchableXXXXXX */}
                    {/* Image 컴포넌트에는 onPress 같은 리스너 속성이 없음. RN에서는 대부분 리스너 속성이 없음. 버튼 같은 애들을 제외하곤 */}
                    {/* 클릭이벤트에 반응하는 컴포넌트들이 별도로 존재. TouchableXXXXXX 뒤에 오는 게 효과명*/}
                    <TouchableOpacity onPress={this.clickImage} style={{alignItems:"center"}}>
                        <Image  
                            source={require('./image/plant.png')}
                            style={{width:100, height:100}}>
                        </Image>
                    </TouchableOpacity>

                    <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:108}}>
                        <Image  
                            source={require('./image/plant.png')}
                            style={{width:100, height:100}}>
                        </Image>
                    </TouchableHighlight>

                    {/* 안드로이드 네이티브에서와 같은 효과(ripple물결 효과) */}
                    {/* style을 주려면 안에 담긴 View에게 줘야 한다. */}
                    <TouchableNativeFeedback onPress={this.clickImage}>
                        <View  style={{padding:4, width:108, borderWidth:2, borderColor:'lightgrey', borderRadius:8}}>
                            <Text>내 2D 식물</Text>
                            <Image  
                                source={require('./image/plant.png')}
                                style={{width:100, height:100}}>
                            </Image>

                        </View>
                    </TouchableNativeFeedback>

                    <TouchableHighlight onPress={this.changeImage}>
                        <Image
                            style={{width:100, height:100}}
                            source={this.state.imgArr[this.state.imgNum]}>
                        </Image>
                    </TouchableHighlight>
                </ImageBackground>
            </ScrollView>
        )
    }

    //일반(선언적/익명)함수 내에서는 this가 함수 객체를 가리키게 되므로 화살표 함수 사용을 강력히 권장
    clickImage = () => {
        // Alert.alert("Clicked")
    }

    state = {
        //require() 안에는 상수 밖에 못 들어가기 때문에
        //변수에 담은 경로 문자열을 결합 연산자로 조작해서 전달하는 방법은 불가능
        //require()의 결과 객체를 배열에 담아놓고 사용하는 방식으로 해야함
        imgNum : 0, //보여줄 이미지를 가진 배열의 인덱스 번호
        imgArr : [
            require("./image/plant.png"),
            require("./image/nature.png"),
            require("./image/chair.png"),
            {uri:"https://cdn.pixabay.com/photo/2022/06/06/10/55/cat-7245850_960_720.jpg"},
            // 마지막에 쉼표가 들어가있어도 그냥 무시됨
        ]
    }

    changeImage = () => {
        let index = this.state.imgNum + 1
        if(index == this.state.imgArr.length) index = 0
        this.setState({imgNum:index})
    }

}
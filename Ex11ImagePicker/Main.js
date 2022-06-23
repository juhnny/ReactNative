// react native image picker 라이브러리 추가
// 검색해서 github이나 npm 사이트 참고

// install
// 프로젝트폴더> yarn add react-native-image-picker
// 맥에서는
// 프로젝트폴더$ brew install react-native-image-picker //홈브루의 버전에 문제가 있을 수 있으니ㅛㅁㄱ
// 프로젝트폴더$ npm install react-native-image-picker

//확인방법: package.json 문서의 dependencies에 추가되었는지 확인(android 의 Build.gradle과 같은 역할) 

import React, { Component } from "react";
import { Button, Text, View, Image} from "react-native";
//외부라이브러리 기능 사용
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

export default class Main extends Component{

    //카메라/사진 앱으로부터 가져올 파일들도 앱 외부에 있으므로 uri를 사용
    state={
        // 일단 기본 이미지
        img : {uri:"https://cdn.pixabay.com/photo/2022/05/17/15/49/flower-7203048_960_720.jpg"}
    }

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Button title="start 카메라 app" onPress={this.openCamera}></Button>   
                    <Button title="start 사진 app" onPress={this.openPhoto}></Button>   
                </View>
                <Text style={{margin:8, backgroundColor:'lightgrey'}}>{this.state.img.uri}</Text>
                <Image style={{marginTop:1, flex:1, resizeMode:'stretch'}} source={this.state.img}></Image>
            </View>
        )
    }

    //카메라앱을 실행시키는 콜백함수
    openCamera = () => {
        //옵션 객체
        const options = {
            mediaType:'photo',   //photo or video
            cameraType: 'back',  //from or back
            saveToPhotos : true, //캡쳐한 사진을 디바이스에 저장
            quality:1.0,         //사진화질 0 ~ 1.0
            VideoQuality: 'high' //비디오 화질
        }

        //image picker 라이브러리의 카메라앱 실행함수 호출
        launchCamera(options, (response) => {
            //파라미터로 전달된 응답객체로부터 사진 촬영 결과 받기
            if(response.didCancel){
                alert("사용자가 사진촬영을 취소하였습니다.")
            } else if(response.errorMessage){
                alert("에러 발생 -", response,errorMessage)
            }else{
                //이곳에 왔다면 사진촬영이 잘 된 것
                //선택된 이미지의 uri 경로를 얻어오기
                const source = {uri: response.assets[0].uri} //카메라앱은 어차피 사진 한장만 사용..
                //여러 장 선택하면 여러 장 오고..

                //선택된 사진의 경로를 이미지컴포넌트가 보여주는 state 안에 저장
                this.setState({img:source})
            }
        })
    }

    //사진앱을 실행시키는 콜백함수
    openPhoto = () => {
        const options = {
            mediaType : "mixed", //photo, video, mixed
            selectionLimit:5,
        }

        //image picker 라이브러리의 사진앱 실행 함수 호출
        launchImageLibrary(options, (response)=>{
            if(response.didCancel) alert("선택 취소")
            else if(response.errorMessage) alert("에러 발생 -", response.errorMessage)
            else {
                //사진 선택에 성공했단는 것
                //선택된 사진이미지의 경로를 기반으로 객체 만들기
                const source = {uri:response.assets[0].uri}
                //이미지 컴포넌트가 보여주는 state값에 설정
                this.setState({img:source})
            }
        })
    }

}
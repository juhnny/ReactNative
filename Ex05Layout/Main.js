import React, {Component} from "react";
import { View, Image } from "react-native";

export default class Main extends Component{
    render(){
        return (
            //RN은 1개의 컴포넌트만 리턴할 수 있음. 여러 컴포넌트를 배치하려면 뷰 아래 자식으로 배치
            //1. 3개의 자식 뷰 배치
            // <View>
            //     {/* 뷰의 사이즈는 숫자(dp:density-independent pixel)나 %를 사용하거나, flex를 사용할 수 있음 */}
            //     {/* <View style={{width:50, height:50, backgroundColor:"red"}}></View>
            //     <View style={{width:50, height:100, backgroundColor:"#00FF0055"}}></View>
            //     <View style={{width:"70%", height:"10%", backgroundColor:"blue"}}></View> */}
            // </View>

            // 2. flex 수직배치 연습
            // 최상위뷰의 높이는 '100%'를 써도 되지만 RN에서는 사이즈를 정할 때 flex를 권장
            // <View style={{flex:1}}>
            //     {/* flex(grow)는 부모의 배치 방향이 column이면 높이, row면 너비 */}
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{height:100, backgroundColor:"orange"}}></View>
            //     <View style={{flex:1, backgroundColor:"blue"}}></View>
            // </View>

            // 3. 수평배치 연습
            // <View style={{flexDirection:'row', flex:1}}>
            //     {/* flex(grow)는 부모의 배치 방향이 column이면 높이, row면 너비 */}
            //     <View style={{flex:1, backgroundColor:"red"}}></View>
            //     <View style={{flex:1, backgroundColor:"orange"}}></View>
            //     <View style={{flex:1, backgroundColor:"blue"}}></View>
            // </View>

            //4. 여러 형태의 배치 연습
            //justifyContent와 alignItems 연습
            //자식뷰의 크기가 정해져있으면 stretch보다 우선된다.
            //자식뷰에게 alignSelf 속성을 주면 혼자 다르게 정렬할 수 있다.
            // <View style={{flex:1, flexDirection:'row', justifyContent:"center", alignItems:'stretch'}}>
            //     <View style={{width:50, height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'orange'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'green', alignSelf:'flex-end'}}></View>
            //     <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
            // </View>

            //중첩구조의 배치 - 수직, 수평 혼재
            <View style={{flex:1, flexDirection:'column'}}>
                <View style={{flex:1, backgroundColor:'red', flexDirection:'row'}}>
                    <View style={{flex:1, backgroundColor:'yellow'}}></View>
                    <View style={{flex:3, backgroundColor:'green'}}>
                        <View style={{flex:1, backgroundColor:'blue'}}></View>
                        <View style={{flex:1, backgroundColor:'navy'}}></View>
                    </View>
                </View>            
                <View style={{flex:1, backgroundColor:'orange'}}>
                    <View style={{flex:1, backgroundColor:'salmon'}}>
                        {/* 절대위치를 이요해 뷰 겹치게 배치 */}
                        {/* absolute의 원점을 document가 아닌 부모 요소를 기준으로 하려면 부모가 static이 아니어야 한다. */}
                        {/* 부모가 flex인 자식뷰들은 자동 relative이다. 원래 있어야 할 위치를 기준으로 left, top이 결정됨 */}
                        <View style={{width:50, height:50, backgroundColor:'white'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'grey', left:20, top:20}}></View>
                        <View style={{width:50, height:50, backgroundColor:'black', left:20, top:20, position:'absolute'}}></View>
                        <View style={{width:50, height:50, backgroundColor:'aqua', left:90, position:'absolute', borderRadius:50}}></View>
                    </View>
                    <View style={{flex:1, backgroundColor:'purple'}}></View>
                </View>
            </View>
        )
    }
}
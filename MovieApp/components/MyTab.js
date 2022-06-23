//탭 버튼 하나의 모양을 구현한 컴포넌트
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyTab = (props) => {

    //선택된 탭에 따라 글씨 색상 변경되도록
    const labelColor = props.selected? '#292929' : '#929292'
    //indicator 색상은 그냥 글씨 따라가도록
    tabStyle.borderColor = labelColor

    return(
        //탭을 누르는 효과가 필요 
        <TouchableOpacity style={tabStyle} onPress={props.myOnPress}>
            <Text style={{color:labelColor, }}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default MyTab

const tabStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:"#929292",
    paddingVertical:8,
}

const style = StyleSheet.create({

})
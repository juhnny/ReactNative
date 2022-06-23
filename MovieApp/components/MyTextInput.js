import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const MyTextInput = (props) => { //props로 들어오는 값들은 사용하는 곳에서 지정한 값
    return(
        <View style={style.container}>
            <TextInput 
                style={style.textInput} 
                onChangeText={props.onChangeText} //TextInput에 원래 있는 속성

                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                // 속성 예시
                selectionColor="pink"
                // placeholderTextColor={'orange'}
                autoCapitalize="none"
                autoCorrect={false}
            ></TextInput>
        </View>
    )
}

export default MyTextInput

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:40,
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'lightgrey',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginVertical:8,
        marginHorizontal:8
    },
    textInput:{
        flex:1,
        color:"#292929",
    }
})
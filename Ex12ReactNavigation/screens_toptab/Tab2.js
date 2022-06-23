import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab2 = () => {
    return(
        <View style={style.root}>
            <Text style={style.text}>Tab 2</Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'black'
    }
})

export default Tab2
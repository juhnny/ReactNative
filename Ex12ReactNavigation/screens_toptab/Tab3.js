import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab3 = () => {
    return(
        <View style={style.root}>
            <Text style={style.text}>Tab 3</Text>
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

export default Tab3
import React from "react";
import { Component } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default class Main extends Component{

    state = {
        msg:"니하오",
        imgSrc:require("./image/chair.png"),
    }
    render(){
        return(
            <View style={style.root}>
                <Text>Hello!</Text>
                <Button title="Btn1" onPress={clickBtn}></Button>
                <Button title="Btn2" onPress={function(){
                    Alert.alert("clickBtn2")
                }}></Button>
                <Button title="Btn3" onPress={clickBtn3}></Button>
                <Button title="Btn4" onPress={clickBtn4}></Button>
                <Button title="Btn5" onPress={this.clickBtn5}></Button>
                <Text>{this.text1}</Text>
                <Button title="Btn6" onPress={this.changeText}></Button>
                <Text>{this.state.msg}</Text>
                <Button title="Btn7" onPress={this.changeText2}></Button>
                <Image 
                    source={this.state.imgSrc}
                    style={{
                        width:200,
                        height:200,
                    }}></Image>
                <Button title="Btn8" onPress={this.changeImage}></Button>

            </View>
        )
    }

    clickBtn5 = () => {
        Alert.alert("Btn5")
    }

    text1 = "안녕"
    
    changeText = () => {
        this.text1 = "What?"
    }

    changeText2 = () => {
        this.setState({msg:"호호호"})
    }

    changeImage = () => {
        this.setState({imgSrc:require("./image/plant.png")})
    }
    

}

function clickBtn(){
    Alert.alert('hey!')
}

let clickBtn3 = function(){
    Alert.alert("Btn3")
}

let clickBtn4 = () => {
    Alert.alert("Btn4")
}

const style = StyleSheet.create({
    root:{
        backgroundColor:'skyblue',
    }
})
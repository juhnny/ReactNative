import React, { Component } from "react";
import { Button, Text, View } from "react-native";

export default class NetworkEx extends Component{

    state = {
        data:{msg:"apple"},
        msg:"hahaha"
    }

    getData = function(){
        const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=100";
        fetch(bigUrl)
        .then((response) => {
            console.log("response", response)
            return response.json()
        })
        .then( json => {
            console.log(json)
            console.log(json.data.movies)
            console.log(json.data.movies[0].id)
        })
        .catch((error) => console.log("error", error))   
    }

    render(){
        return(
            <View>
                {/* <Text>{this.state.data.msg}</Text> */}
                <Button title="Start loading" onPress={this.getData}></Button>
            </View>
        )
    }
}
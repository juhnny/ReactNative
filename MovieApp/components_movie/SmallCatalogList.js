import React, { Component } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class SmallCatalogList extends Component{

    state={
        movies:['a', 'b', 'c'],

    }
    render(){
        return(
            <View style={style.container}>
                <Text style={style.catalogTitle}>
                    {this.props.title}
                </Text>
                <FlatList
                    data={this.state.movies}
                    renderItem={ ({item, index}) => {
                        return(
                            <TouchableOpacity 
                                style={{paddingRight:4}}
                                activeOpacity={0.9}
                                //Stack.Screen만이 navigation의 기능을 쓸 수 있다. 여기서는 MovieList.js
                                //그 안에 있는 SmallCatalogList는 그 기능을 Screen으로부터 전달받아야 한다.
                                onPress={ () => this.props.onPress(item.id) }>
                                <Image 
                                    source={ {uri:item.large_cover_image} }
                                    style={{width:150, height:240,}} ></Image>
                            </TouchableOpacity>
                        )
                    } }
                    horizontal={true}>
                        
                </FlatList>
            </View>
        )
    }

    componentDidMount(){
        //혹시 url 전달이 안되었을까봐
        if(this.props.url) this.loadData()
    }

    loadData = () => {
        // fetch(this.props.url)
        // .then( (response) => response.text() )
        // .then( (responseText) => alert(responseText) )
        fetch(this.props.url)
        .then(response => response.json())
        .then(json => this.setState({movies:json.data.movies}))
        .catch( error => alert(error) )
    }
}

const style = StyleSheet.create({
    container:{
        marginTop:8,
        marginBottom:8,
    },
    catalogTitle:{
        fontSize:16,
        fontWeight:'bold',
        padding:8,
    }
})
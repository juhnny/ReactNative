import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MovieList from "../screens_movie/MovieList";
import MovieDetail from "../screens_movie/MovieDetail";

const Stack = createStackNavigator()

const MovieNav = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MovieList" component={MovieList}></Stack.Screen>
            <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default MovieNav
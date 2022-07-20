//MaterialTopTab Navigator를 다루는 실습
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import Tab1 from "./screens_toptab/Tab1";
import Tab2 from "./screens_toptab/Tab2";
import Tab3 from "./screens_toptab/Tab3";

export default MainMaterialTopTap = () => {
    const Tap = createMaterialTopTabNavigator()

    return(
        <NavigationContainer>
            <Tap.Navigator
                tabBarPosition='bottom'
                // initialRouteName="TAB2"
                screenOptions={{
                    // swipeEnabled:false
                }}
            >
                <Tap.Screen name="TAB1" component={Tab1}></Tap.Screen>
                <Tap.Screen name="TAB2" component={Tab2}></Tap.Screen>
                <Tap.Screen name="TAB3" component={Tab3}></Tap.Screen>
            </Tap.Navigator>
        </NavigationContainer>    
    )
}
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import MovieNav from "./MovieNav";

const Drawer = createDrawerNavigator()

const MainDrawerNav = () => {
    return (
        //DrawerNavigator도 StackNavigator도 제목줄을 갖고 있다. 지금 제목줄이 두개인 상황
        //StackNavigator의 업버튼(뒤로가기) 기능이 유용하니 DrawerNavigator의 제목줄은 없애자.
        <Drawer.Navigator
            screenOptions={{headerShown:false}}>
            <Drawer.Screen name="MovieNav" component={MovieNav}></Drawer.Screen>

        </Drawer.Navigator>
    )
}

export default MainDrawerNav
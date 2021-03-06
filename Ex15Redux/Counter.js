import React, { useState } from "react";
import { Button, Text, View } from "react-native";

function Counter(){
    //state: counter value
    const [counter, setCounter2] = useState(100)

    //Action: code that causes an update to the state when something happens
    const increment = () => {
        setCounter2(prevCounter => prevCounter + 1)
    }

    // View: the UI definition
    return(
        <View>
            <Text>{counter}</Text>
            <Button title="plus" onPress={increment}></Button>
        </View>
    )///
}

export default Counter
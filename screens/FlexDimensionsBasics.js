import { View } from "native-base";
import React from "react";

const FlexDimensionsBasics = () =>{
    return (
        <View style={{flex:1}}>
            <View style={{flex: 1, backgorundColor:"powderblue"}}/>
            <View style={{flex: 2, backgorundColor:"skyblue"}}/>
            <View style={{flex: 3, backgorundColor:"steelblue"}}/>
        </View>
    );
};

export default FlexDimensionsBasics;
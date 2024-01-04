import React from "react";
import { View } from "react-native";

 const ItemSep =({height,width})=>{
    return <View style={{height,width}}/>
}
ItemSep.defaultProps={
    height:0,
    width:0,
}


export default ItemSep
import React from "react";
import { Text, TextInput, View } from "react-native";
import BackIcon from '../../assets/icons/arrow-left.svg'

export default function SearchScreen({navigation}){
    return(
        <View style={{flex:1}}>   
            <BackIcon width={35} height={35} fill={"#0C1A1A"} style={{margin:7}} onPress={ () => {navigation.goBack()}}/>   
            <View style={{ flex:1,marginTop:'50%' , alignItems:'center'}}>          
                <Text style={{fontSize:40, color:'#0C1A1A'}}>Search Screen</Text>
                <TextInput placeholder="Find Something..." style={{ paddingHorizontal:30, width:'80%' ,fontSize:17 ,marginTop:20, borderRadius:30  ,backgroundColor:'#6ACFC7', color:'#0C1A1A'}} placeholderTextColor={'#0C1A1A'} />
            </View>
        </View>
    );
}
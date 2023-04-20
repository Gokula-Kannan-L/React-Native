import React from "react";
import { FlatList, SafeAreaView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {Item} from '../Product';


export default function Accessories(){
    const {accessories} = useSelector( state => state.userReducer);
    const dispatch = useDispatch();

    const renderItem= ({item})=>(
        <Item id={item.id} image={item.image} title={item.title} price={item.price} description={item.description} rating={item.rating} dispatch={dispatch}/>
    );

    return(
            <SafeAreaView style={{flex:1, backgroundColor:'#0C1A1A'}}>
                <FlatList data={accessories} renderItem={renderItem} keyExtractor={ item => item.id} showsHorizontalScrollIndicator={false}/>
            </SafeAreaView>
    );
}

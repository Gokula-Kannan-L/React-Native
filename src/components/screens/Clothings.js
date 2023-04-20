import React from "react";
import { FlatList, ScrollView, View, SafeAreaView} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {Item} from '../Product';

export default function Clothings(){
    const {menclothings} =useSelector( state => state.userReducer);
    const {womenclothings} =useSelector( state => state.userReducer);
    const dispatch = useDispatch();

    const renderItem= ({item})=>(
        <Item id={item.id} image={item.image} title={item.title} price={item.price} description={item.description} rating={item.rating} dispatch={dispatch}/>
    );

    return(
            <ScrollView style={{flex:1,backgroundColor:'#283333'}}>
            <FlatList data={womenclothings} renderItem={renderItem} horizontal={true} keyExtractor={ item => item.id} showsHorizontalScrollIndicator={false}  />
            <FlatList data={menclothings} renderItem={renderItem} horizontal={true} keyExtractor={ item => item.id} style={{backgroundColor:'#0C1A1A'}} />
            </ScrollView>
    );
}


import React from "react";
import { FlatList,View} from "react-native";
import { useDispatch, useSelector} from "react-redux";
import {Item} from '../Product';

export default function Electronics(){
    const {electronics} = useSelector( state => state.userReducer);
    const dispatch = useDispatch();
    

    const renderItem= ({item})=>(
        <Item id={item.id} image={item.image} title={item.title} price={item.price} description={item.description} rating={item.rating} dispatch={dispatch} />
    );
    
    return(       
            <View style={{flex:1,backgroundColor:'#0C1A1A'}}>
                <FlatList data={electronics} renderItem={renderItem} horizontal={true} keyExtractor={ item => item.id} showsHorizontalScrollIndicator={false} />  
            </View>
    );
}


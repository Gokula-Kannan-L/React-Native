import React from "react";
import { Text, View, FlatList, Image, Button,TouchableOpacity, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, Increment, Decrement } from "../../redux/actions";
import Icon from 'react-native-vector-icons/FontAwesome5'
import GenerateBill from "../GenerateBill";

export default function Cart(){
    const dispatch = useDispatch();
    const {cartItems} = useSelector( state => state.userReducer);
    const [visible, setVisible] = React.useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    
    const renderItem = ({item, index}) => (
        <View style={styles.container} key={index}>
            {item.image !== ' ' ? <Image source={{uri: item.image}} style={styles.image} alt='Clothings' onError={() => Alert('clothings')}/> : <Text>hi</Text>}
            <View style={{ width:170, height:210, position:'relative'}}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.price}>Price : Rs.{item.price*15}</Text>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Text style={styles.quantity}>Quantity : </Text>
                    <TouchableOpacity style={styles.countButton} onPress={() => {dispatch(Decrement(item.id))}}><Icon name="minus" size={15} color={'white'} /></TouchableOpacity>
                        <Text style={styles.quantity}> {item.quantity} </Text>
                    <TouchableOpacity style={styles.countButton} onPress={() => {dispatch(Increment(item.id))}} ><Icon name="plus" size={15} color={'white'} /></TouchableOpacity>
                </View>
                <Text style={styles.price}>Total : {item.total.toFixed(2)}</Text>
                <View style={styles.buttonContainer}><Button title="REMOVE" color={'red'} onPress={() => {dispatch(removeFromCart(item.id))}}/></View>
            </View>
        </View>
    );
    return(
        <View style={{height:'100%', backgroundColor:'#92a8a6'}}>
            {cartItems == 0 ? <Text style={styles.emptyCart}>Cart Is Empty</Text> :  
            <>
            <FlatList data={cartItems} renderItem={renderItem} horizontal={false} numColumns={2} keyExtractor={ item => item.id} />
            <View style={styles.buyAllContainer}><Button title="PROCEED TO BUY" onPress={toggleOverlay} color={'#0C1A1A'}/></View>
            <GenerateBill visible={visible} toggleOverlay={toggleOverlay}/>
            </>
            }
        </View> 
       );
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        padding:10,
        width:185,
        height:330,
        backgroundColor:'#fff' 
    },
    image:{
        padding:20,
        height:100,
        resizeMode:'contain'
    },
    title:{
        fontSize:15, 
        color:'black', 
        fontWeight:500, 
        marginTop:5,
    },
    price:{
        marginTop:5, 
        fontSize:20, 
        color:'black',
    },
    quantity:{
        marginTop:5,
        fontSize:20, 
        color:'black',
    },
    buttonContainer:{
        position:'absolute', 
        bottom:0,
        left:45
    },
    buyAllContainer:{
        display:'flex',
        justifyContent: 'flex-end',
        padding:5
    },
    tableContainer:{
        width:350
    },
    tableHeader:{
        color:'black',
        fontWeight:500,
        fontSize:25
    },
    emptyCart:{
        fontSize:30,
        width:'100%',
        height:110,
        marginHorizontal:110,
        marginVertical:'80%',
        color:'white'
    },
    countButton:{
        backgroundColor:'#db1641', 
        width:13, 
        height: 15, 
        marginTop:13.
    }
})
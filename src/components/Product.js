import React from "react";
import { View, Image, Pressable, Text, StyleSheet, TouchableOpacity, Modal, ScrollView} from "react-native";
import { addToCart } from "../redux/actions";
import CloseIcon from '../assets/icons/close-circle-outline.svg';

export const Item =({id, image, title, price, description, rating, dispatch})=>{
    const [visible, setVisible] = React.useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleOverlay} >
                <Image source={{uri: image}} style={styles.image} alt='Clothings' onError={() => alert('clothings')}/> 
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={3}>{title}</Text>
            <Text style={styles.price}>Price : Rs.{price*15}</Text>
            <Text style={styles.description} numberOfLines={4}>Description : {description}</Text>
            <Pressable style={styles.button} onPress={() => dispatch(addToCart({id, image, title, price, description}))}>
                <Text style={styles.buttonText}> ADD TO CART</Text>
            </Pressable>
            <Modal visible={visible} onRequestClose={toggleOverlay} animationType="fade">
                <View style={styles.overlayContainer}>
                    <CloseIcon width={35} height={35} fill={"#0C1A1A"} onPress={toggleOverlay}/>
                    <Image source={{uri:image}} style={styles.overlayImage} alt='Product' onError={() => alert('products')}/>
                    <ScrollView decelerationRate={0.5} style={{backgroundColor:'#0C1A1A', padding:5}}>
                        <Text style={styles.overlayTitle}>{title}</Text>
                        <Text style={styles.overlayDescription} >{description}</Text>
                        <Text style={styles.overlayPrice}>Price : Rs.{price*15}</Text>
                        <Text style={styles.rating}>Rating : {rating.rate} </Text>
                        <Text style={styles.overlayBuys}>Buys : {rating.count}</Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin:50,
        padding:30, 
        width:300,
        height:550, 
        backgroundColor:"#fff"
    },
    image:{
        padding:20,
        height:200,
        resizeMode:'contain',
    },
    title:{
        fontSize:20, 
        color:'#0C1A1A', 
        fontWeight:500, 
        marginTop:10,
    },
    price:{
        marginTop:10, 
        fontSize:20, 
        fontWeight:500,
        color:'#0C1A1A',
    },
    description:{
        marginTop:10, 
        marginBottom:15, 
        fontSize:16,
    },
    buttonText:{
        fontSize:16, 
        color:'#FFF',
        fontWeight:400,
    },
    button:{
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#0C1A1A',  
        padding:5,
        marginTop:15,
        position:"absolute",
        bottom:35,
        width:"100%",
        left:30
    },
    overlayContainer:{
        backgroundColor:"white",
        padding:20,
        height:'100%',
    },
    overlayImage:{
        height:200,
        resizeMode:'contain',
        marginBottom:10
    },
    overlayDescription:{
        margin:10,
        fontSize:18,
        color:'#FFF',
    },
    rating:{
        color:'#FFF',
        fontSize:20, 
        fontWeight:500,
        padding:10,
    },
    overlayPrice:{
        paddingLeft:10,
        fontSize:20, 
        fontWeight:500,
        color:'#FFF',
    },
    overlayBuys:{
        paddingLeft:10,
        paddingBottom:10,
        fontSize:20, 
        fontWeight:500,
        color:"#FFF",
    },
    overlayTitle:{
        padding:10,
        fontSize:20, 
        fontWeight:500,
        color:"#6ACFC7",
    }
})
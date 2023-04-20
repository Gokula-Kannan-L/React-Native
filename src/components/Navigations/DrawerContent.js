import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { AuthContext } from "../../context/AuthContext";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeIcon from '../../assets/icons/home-circle.svg';
import LogOutIcon from '../../assets/icons/logout.svg';


export default function DrawerContent(props){

    const {userToken, userEmail}=React.useContext(AuthContext);
    const {logOut} =  React.useContext(AuthContext);

    return(
            <DrawerContentScrollView {...props}>
                <View style={styles.profile}>
                    <Icon name="user-tie" size={150} style={{margin:20}} color={'#6ACFC7'}/>
                        {userToken ? <Text style={styles.userTitle}>Hi, {userEmail} !</Text> : <Text style={styles.userTitle}>Hi, Guest !</Text>}
                </View>
                <View style={styles.drawerItem}>
                    {userToken ?
                        <DrawerItem labelStyle={styles.button} label= 'Logout'  onPress={ () => {logOut()} } icon={ () => (<LogOutIcon fill={'#0a0007'} width={35} height={35} />)}/>
                        :
                        <DrawerItem labelStyle={styles.button} label= 'Go back to Login'  onPress={ () => {logOut()} } icon={ () => (<HomeIcon fill={'#0a0007'} width={35} height={35} />)}/>
                    }
                </View>
            </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    profile:{
        margin:-5,
        backgroundColor:'#0C1A1A', 
        justifyContent:'center',
        alignItems:'center',
    },
    userTitle:{
        color:'#6ACFC7',
        fontSize:20,
        marginBottom:20,
    },
    button:{
        fontSize:20, 
        color:'#0a0007',
    },
    drawerItem:{
        height:520,
        flex:1,
        justifyContent:"flex-end"
    }
})
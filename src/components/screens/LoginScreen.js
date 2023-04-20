import React from "react";
import { StyleSheet, Text, TextInput, View, Pressable, ImageBackground } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function LoginScreen(){

    const [email, setEmail]= React.useState('');
    const [password, setPassword]=React.useState('');
    const [checkEmail, setCheckEmail]=React.useState(false);

    const {logIn, GuestLogin, error, setError} =  React.useContext(AuthContext);

    const handleCheck= (text) =>{
        let regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8})])?/g;
        setEmail(text); 
        setError(false);
        if(regex.test(text) ){
            setCheckEmail(false);
        }else{
            setCheckEmail(true);
        }
    }
    return(
            <ImageBackground source={require('../../assets/bokeh-background.jpg')} resizeMode="cover" style={{flex:1}}>
            <View style={styles.container}>
                <Text style={{color:'#0C1A1A', fontSize:35, marginBottom:10}}>Welcome !</Text>
                <Text style={{color:'#0C1A1A', fontSize:30, marginBottom:30}}>Enter Email & Password</Text>

                <TextInput placeholder="Email" value={email} required={true} onChangeText={text => handleCheck(text)} style={styles.input} />
                { checkEmail && <Text style={{color:'red', fontSize:20, marginBottom:10}}> Invalid Email Format</Text> }
                
                <TextInput placeholder="Password" value={password} onChangeText={ setPassword } secureTextEntry={true} style={styles.input}/>
                {error && <Text style={{color:'red', fontSize:16, marginBottom:10}} >Please Enter Valid Username & Password</Text>}           
                
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={() => {logIn({email, password})}}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => {GuestLogin()}}>
                        <Text style={styles.buttonText}>SKIP</Text>
                    </Pressable>
                </View>
            </View>
            </ImageBackground>   
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        opacity:5,
    },
    input:{
        paddingHorizontal:20,
        backgroundColor:'#a9d3eb', 
        color:'black', 
        width:'80%', 
        borderRadius:20, 
        marginBottom:10, 
        fontSize:16,
    },
    button:{
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#0C1A1A', 
        width:'70%', 
        padding:5,
        marginTop:15,
    },
    buttonText:{
        fontSize:20, 
        color:'white',
    },
    buttonContainer:{
        width:'60%',
        alignItems:'center',
        justifyContent:'center',
    }  
})
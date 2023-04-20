import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [userToken, setUserToken]=React.useState(null);
    const [isLoading, setIsLoading]=React.useState(false);
    const [guestUser, setGuestUser]=React.useState(false);
    const [error, setError]=React.useState(false);
    const userEmail = 'test@gmail.com';

    const logIn = (props) =>{
        
        if(props.email=== 'test@gmail.com' && props.password === '123'){
            setIsLoading(true);
            setError(false);    
            AsyncStorage.setItem('UserSession','richie')
            setUserToken('richie');
            alert('Welcome Richie!');
            setIsLoading(false);
        }
        
        else{
            setIsLoading(true);
            setError(true);
            setUserToken(null);
            setIsLoading(false);
        }
    }

    const GuestLogin = () =>{
        setIsLoading(true);
        setGuestUser(true)
        setIsLoading(false);
    }

    const logOut = () =>{
        setUserToken(null);
        AsyncStorage.removeItem('UserSession');
        setIsLoading(false);
        setGuestUser(false);
    }

    const isLoggedIn = async() =>{

        try{
        setIsLoading(true);   
        let userToken = await AsyncStorage.getItem('UserSession');
        setUserToken(userToken);
        setIsLoading(false);

        }catch(e){
            alert('LogIn Error ' + e);
        }
    }

    React.useEffect(
        () => {
            isLoggedIn();

        }, []
    );

   return(
        <AuthContext.Provider value={{logIn, logOut, isLoading, userToken, userEmail, GuestLogin, guestUser, error, setError}}>
            {children}
        </AuthContext.Provider>
    );
}
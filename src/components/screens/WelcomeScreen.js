import React from "react";
import { View, ActivityIndicator } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./LoginScreen";
import { AuthContext } from "../../context/AuthContext";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import DrawerContent from "../Navigations/DrawerContent";
import { useNavigation } from "@react-navigation/native";
import SearchIcon from '../../assets/icons/card-search.svg'
import { getElectronics, getAccessories, getMenClothings, getWomenClothings } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Drawer = createDrawerNavigator();

function NavigateToSearch(){
    const navigation = useNavigation();
    return(
        <View>
            <SearchIcon width={35} height={35} fill={'#fff'} style={{marginRight:20}} onPress={ () => navigation.navigate('Search')} />
        </View>
    );
}

export default function WelcomeScreen(props){

    const dispatch =useDispatch();
    dispatch(getElectronics());
    dispatch(getAccessories());
    dispatch(getMenClothings());
    dispatch(getWomenClothings());

    const {userToken, guestUser, isLoading} = React.useContext(AuthContext);
    
    if(isLoading){
		return(
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
				<ActivityIndicator size={'large'}/>
			</View>
		);
	}
 
    return(
            <>
            {!userToken && !guestUser? 
                <LoginScreen/>
                :
                <Drawer.Navigator useLegacyImplementation drawerContent={ props => <DrawerContent {...props}/>} screenOptions={{headerTitle:'E-commerce', headerTitleAlign:'center', headerStyle:{backgroundColor:'#6ACFC7'}, headerTintColor:'#0C1A1A', headerRight: props => <NavigateToSearch/> }}>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Search" component={SearchScreen} />
                </Drawer.Navigator>
            }
            </>
    )
}
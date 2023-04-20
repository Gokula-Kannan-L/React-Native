import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Electronics from "./Electronics";
import Clothings from "./Clothings";
import Accessories from "./Accessories";
import Cart from "./AddToCart";
import { useSelector} from "react-redux";
import ElectronicsIcon from '../../assets/icons/home-lightning-bolt.svg';
import DressIcon from '../../assets/icons/tshirt-v.svg';
import AccessoriesIcon from '../../assets/icons/diamond-stone.svg';
import CartIcon from '../../assets/icons/cart.svg';

const Tab = createBottomTabNavigator();

export default function HomeScreen(){

        const {totalItems} = useSelector( state => state.userReducer);

    return( 
        <Tab.Navigator screenOptions={{headerShown:false, tabBarLabelStyle:{fontWeight:600, marginBottom:7} ,tabBarStyle:{height:60, backgroundColor:'#6ACFC7'}, tabBarActiveTintColor:'#FFF', tabBarInactiveTintColor:'#0C1A1A' }}>
            <Tab.Screen name='Electronics' component={Electronics} options={{ tabBarIcon: ({color}) =>(<ElectronicsIcon width={35} height={35} fill={color} />) }}/>
            <Tab.Screen name='Clothings' component={Clothings} options={{tabBarIcon: ({color}) =>(<DressIcon width={35} height={35} fill={color} />) }} />
            <Tab.Screen name='Accessories' component={Accessories} options={{tabBarIcon: ({color}) =>(<AccessoriesIcon width={35} height={35} fill={color}/>) }}/>
            <Tab.Screen name='Cart' component={Cart} options={{tabBarIcon: ({color}) =>(<CartIcon width={35} height={35} fill={color} />) , tabBarBadge:totalItems }} />
        </Tab.Navigator>
    );
}
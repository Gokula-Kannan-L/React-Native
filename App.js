import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import WelcomeScreen from './src/components/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
   
export default function App(){
	return(
		<Provider store={Store}>
			<AuthProvider>
				<NavigationContainer>
					<WelcomeScreen/>
				</NavigationContainer>
			</AuthProvider>
		</Provider>
	)
}
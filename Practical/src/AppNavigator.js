import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Splash from './Screens/Splash';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import WishList from './Screens/WishList';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator >
       <Stack.Screen name="Splash"  component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="Login"  component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="SignUp"  component={SignUp} options={{headerShown: false}}/>
      <Stack.Screen name="Home"  component={Home} />
      <Stack.Screen name="WishList"  component={WishList} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default AppNavigator;

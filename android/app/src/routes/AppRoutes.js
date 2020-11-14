import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
// import Home from '../components/Home'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../components/signup'
import LogIn from '../components/login';
import ForgetPassword from '../components/ForgetPassword'





const Stack = createStackNavigator();

 function MyStack() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" headerMode="none">
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default MyStack;
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/login/login';
import SignUp from './src/Screens/signUP/signUP';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home/home';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          options={{headerShown: false}}
          name="LogIn"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

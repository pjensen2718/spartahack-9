import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Testmain from './pages/testmain.js';
import Assets from './pages/assets.js';
import Debt from './pages/debt.js';
import ProfileScreen from './pages/profile.js';
import Dashboard from './pages/dashboard.js';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Testmain" screenOptions={{animationEnabled: false}} >
      <Stack.Screen name="Testmain" component={Testmain} options={{headerStyle: {shadowOpacity: 0, elevation:0,}}}/>
      <Stack.Screen name="Assets" component={Assets} options={{headerStyle: {shadowOpacity: 0, elevation:0,}}}/>
      <Stack.Screen name="Debt" component={Debt} options={{headerStyle: {shadowOpacity: 0, elevation:0,}}}/>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerStyle: {shadowOpacity: 0, elevation:0,}}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{headerStyle: {shadowOpacity: 0, elevation:0,}}}/>
    </Stack.Navigator>
  );
}

export default AppStack;
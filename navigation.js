import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Import Pages
import Dashboard from './pages/dashboard.js';
import Debt from './pages/debt.js';
import Profile from './pages/profile.js';
import Assets from './pages/assets.js';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings';
              } else if (route.name === 'Assets') {
                iconName = focused ? 'attach-money' : 'attach-money';
              } else if (route.name === 'Debt') {
                iconName = focused ? 'account-balance' : 'account-balance';
              }
  
              // You can return any component that you like here!
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Assets" component={Assets} />
        <Tab.Screen name="Debt" component={Debt} />
        <Tab.Screen name="Settings" component={Profile} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Testmain from './pages/testmain.js';
import Debt from './pages/debt.js';
import ProfileScreen from './pages/profile.js';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Testmain" screenOptions={{animationEnabled: false}}>
        <Stack.Screen name="Testmain" component={Testmain} options={{ headerLeft: () => null }}/>
        <Stack.Screen name="Debt" component={Debt} options={{ headerLeft: () => null }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerLeft: () => null }}/>
      </Stack.Navigator>
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
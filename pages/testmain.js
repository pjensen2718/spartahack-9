import { StyleSheet, Text, View , Button } from 'react-native';
import React from 'react';


function Testmain({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Debt"
        onPress={() => navigation.navigate('Debt')}
      />
      <Button 
        title = "assets"
        onPress={() => navigation.navigate("Assets")}
      />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Testmain;
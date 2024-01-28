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
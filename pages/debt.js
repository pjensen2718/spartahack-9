import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Debt({ navigation}) {
  return (
    <View style={styles.container}>
      <Text>test!</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('Testmain')}
      />
    </View>
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
import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from "react-native";

function Dashboard(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/splash.png')}
        >
            <View style={styles.loginButton}>
                <Text> Hello World!  I want to die</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    loginButton: {
        width: '100%',
        height: 70, 
        backgroundColor: "#fc5c65"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default Dashboard;

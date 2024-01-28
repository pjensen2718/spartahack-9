import React from "react";
import {Button, StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions} from "react-native";
import Card from '../components/card';
import global_styles from '../components/global_styles';

// import firestore from '@react-native-firebase/firestore';

function ProfileScreen() {
    return (
        <ScrollView style = {styles.background}>
            <View style = {styles.topBuffer}>
            </View>
            <Card>
                <Text style = {global_styles.headerText}>
                    Login Info
                </Text>
                <Text style = {global_styles.normalText}>
                    Hi
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff'
    }
});


export default ProfileScreen;
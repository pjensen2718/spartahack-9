import React from "react";
import {Button, StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions} from "react-native";
import Card from '../components/card';
import { GlobalText, GlobalColor } from '../components/global_styles';
// import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen() {
    return (
        <ScrollView style = {styles.background}>
            <View style = {styles.topBuffer}>
            </View>
            <Card>
                <Text style = {GlobalText.headerText}>
                    Login Info
                </Text>
                <Text style = {GlobalText.normalText}>
                    Hi
                </Text>
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: GlobalColor.background
    }
});
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
                    Account Security
                </Text>
                <Text style = {GlobalText.normalText}>
                    {"\n"}
                    name
                    {"\n"}{"\n"}
                    email
                    {"\n"}{"\n"}
                    password
                </Text>
            </Card>

            <Card>
                <Text style = {GlobalText.headerText}>
                        Connected Accounts
                </Text>
                <Text style = {GlobalText.normalText}>
                    Im blue dabadnabdabdad
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    yes
                </Text>
            </Card>

            <Card>
                <Text style = {GlobalText.headerText}>
                        Preferences
                </Text>
                <Text style = {GlobalText.normalText}>
                    lorem ispum dolar blah bal
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
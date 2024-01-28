import React from "react";
import {Button, StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions} from "react-native";
import { Card, CardFooter} from '../components/card';
import { GlobalText, GlobalColor } from '../components/global_styles';
// import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen() {
    console.log("-> Profile")
    return (
        <ScrollView style={GlobalColor.bg}>
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
                    lorem{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"} 
                    ispum 
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    dolar 
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    blah 
                    {"\n"}{"\n"}{"\n"}{"\n"}
                    bal
                </Text>
            </Card>

            <CardFooter>
            </CardFooter>

        </ScrollView>
    );
}
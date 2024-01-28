import React, { useState }  from "react";
import {Button, StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TextInput} from "react-native";
import { Card, CardFooter } from '../components/card';
import { GlobalText, GlobalColor } from '../components/global_styles';
// import firestore from '@react-native-firebase/firestore';

export default function ProfileScreen() {
    console.log("-> Profile")

    const [email, setEmail] = useState('example@email.com');
    const [name, setName] = useState('Leeroy Jenkins');
    const [password, setPassword] = useState('Password123');

    return (
        <ScrollView style={GlobalColor.bg}>
            <Card>
                <Text style = {GlobalText.headerText}>
                    Account Security
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                />
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
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
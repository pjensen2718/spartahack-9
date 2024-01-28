import React from "react";
import {Button, StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions} from "react-native";
import Card from '../components/card';
// import firestore from '@react-native-firebase/firestore';

function ProfileScreen() {
    return (
        <ScrollView style = {styles.background}>
            <View style = {styles.topBuffer}>
            </View>
            <Card>
                <Text>IVE GOT A BLANK SPACE BABYYY AND ILL WRITE OUYIR NAME hihuisdjfhsijkfdhsndkfs
                    kdsjafhioasdfhaisufbaisjdkfbnasiudfhasidf
                    adfibasiufhuoisenjkmahdadf
                    asfhu9aeiuhfjasiuofjdklfjhasiudfhdsgiojfkndashfgirfb dvshjgiorehbegwruifjodsb vhjgifroedsb nvhjgiufdjbgjeru
                    dafiuarhewdjocknfhrgfuewiedojahsbvdgeuirfowdjcksbhgtuefijorsdnvbhsgrtueifjosdbvhgreifowdnshvb
                    sgsrfeisdcjfergbfhu
                    fgrfewiuhdcsjofrfeds
                    cfv';gtlrfhudijroa
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
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, SafeAreaView,ScrollView, Dimensions, Image} from "react-native";
import {Card} from '../components/card.js';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

function Dashboard(props) {
    // DATE/TIME 
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(() => {
        // Update the current date and time every second
        const intervalId = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);
    const dateTimeString = currentDateTime.toLocaleString();


    return (
        <ScrollView style = {styles.background}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/splash.png')}
            >
                {/* Header */} 
                <SafeAreaView>
                    <View style={styles.headerContainer}>
                        <View>
                            {/* Welcome Message */}
                            <Text style={styles.subheader}> Welcome Back,</Text>
                            <Text style={styles.header}> Amongus </Text>
                            <Text style={styles.subheader}> {dateTimeString} </Text>
                        </View>
                        <View>
                            {/* Profile Image */}
                            <Image
                                source={require('../assets/profile-icon.png')}
                                style={styles.profileImage}
                            />
                        </View>
                    </View>
                </SafeAreaView>

                {/* Line Chart */} 
                <View style={styles.centered}>
                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                100,
                                200,
                                300,
                                -100,
                                20,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width*0.9} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 4,
                        borderRadius: 16
                        }}
                    />
                </View>

                <View style={{alignItems: 'flex-end', marginRight: 20}}>
                    <Text> Expand    </Text>
                    <Text> Hello World!  I want to die    </Text>
                    <Text> Experimental 2    </Text>
                </View>

                <View
                    style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue',
                    }}
                />

                <Card>
                    <Text>
                        Experimental
                    </Text>
                </Card>

            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 32,
        paddingRight: 12,
    },
    subheader:{
        fontSize: 16,
        backgroundColor: '#ffffff',
        paddingLeft: 20,
    },
    background: {
        flex: 1,
        backgroundColor: '#fff'
    },
    centered:{
        alignItems: 'center'
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 20, // Make it circular
        marginRight: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
});

export default Dashboard;
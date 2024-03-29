import React from 'react';
import { View, Dimensions, Button } from 'react-native';
import { GlobalColor } from './global_styles';
import { LineChart } from 'react-native-chart-kit';

// Based off of
// https://www.youtube.com/watch?v=Uan5nIEc904
// https://www.youtube.com/watch?v=uNRmFV1n668

// Defining the device screen's size
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

// Card - iOS widget-style card that puts viewable stuff in a contained square
export const Card = (props) => {
    return (
        // Display the inside; props
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

// Graph Card - Card with graph :)
export const GraphCard = (data_in) => {
    console.log(data_in);
    return (
        <View style={styles.centered}>
            <LineChart
                data={{
                labels: data_in.children[0],
                datasets: [
                    {
                    data: data_in.children[1]
                    }
                ]
                }}
                width={Dimensions.get("window").width*.9} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForDots: {
                    r: "5",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginTop: screenWidth/20,
                borderRadius: screenWidth/15
                }}
            />
        </View>
    );
};

// Card footer - give space at bottom of card list
export const CardFooter = () => {
    return (
        <View style = {styles.footer}>

        </View>
    );
};

// Card specs - base the card's size on the screen spec
const styles = {
    containerStyle: {
        borderWidth: screenWidth/15,
        borderRadius: screenWidth/15,
        borderColor: GlobalColor.card,
        backgroundColor: GlobalColor.card,
        marginLeft: screenWidth/20,
        marginRight: screenWidth/20,
        marginTop: screenWidth/20,
    },
    footer: {
        height: screenWidth/20
    },
    centered:{
        alignItems: 'center'
    }
};
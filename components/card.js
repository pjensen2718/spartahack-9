import React from 'react';
import { View, Dimensions } from 'react-native';
import { GlobalColor } from './global_styles';

// Based off of
// https://www.youtube.com/watch?v=Uan5nIEc904
// https://www.youtube.com/watch?v=uNRmFV1n668

// Defining the device screen's size
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

// Card - iOS widget-style card that puts viewable stuff in a contained square
const Card = (props) => {
    return (
        // Display the inside; props
        <View style = {styles.containerStyle}>
            {props.children}
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
        borderBottomWidth: screenWidth/15,
        marginLeft: screenWidth/20,
        marginRight: screenWidth/20,
        marginTop: screenWidth/20
    }
}

export default Card;
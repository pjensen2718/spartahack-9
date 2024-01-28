import React from 'react';
import { View, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const Card = (props) => {
    return (
        <View style = {styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: screenWidth/15,
        borderRadius: screenWidth/15,
        borderColor: '#ddd',
        backgroundColor: '#ddd',
        borderBottomWidth: screenWidth/15,
        marginLeft: screenWidth/20,
        marginRight: screenWidth/20,
        marginTop: screenWidth/20
    }
}

export default Card;
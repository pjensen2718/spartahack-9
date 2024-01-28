/**
 * Global styles
 * Standardized font sizes, colors, etc.
 */
import { PixelRatio, StyleSheet } from 'react-native';

// fontScale and getFontSize sourced from medium.com
// https://muhammadrafeh.medium.com/make-responsive-react-native-text-for-any-device-f8301b006694
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;



export default StyleSheet.create({
    normalText: {
        fontSize: getFontSize(14)
    },
    
    headerText: {
        fontSize: getFontSize(20),
        fontWeight: 'bold'
    }
});
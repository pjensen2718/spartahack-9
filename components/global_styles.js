/**
 * Global styles
 * Standardized font sizes, colors, etc.
 */
import { PixelRatio, StyleSheet} from 'react-native';

// fontScale and getFontSize sourced from medium.com
// https://muhammadrafeh.medium.com/make-responsive-react-native-text-for-any-device-f8301b006694
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

// Text properties
export const GlobalText = StyleSheet.create({
    normalText: {
        fontSize: getFontSize(14),
        color: "#000"
    },
    headerText: {
        fontSize: getFontSize(20),
        fontWeight: 'bold',
        color: "#000"
    },
    
});

// Color Properties
export const GlobalColor = {
    bg: {
        backgroundColor: "#fff",
        flex: 1
    },
    card: "#E1D9D1",
    dark1: "#CBD5C0"
};
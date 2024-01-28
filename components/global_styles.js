/**
 * Global styles
 * Standardized font sizes, colors, etc.
 */
import { PixelRatio, StyleSheet } from 'react-native';

// fontScale and getFontSize sourced from medium.com
// https://muhammadrafeh.medium.com/make-responsive-react-native-text-for-any-device-f8301b006694
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

// Text properties
export const GlobalText = StyleSheet.create({
    normalText: {
        fontSize: getFontSize(14)
    },
    headerText: {
        fontSize: getFontSize(20),
        fontWeight: 'bold'
    }
});

// Color Properties
export const GlobalColor = {
    background: "#FFF",
    card: "#DFE6DA",
    dark1: "#CBD5C0"
};
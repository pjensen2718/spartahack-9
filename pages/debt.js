import { ScrollView, Text } from 'react-native';
import { Card, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';

let short_terms = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11, -12, -13, -14, -15, -16, -17, -18, -19, -20];
let long_terms = [-100, -200, -300, -400, -500];

function printDebts(debts) {
    
}

export default function Debt() {
    console.log("-> Debt")
    return (
        <ScrollView style={GlobalColor.bg}>
            {/* the segment below is for the top section:
                meant for short-term debts */}
            <Card>
                {/* header */}
                <Text style={GlobalText.headerText}>Short-Term Debts</Text>
                {/* 
                    * bullet listing
                    * 
                    */}
                <Text style={GlobalText.normalText}>
                    
                </Text>
            </Card>
            {/* the segment below is for the bottom section:
                meant for long-term debts */}
            <Card>
                {/* header */}
                <Text style={GlobalText.headerText}>Long-Term Debts</Text>
                {/* 
                    * bullet listing
                    * 
                    */}
                <Text style={GlobalText.normalText}>
                
                </Text>
            </Card>
            <CardFooter></CardFooter>
        </ScrollView>
    );
}

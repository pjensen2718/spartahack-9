import { View, Text } from 'react-native';
import { Card, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';

export default function Debt() {
    console.log("-> Debt")
    return (
        <View style={GlobalColor.bg}>
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
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

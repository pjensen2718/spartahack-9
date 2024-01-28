import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Card, GraphCard, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';
import { LineChart } from 'react-native-chart-kit';

// <View style={{ flex: 1,  alignItems: 'center' }}>
export default function Debt() {
    console.log("-> Debt")
    return (
      <ScrollView>
        <GraphCard>
          {[["Jan","Feb","Mar","Apr","May"],[1,2,50,180,200]]}
        </GraphCard>

        <Card>
          <Text style = {GlobalText.headerText}>National Debt</Text>
        </Card> 
      </ScrollView>
    );
}
import { View, Text, Dimensions } from 'react-native';
import { Card, CardFooter } from "../components/card.js";
import { Graph } from "../components/graph.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';
import { LineChart } from 'react-native-chart-kit';

// <View style={{ flex: 1,  alignItems: 'center' }}>
export default function Debt() {
    console.log("-> Debt")
    return (
      <Card>
        <Graph>
          {[["Jan","Feb","Mar","Apr","May"],[1,2,3,3,4]]}
        </Graph>
      </Card>
    );
}
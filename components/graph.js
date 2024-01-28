import { View, Text, Dimensions } from 'react-native';
import { Card, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from '../components/global_styles.js';
import { LineChart } from 'react-native-chart-kit';

// data: [[x-values],[y-values]]
export const Graph = (in_data) => {
    console.log("in_data: ", in_data)
    return (
        <LineChart
            data={{
            labels: in_data.children[0],
            datasets: [
                {
                data: in_data.children[1]
                }
            ]
            }}
            width={Dimensions.get("window").width*0.9} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "#FF0000",
            backgroundGradientFrom: "#FF0000",
            backgroundGradientTo: "#FF0000",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
            }}
            bezier
            style={{
            marginVertical: 4,
            borderRadius: 16
            }}
        />
    );
}
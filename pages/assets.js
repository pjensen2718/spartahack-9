import { View, Text, Button, Statusbar } from "react-native";
import { Card, CardFooter } from "../components/card.js";
import { GlobalColor, GlobalText } from "../components/global_styles.js";

export default function Assets() {
    console.log("-> Assets");
    return (
        // the below should have style sheets implemented
        // requires:
        //   -background color
        //   -boxes for text, images?, data
        <View style={{backgroundColor: GlobalColor.background}}>
            {/* the segment below is for the top section:
                meant for short-term assets */}
            <Card>
                {/* header */}
                <Text style={GlobalText.headerText}>Short-Term Assets</Text>
                {/* 
                  * bullet listing
                  * 
                  */}
            </Card>
            {/* the segment below is for the bottom section:
                meant for long-term assets */}
            <Card>
                {/* header */}
                <Text style={GlobalText.headerText}>Long-Term Assets</Text>
                {/* 
                  * bullet listing
                  * 
                  */}
            </Card>
            <CardFooter></CardFooter>
        </View>
    );
}
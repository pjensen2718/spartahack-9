import { View, Text, Button, Statusbar } from "react-native";
import Card from "../components/card.js";
import { GlobalColor, GlobalText } from "../components/global_styles";

export default function Assets({ navigation }) {
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
                <Text>Short-Term Assets</Text>
                {/* 
                  * bullet listing
                  * 
                  */}
            </Card>
            {/* the segment below is for the bottom section:
                meant for long-term assets */}
            <Card>
                {/* header */}
                <Text>Long-Term Assets</Text>
                {/* 
                  * bullet listing
                  * 
                  */}
            </Card>
            {/* the below should be the navigation bar */}
            <View>
                <Button 
                    title="Go to home"
                    onPress={() => navigation.navigate("Testmain")}
                />
                {/* here perhaps there should still be an icon
                    for assets, but should be unpressable*/}
                <Button 
                    title="Go to debts"
                    onPress={() => navigation.navigate("Debt")}
                />
                <Button 
                    title="Go to profile"
                    onPress={() => navigation.navigate("Profile")}
                />
            </View>
        </View>
    );
}
import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Navigation } from "../navigation";

export default function AboutScreen({ navigation }: Navigation) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ margin: 10, padding: 10 }}>
                <Text variant="displayLarge">Citi Bike Sharing Program</Text>
            </View>
            <View style={{ margin: 10, padding: 10 }}>
                <Text variant="displaySmall">Join</Text>
                <Text variant="titleLarge">Become an Annual Member or buy a short-term pass through the Citi Bike app.</Text>
            </View>
            <View style={{ margin: 10, padding: 10 }}>
                <Text variant="displaySmall">Unlock</Text>
                <Text variant="titleLarge">Find an available bike nearby, and get a ride code or use your member key to unlock it.</Text>
            </View>
            <View style={{ margin: 10, padding: 10 }}>
                <Text variant="displaySmall">Ride</Text>
                <Text variant="titleLarge">Take as many short rides as you want while your pass or membership is active.</Text>
            </View>
            <View style={{ margin: 10, padding: 10 }}>
                <Text variant="displaySmall">Return</Text>
                <Text variant="titleLarge">Return your bike to any station, and wait for the green light on the dock to make sure it's locked.</Text>
            </View>
        </View>
    );
}
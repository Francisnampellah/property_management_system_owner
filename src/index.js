import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./dashboard";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function Source() {
  return (
    <NavigationContainer>
      <View
        style={{
          display: "flex",
          flex: 1,
          width: "100%",
        }}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../../constants/color";
import Property_card from "../../../component/property_card";
import Forms_card from "../../../component/form_card";
import Home from "../home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Forms = () => {
  return (
    <View className="flex w-full px-4 ">
        
      {/* <View
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
          <Stack.Screen name="list" component={Home} />
        </Stack.Navigator>
      </View> */}

      <View
        id="recent prop"
        className="flex w-full mt-4 px-4 py-4 rounded-3xl"
        style={{
          backgroundColor: colors.elevated,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Bold" }}>Select Form</Text>

        <Forms_card add_state={"Add Property"} />
        <Forms_card add_state={"Add lease"} />
      </View>
    </View>
  );
};

export default Forms;

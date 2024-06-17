import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../constants/color";
import Forms_card from "../../../component/form_card";
import { createStackNavigator } from "@react-navigation/stack";
import { TextInput, Button } from "react-native-paper";
import Costume_input from "../../../component/costume_input";

const Stack = createStackNavigator();

const Add_lease = () => {
  return (
    <View className="flex w-full px-4 ">
      <View
        id="recent prop"
        className="flex w-full mt-4 px-4 py-4 rounded-3xl"
        style={{
          backgroundColor: colors.elevated,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Bold" }}>Add Lease Agreement </Text>
        <View
          className="flex my-2 px-4 flex-col rounded-3xl h-fit items-center"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.borderColor,
            borderWidth: 1,
          }}
        >
          <Costume_input />
          <Costume_input />
          <Costume_input />
          <Costume_input />
        </View>

        <Button style={{ backgroundColor: "blue", width: "auto" }}>
          submit
        </Button>
      </View>
    </View>
  );
};

export default Add_lease;

import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../constants/color";
import { height, width } from "react-native-dimension";

export default function costume_input() {
  return (
    <View
      className="flex w-full justify-center items-center flex-row"
      style={{ borderColor: colors.borderColor, borderBottomWidth: 1 }}
    >
      <Text style={{ fontFamily: "Poppins-Bold" }}>Title</Text>

      <TextInput
        className="flex-1"
        style={{ fontFamily: "Poppins-Regular" }}
        mode="outlined"
        placeholder="value"
        outlineColor="rgba(0,0,0,0)"
        activeOutlineColor="rgba(0,0,0,0)"
        contentStyle={{ fontFamily: "Poppins-Regular" }}
        selectionColor="blue"
        cursorColor="blue"
      />
    </View>
  );
}

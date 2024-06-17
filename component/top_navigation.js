import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { width } from "react-native-dimension";
import { TextInput } from "react-native-paper";
import { colors } from "../constants/color";

export default function Top_navigation() {
  return (
    <View
      style={{ backgroundColor: colors.background }}
      className="flex w-full justify-center items-center px-8 pt-16 "
    >
      <View className="flex flex-row w-full justify-between items-center ">
        <View className="flex-col p-4">
          <Text className="text-xl" style={{ fontFamily: "Poppins-Bold" }}>
            Welcome Mr
          </Text>
          <Text className="text-3xl " style={{ fontFamily: "Poppins-Regular" }}>
            Nampellah
          </Text>
        </View>
        <View>
          <Entypo name="notification" size={24} color="black" />
        </View>
      </View>

      <View className="flex w-full justify-center p-4 items-center">
        <TextInput
          mode="outlined"
          outlineStyle={{
            borderRadius: 50,
            borderColor: "none",
            borderWidth: 0,
          }}
          placeholder="Enter text here"
          className={`h-14 bg-slate-200 px-6`}
          style={{
            fontFamily: "Poppins-Bold",
            width: width(80),
            borderRadius: 50,
          }}
          left={<Entypo name="eye" size={24} color="black" />}
        />
      </View>
    </View>
  );
}

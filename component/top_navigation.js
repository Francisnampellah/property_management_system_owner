import React from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { width } from "react-native-dimension";
import { TextInput } from "react-native-paper";

export default function Top_navigation() {
  return (
    <View className="flex w-full justify-center items-center p-4 pt-16 ">
      <View className="flex flex-row w-full justify-between items-center ">
        <View className="flex-col">
          <Text className="text-xl" style={{ fontFamily: "Poppins-Boldi" }}>
            Welcome Mr
          </Text>
          <Text className="text-3xl" style={{ fontFamily: "Poppins-Regular" }}>
            Nampellah
          </Text>
        </View>
        <View>
          <Entypo name="notification" size={24} color="black" />
        </View>
      </View>

      <View className="flex w-full justify-center items-center">
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

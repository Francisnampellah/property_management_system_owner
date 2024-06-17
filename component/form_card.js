import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../constants/color";

export default function Forms_card({ add_state }) {
  return (
    <View
      className="flex my-2 px-4 py-6 flex-row rounded-3xl h-fit items-center"
      style={{
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
      }}
    >
      <View>
        <Entypo name="home" size={24} color="black" />
      </View>

      <View className="flex w-[2%] h-[100%] bg-blue-400 mx-2 rounded-xl "></View>

      <View className="flex flex-row justify-between flex-1">
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{add_state}</Text>
          <Text style={{ fontSize: 12 }} className="font-light">
            Add Property
          </Text>
        </View>
        {/* <View>
          <Text></Text>
          <View className="flex-row">
            <Text style={{ color: "green", fontWeight: "bold" }}> + </Text>

            <Text style={{ color: "green", fontWeight: "bold" }}> 45 </Text>

            <Text>Available units</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}

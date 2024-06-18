import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../constants/color";

export default function Search_card({ value, onPress, active }) {
  return (
    <TouchableOpacity
      // style={[styles.card, active ? styles.activeCard : null]}
      onPress={onPress}
    >
      <View
        className="flex p-2 w-28 rounded-3xl justify-center items-center"
        style={{
          backgroundColor: active ? colors.active : colors.elevated,
          borderWidth: 1,
          borderColor: colors.borderColor,
        }}
      >
        <Text style={{ fontFamily: "Poppins-Bold" }}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { width } from "react-native-dimension";
import { TextInput } from "react-native-paper";
import { colors } from "../constants/color";
import Search_card from "./search_card";
import { TouchableOpacity } from "react-native";

export default function Top_navigation({ navigation, goBack = true }) {
  return (
    <View
      style={{ backgroundColor: colors.background }}
      className="flex w-full justify-center items-center px-8 pt-12 "
    >
      <View className="flex flex-row w-full justify-between items-center ">
        <View>
          <View className="self-start">
            {goBack && (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
          <View className="flex-col p-2">
            <Text className="text-xl" style={{ fontFamily: "Poppins-Bold" }}>
              Welcome Mr
            </Text>
            <Text
              className="text-3xl "
              style={{ fontFamily: "Poppins-Regular" }}
            >
              Nampellah
            </Text>
          </View>
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
            borderRadius: 24,
          }}
          left={<TextInput.Icon icon={"eye"} />}
        />
      </View>

      <View className="flex w-full flex-row justify-between mb-4">
        <Search_card value={"lease"} />
        <Search_card value={"Tenants"} />
        <Search_card value={"Properties"} />
      </View>
    </View>
  );
}

import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { width } from "react-native-dimension";
import { TextInput } from "react-native-paper";
import { colors } from "../constants/color";
import Search_card from "./search_card";
import { MyContext } from "../hooks/context_provider";

export default function Top_navigation({ navigation, goBack = true }) {
  
  const { activeSearch, setActiveSearch } = useContext(MyContext);
  const { searchInput, setSearchInput } = useContext(MyContext);
  const { activeFilters, setActiveFilters } = useContext(MyContext);


  const handleSearchInput = (text) => {
    setSearchInput(text);
    setActiveSearch(text.length > 0 || activeFilters.length > 0);
  };

  const handleFilterClick = (category) => {
    setActiveFilters((prevFilters) => {
      const isActive = prevFilters.includes(category);
      if (isActive) {
        // Inactivate the category if it's already active
        const newFilters = prevFilters.filter((filter) => filter !== category);
        setActiveSearch(searchInput.length > 0 || newFilters.length > 0);
        return newFilters;
      } else {
        // Activate the category if it's not already active
        setActiveSearch(true);
        return [...prevFilters, category];
      }
    });
  };

  return (
    <View
      style={{ backgroundColor: colors.background }}
      className="flex w-full justify-center items-center px-8 pt-12"
    >
      <View className="flex flex-row w-full justify-between items-center">
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
              className="text-3xl"
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
          onChangeText={handleSearchInput}
          value={searchInput}
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
        {["lease", "tenant", "property"].map((category) => (
          <Search_card
            key={category}
            value={category}
            active={activeFilters.includes(category)}
            onPress={() => handleFilterClick(category)}
          />
        ))}
      </View>
    </View>
  );
}

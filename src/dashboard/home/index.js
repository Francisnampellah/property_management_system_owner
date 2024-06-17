import React, { useEffect, useRef } from "react";
import { View, Text, Animated, ScrollView } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { width } from "react-native-dimension";
import Property_card from "../../../component/property_card";
import { colors } from "../../../constants/color";

const barData = [
  { value: 250, label: "M" },
  { value: 500, label: "T", frontColor: "#177AD5" },
  { value: 745, label: "W", frontColor: "#177AD5" },
  { value: 320, label: "T" },
  { value: 600, label: "F", frontColor: "#177AD5" },
  { value: 256, label: "S" },
  { value: 300, label: "S" },
];

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[2]}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "flex-start",
        paddingVertical: 16,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          paddingVertical: 16,
          opacity: 1,
          justifyContent: "center",
        }}
        className="px-8"
      >
        <BarChart
          width={width(90)}
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="#E9E9EC"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>

      <View className="flex w-full px-8 py-2">
        <View className="flex flex-row bg-blue-700 rounded-3xl p-4 items-center justify-around">
          <View className="flex items-center">
            <Text className="text-white text-lg font-semibold">Tenants</Text>
            <Text className="text-white text-xl font-bold mt-1">360</Text>
          </View>
          <View className="w-1 h-16 bg-white mx-4 rounded-xl"></View>
          <View className="flex items-center">
            <Text className="text-white text-lg font-semibold">Units</Text>
            <Text className="text-white text-xl font-bold mt-1">360</Text>
          </View>
        </View>
      </View>

      <View id="recent prop" className="flex w-full mt-4 px-4">
        <View
          className="rounded-3xl p-4"
          style={{
            backgroundColor: colors.elevated,
            borderWidth: 1,
            borderColor: colors.borderColor,
          }}
        >
          <Text className="text-lg font-bold mb-2">Recent Properties</Text>

          <View>
            {barData.map(() => {
              return <Property_card />;
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

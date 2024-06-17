import { View, Text } from "react-native";
import React from "react";
import Forms_card from "../../../component/form_card";
import { colors } from "../../../constants/color";
import { TouchableOpacity } from "react-native";

export default function Forms_selection({ navigation }) {
  return (
    <View
      id="recent prop"
      className="flex w-full px-4 py-4 rounded-3xl"
      style={{
        backgroundColor: colors.elevated,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
      }}
    >
      <Text style={{ fontFamily: "Poppins-Bold" }}>Select Form</Text>

      <Forms_card
        add_state={"Add Property"}
        navigateTo={"add_property"}
        navigation={navigation}
      />
      <Forms_card
        add_state={"Add lease"}
        navigateTo={"add_lease"}
        navigation={navigation}
      />
      <Forms_card
        add_state={"Add Tenant"}
        navigateTo={"add_tenant"}
        navigation={navigation}
      />
    </View>
  );
}

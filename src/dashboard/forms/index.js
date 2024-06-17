import React from "react";
import { View, Text } from "react-native";
import { colors } from "../../../constants/color";
import Property_card from "../../../component/property_card";
import Forms_card from "../../../component/form_card";
import Home from "../home";
import { createStackNavigator } from "@react-navigation/stack";
import Add_property from "./add_property";
import Add_lease from "./add_lease";
import Add_tentant from "./add_tentant";
import Forms_selection from "./forms";
const FormStack = createStackNavigator();

const Forms = () => {
  return (
    <View
      className="flex flex-1 w-full px-4"
      style={{ backgroundColor: colors.background }}
    >
      <FormStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <FormStack.Screen name="forms" component={Forms_selection} />
        <FormStack.Screen name="add_tenant" component={Add_tentant} />
        <FormStack.Screen name="add_property" component={Add_property} />
        <FormStack.Screen name="add_lease" component={Add_lease} />
      </FormStack.Navigator>

    </View>
  );
};

export default Forms;

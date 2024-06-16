import React from "react";
import { View, TextInput, Icon, StyleSheet } from "react-native";

const IconInput = ({ iconName, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Icon {...props} name={iconName} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
});

export default IconInput;

import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import { CustomSwitch } from "../components/UI-Kit/";

const TopNavigator = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => ""}>
        <FontAwesome name="user-circle" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
      <CustomSwitch />
      <TouchableWithoutFeedback onPress={() => ""}>
        <AntDesign name="message1" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 10
  }
});

export default TopNavigator;

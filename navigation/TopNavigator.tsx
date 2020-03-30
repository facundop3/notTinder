import React, { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import { CustomSwitch } from "../components/UI-Kit";

interface Props {
  navTo?: (str: string | object) => any;
}
const TopNavigator: FC<Props> = ({ navTo }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navTo("Profile")}>
        <FontAwesome name="user-circle" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
      <CustomSwitch />
      <TouchableWithoutFeedback onPress={() => navTo("Chat")}>
        <AntDesign name="message1" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
    </SafeAreaView>
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

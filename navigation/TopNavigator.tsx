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
  navToChat?: () => void;
}
const TopNavigator: FC<Props> = ({ navToChat }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => ""}>
        <FontAwesome name="user-circle" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
      <CustomSwitch />
      <TouchableWithoutFeedback onPress={navToChat}>
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

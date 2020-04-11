import React, { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

import { CustomSwitch } from "nottinderuikit";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface Props {
  navTo?: (str: string | object, params?: object) => any;
  switchValue: boolean;
  handleSwitchChange: (value: boolean) => void;
}
const TopNavigator: FC<Props> = ({
  navTo,
  switchValue,
  handleSwitchChange,
}) => {
  const lefttIcon = (
    <MaterialCommunityIcons
      name="fire"
      size={40}
      color={switchValue ? "#cecece" : "#fe526a"}
    />
  );
  const rightIcon = (
    <MaterialCommunityIcons
      name="star-four-points"
      size={20}
      color={switchValue ? "#edba59" : "white"}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navTo("Profile")}>
        <FontAwesome name="user-circle" size={30} color="#cecece" />
      </TouchableWithoutFeedback>
      <CustomSwitch
        handleChange={handleSwitchChange}
        isToggledRight={switchValue}
        leftIcon={lefttIcon}
        rightIcon={rightIcon}
      />
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
    paddingVertical: 10,
  },
});

export default TopNavigator;

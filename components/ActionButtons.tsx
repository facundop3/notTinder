import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { RoundButton } from "./UI-Kit";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";

interface Props {
  horizontalSwipe: (isLike: boolean) => void;
  verticalSwipe: () => void;
}
const ActionButtons: FC<Props> = ({ verticalSwipe, horizontalSwipe }) => {
  return (
    <View style={styles.container}>
      <RoundButton onPress={() => ""} size={40} shadow border>
        <Foundation name="refresh" color="#fecd65" size={25} />
      </RoundButton>
      <RoundButton onPress={() => horizontalSwipe(false)} shadow border>
        <FontAwesome name="close" color="#fe526a" size={30} />
      </RoundButton>
      <RoundButton onPress={verticalSwipe} size={40} shadow border>
        <AntDesign name="star" size={25} color="#29bcff" />
      </RoundButton>
      <RoundButton onPress={() => horizontalSwipe(true)} shadow border>
        <AntDesign name="heart" size={30} color="#49e7b6" />
      </RoundButton>
      <RoundButton onPress={() => ""} size={40} shadow border>
        <Ionicons name="ios-flash" size={30} color="#a550e1" />
      </RoundButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15
  }
});
export default ActionButtons;

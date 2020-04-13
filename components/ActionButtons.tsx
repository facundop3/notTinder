import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { RoundButton, colors } from "nottinderuikit";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";

interface Props {
  horizontalSwipe: (isLike: boolean) => void;
  verticalSwipe: () => void;
  deviceHeight: number;
}
const ActionButtons: FC<Props> = ({ verticalSwipe, horizontalSwipe, deviceHeight }) => {
  /*
  heights
  const iphoneProMax = 896
  const iphonePro = 812
  const iphone8 = 667
  */
  const actionButtonsHeight = deviceHeight > 800 ? "13%" : "11%"
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: actionButtonsHeight
    },
  });
  return (
    <View style={styles.container}>
      <RoundButton onPress={() => ""} size={40} shadow border>
        <Foundation name="refresh" color={colors.orange} size={25} />
      </RoundButton>
      <RoundButton onPress={() => horizontalSwipe(false)} shadow border>
        <FontAwesome name="close" color={colors.red} size={30} />
      </RoundButton>
      <RoundButton onPress={verticalSwipe} size={40} shadow border>
        <AntDesign name="star" size={25} color={colors.blue} />
      </RoundButton>
      <RoundButton onPress={() => horizontalSwipe(true)} shadow border>
        <AntDesign name="heart" size={30} color={colors.green} />
      </RoundButton>
      <RoundButton onPress={() => ""} size={40} shadow border>
        <Ionicons name="ios-flash" size={30} color={colors.purple} />
      </RoundButton>
    </View>
  );
};


export default ActionButtons;

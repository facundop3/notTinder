import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundButton, colors } from "./";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AddRemovePhoto = () => {
  return (
    <View style={styles.AddRemovePhoto}>
      <View style={{ position: "absolute", right: -10, bottom: -10 }}>
        <RoundButton size={30} border onPress={() => {}} color={colors.red}>
          <MaterialCommunityIcons name="plus" size={25} color="white" />
        </RoundButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AddRemovePhoto: {
    height: 150,
    flexDirection: "row",
    // width: 100,
    backgroundColor: colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
    position: "relative",
    width: "32%",
    paddingBottom: "18%" /* 32:18, i.e. 16:9 */,
    marginBottom: " 2%" /* (100-32*3)/2 */
  }
});

export default AddRemovePhoto;

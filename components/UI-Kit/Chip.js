import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";
const Chip = ({
  onPress,
  children,
  bg = "rgba(0,0,0, .5)",
  color = "white",
  isCricle
}) => {
  const styles = StyleSheet.create({
    chipContainer: {
      backgroundColor: bg,
      padding: 5,
      borderRadius: 50,
      alignItems: "center",
      margin: 5,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      ...(isCricle ? { width: 30 } : {})
    },
    chip: {
      color
    }
  });

  return (
    <TouchableHighlight style={styles.chipContainer} onPress={onPress}>
      <Text style={styles.chip}>{children}</Text>
    </TouchableHighlight>
  );
};

export default Chip;

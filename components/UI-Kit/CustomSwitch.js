import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Animated
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CustomSwitch = props => {
  const [isGoldActive, setIsGoldActive] = useState(false);
  const [toggleToleft] = useState(new Animated.Value(0));
  const toggleRight = () => {
    Animated.timing(toggleToleft, {
      toValue: 50,
      duration: 400
    }).start();
  };
  const toggleLeft = () => {
    Animated.timing(toggleToleft, {
      toValue: 0,
      duration: 400
    }).start();
  };
  const handlePress = () => {
    setIsGoldActive(!isGoldActive);
    if (isGoldActive) {
      toggleLeft();
    } else {
      toggleRight();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="fire"
          size={40}
          color={isGoldActive ? "#cecece" : "#fe526a"}
          style={styles.fireIcon}
        />
        <Animated.View
          style={{ ...styles.toggleBall, left: toggleToleft }}
        ></Animated.View>
        <MaterialCommunityIcons
          name="star-four-points"
          size={20}
          color={isGoldActive ? "#edba59" : "white"}
          style={styles.fourPointStar}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 100,
    backgroundColor: "#edba59",
    padding: 5,
    borderRadius: 30,
    position: "relative"
  },
  toggleBall: {
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    width: 60,
    height: 50,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "white",
    position: "absolute"
  },
  fireIcon: {
    zIndex: 2,
    position: "absolute",
    left: 10
  },
  fourPointStar: {
    zIndex: 2,
    position: "absolute",
    right: 10
  }
});

export default CustomSwitch;

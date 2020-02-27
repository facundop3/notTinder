import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { colors } from "./UI-Kit";
const Radar = () => {
  const [scale] = useState<any>(new Animated.Value(1));
  const [opacity] = useState<any>(new Animated.Value(0.3));
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    circle: {
      backgroundColor: colors.red,
      width: 30,
      height: 30,
      borderRadius: 15,
      zIndex: 0
    },
    animatedCircle: {
      transform: [{ scale }]
    }
  });
  const doAnimation = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 20,
          duration: 4000
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 4000
        })
      ])
    ]).start(() => {
      scale.setValue(1);
      opacity.setValue(0.3);
      doAnimation();
    });
  };
  useEffect(() => {
    doAnimation();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Looking for</Text>
      <Animated.View
        style={[styles.circle, styles.animatedCircle, { opacity }]}
      ></Animated.View>
      <Animated.View
        style={[styles.circle, styles.animatedCircle, { opacity }]}
      ></Animated.View>
    </View>
  );
};

export default Radar;

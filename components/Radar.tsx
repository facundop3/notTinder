import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { colors, Avatar } from "nottinderuikit";
import { candidate } from "../sampleData";
const Radar = () => {
  const mainPicture = candidate.pictures[0];
  const [scale] = useState<any>(new Animated.Value(1));
  const [scale2] = useState<any>(new Animated.Value(1));
  const [opacity] = useState<any>(new Animated.Value(0.3));
  const [opacity2] = useState<any>(new Animated.Value(0.3));
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      backgroundColor: colors.red,
      width: 30,
      height: 30,
      borderRadius: 15,
      zIndex: 0,
      position: "absolute",
    },
    animatedCircle: {
      transform: [{ scale }],
    },
    animatedCircle2: {
      transform: [{ scale: scale2 }],
    },
  });
  const doAnimation = (scale, opacity, delay = 0) => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 20,
          delay,
          duration: 4000,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          delay,
          duration: 4000,
        }),
      ]),
    ]).start(() => {
      scale.setValue(1);
      opacity.setValue(0.3);
      doAnimation(scale, opacity, delay);
    });
  };
  useEffect(() => {
    doAnimation(scale, opacity);
    doAnimation(scale2, opacity2, 250);
  }, []);
  return (
    <View style={styles.container}>
      <Avatar img={mainPicture} size={150} style={{ zIndex: 2 }} />
      {/* <Text>Looking for</Text> */}
      <Animated.View
        style={[styles.circle, styles.animatedCircle, { opacity }]}
      ></Animated.View>
      <Animated.View
        style={[styles.circle, styles.animatedCircle2, { opacity }]}
      ></Animated.View>
    </View>
  );
};

export default Radar;

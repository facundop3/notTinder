import React from "react";
import { Image, StyleSheet } from "react-native";

const Avatar = ({ img, size = 60 }) => {
  const styles = StyleSheet.create({
    avatar: {
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      width: size,
      height: size,
      borderRadius: 50,
      marginRight: 10
    }
  });
  return <Image style={styles.avatar} source={img} />;
};

export default Avatar;

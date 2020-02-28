import React from "react";
import { Image, StyleSheet } from "react-native";
import { Styles } from "@fortawesome/fontawesome-svg-core";

interface Props {
  size?: number;
  img: any;
  style?: any;
}
const Avatar: React.FC<Props> = ({ img, size = 60, style = {} }) => {
  const styles = StyleSheet.create({
    avatar: {
      overflow: "hidden",
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      width: size,
      height: size,
      borderRadius: size / 2,
      marginRight: 10,
      ...style
    }
  });
  return <Image style={styles.avatar} source={img} />;
};

export default Avatar;

import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { getImageSourceFromCache } from "../../utils";

interface Props {
  size?: number;
  uri: any;
  style?: any;
}
const Avatar: React.FC<Props> = ({ uri, size = 60, style = {} }) => {
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
  const [imageSource, setImageSource] = useState<any>(null);

  useEffect(() => {
    getImageSourceFromCache(uri).then(setImageSource);
  }, []);
  return <Image style={styles.avatar} source={imageSource} />;
};

export default Avatar;

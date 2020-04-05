import React, { useState, FC, useEffect } from "react";
import { Image } from "react-native";
import { getImageSourceFromCache } from "../../utils";

interface Props {
  source: any;
  style?: any;
}
const CacheImage: FC<Props> = ({ source: { uri }, style = {} }) => {
  const [cachedSource, setCachedSource] = useState<any>(null);
  useEffect(() => {
    getImageSourceFromCache(uri).then(setCachedSource);
  }, []);

  return <Image source={cachedSource} style={style} />;
};

export default CacheImage;

import React, { useState, useEffect, FC } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import colors from "./colors";
import RoundButton from "./RoundButton";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {
  getCameraRollPermissionAsync,
  pickImage,
  uploadImage,
  deleteImage,
  getImageUrl,
  getImageSourceFromCache,
} from "../../utils";

interface Props {
  id: string;
}

const AddRemovePhoto: FC<Props> = ({ id }) => {
  const [imageSource, setImageSource] = useState<any>(false);

  useEffect(() => {
    getImageSourceFromCache("", id).then((img) => {
      if (!img) {
        getImageUrl(id)
          .then((uri) => setImageSource({ uri }))
          .catch(() => {
            setImageSource(false);
          });
      } else {
        setImageSource(img);
      }
    });
  }, []);

  const saveImage = async () => {
    await getCameraRollPermissionAsync();
    const image = await pickImage();
    setImageSource(image);
    uploadImage(image.uri, id);
    getImageSourceFromCache(image.uri, id);
  };
  const handleButtonPressed = () => {
    if (imageSource) {
      deleteImage(id);
      setImageSource(false);
    } else {
      saveImage();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={saveImage}>
      <View style={styles.AddRemovePhoto}>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} />
        ) : (
          <View style={styles.dashedContainer} />
        )}
        <View style={{ position: "absolute", right: -10, bottom: -10 }}>
          <RoundButton
            size={30}
            border
            onPress={handleButtonPressed}
            color={colors.red}
          >
            {imageSource ? (
              <Entypo name="cross" size={25} color="white" />
            ) : (
              <MaterialCommunityIcons name="plus" size={25} color="white" />
            )}
          </RoundButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  AddRemovePhoto: {
    height: 150,
    width: "30%",
    marginVertical: " 2%",
  },
  dashedContainer: {
    backgroundColor: colors.grey,
    borderColor: colors.darkGrey,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
});

export default AddRemovePhoto;

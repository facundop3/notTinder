import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import colors from "./colors";
import RoundButton from "./RoundButton";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {
  getCameraRollPermissionAsync,
  pickImage,
  uploadImage,
  deleteImage
} from "../../utils";

const AddRemovePhoto = () => {
  const [image, setImage] = useState<any>(false);
  const saveImage = async () => {
    await getCameraRollPermissionAsync();
    const image = await pickImage();
    setImage(image.uri);
    uploadImage(image.uri);
  };
  const handleButtonPressed = () => {
    if (image) {
      deleteImage();
      setImage(false);
    } else {
      saveImage();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={saveImage}>
      <View style={styles.AddRemovePhoto}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
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
            {image ? (
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
    marginVertical: " 2%"
  },
  dashedContainer: {
    backgroundColor: colors.grey,
    borderColor: colors.darkGrey,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%"
  }
});

export default AddRemovePhoto;

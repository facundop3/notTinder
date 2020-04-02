import React, { useState, FC } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import colors from "./colors";
import RoundButton from "./RoundButton";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

interface Props {
  uploadImage: (uri: string) => any;
}
const AddRemovePhoto: FC<Props> = ({ uploadImage }) => {
  const [image, setImage] = useState<any>(false);
  const pickPic = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
    return result;
  };
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  const saveImageToFirestore = data => {
    uploadImage(data.uri);
  };
  const handlePress = () => {
    getPermissionAsync()
      .then(pickPic)
      .then(saveImageToFirestore);
  };
  const handleButtonPressed = () => {
    if (image) {
      setImage(false);
    } else {
      handlePress();
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
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

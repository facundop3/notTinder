import React from "react";
import { View, StyleSheet } from "react-native";
import { AddRemovePhoto } from "./UI-Kit";
import * as firebase from "firebase";

const AddPhotoGrid = () => {
  const photos = [...Array(3).keys()];
  const uploadImage = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase
      .storage()
      .ref()
      .child("my-image");
    const putResult = ref.put(blob);
    return putResult;
  };
  return (
    <View style={styles.photosContainer}>
      {photos.map(n => (
        <View style={styles.photosRows} key={n}>
          <AddRemovePhoto uploadImage={uploadImage} />
          <AddRemovePhoto uploadImage={uploadImage} />
          <AddRemovePhoto uploadImage={uploadImage} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  photosRows: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default AddPhotoGrid;

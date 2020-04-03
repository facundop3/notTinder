import React from "react";
import { View, StyleSheet } from "react-native";
import { AddRemovePhoto } from "./UI-Kit";

const AddPhotoGrid = () => {
  const photos = [...Array(3).keys()];
  return (
    <View style={styles.photosContainer}>
      {photos.map(n => (
        <View style={styles.photosRows} key={n}>
          <AddRemovePhoto />
          <AddRemovePhoto />
          <AddRemovePhoto />
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

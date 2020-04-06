import React from "react";
import { View, StyleSheet } from "react-native";
import { AddRemovePhoto } from "./UI-Kit";

const AddPhotoGrid = () => {
  const listOfIds = Array(9)
    .fill("profile-image-")
    .map((e, i) => e + i);
  return (
    <View style={styles.photosContainer}>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={listOfIds[0]} />
        <AddRemovePhoto id={listOfIds[1]} />
        <AddRemovePhoto id={listOfIds[2]} />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={listOfIds[3]} />
        <AddRemovePhoto id={listOfIds[4]} />
        <AddRemovePhoto id={listOfIds[5]} />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={listOfIds[6]} />
        <AddRemovePhoto id={listOfIds[7]} />
        <AddRemovePhoto id={listOfIds[8]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  photosRows: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default AddPhotoGrid;

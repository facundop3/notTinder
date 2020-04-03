import React from "react";
import { View, StyleSheet } from "react-native";
import { AddRemovePhoto } from "./UI-Kit";

const AddPhotoGrid = () => {
  return (
    <View style={styles.photosContainer}>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={0} />
        <AddRemovePhoto id={1} />
        <AddRemovePhoto id={2} />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={3} />
        <AddRemovePhoto id={4} />
        <AddRemovePhoto id={5} />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto id={6} />
        <AddRemovePhoto id={7} />
        <AddRemovePhoto id={8} />
      </View>
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

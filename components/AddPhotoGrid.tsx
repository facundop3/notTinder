import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AddRemovePhoto } from "nottinderuikit";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import {
  getCameraRollPermissionAsync,
  pickImage,
  uploadImage,
  deleteImage,
  getImageUrl,
  getImageSourceFromCache,
} from "../utils";

const AddPhotoGrid = () => {
  const defaultImagesSources = {};
  const listOfIds = Array(9)
    .fill("profile-image-")
    .map((e, i) => {
      const id = e + i;
      defaultImagesSources[id] = false;
      return id;
    });
  const [imagesSources, setImagesSources] = useState(defaultImagesSources);
  const removeIcon = <Entypo name="cross" size={25} color="white" />;
  const addIcon = (
    <MaterialCommunityIcons name="plus" size={25} color="white" />
  );
  useEffect(() => {
    listOfIds.map((id) => {
      getImageSourceFromCache("", id).then((img) => {
        if (!img) {
          getImageUrl(id)
            .then((uri) =>
              setImagesSources((prev) => ({ ...prev, [id]: { uri } }))
            )
            .catch(() => {
              setImagesSources((prev) => ({ ...prev, [id]: false }));
            });
        } else {
          setImagesSources((prev) => ({ ...prev, [id]: img }));
        }
      });
    });
  }, []);
  const saveImage = async (id: string) => {
    await getCameraRollPermissionAsync();
    const image = await pickImage();
    setImagesSources({ ...imagesSources, [id]: image });
    uploadImage(image.uri, id);
    getImageSourceFromCache(image.uri, id);
  };
  const handlePress = (id: string) => {
    if (imagesSources[id]) {
      removeImage(id);
    } else {
      saveImage(id);
    }
  };
  const removeImage = (id: string) => {
    deleteImage(id);
    setImagesSources({ ...imagesSources, [id]: false });
  };

  return (
    <View style={styles.photosContainer}>
      <View style={styles.photosRows}>
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[0]}
          imageSource={imagesSources[listOfIds[0]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[1]}
          imageSource={imagesSources[listOfIds[1]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[2]}
          imageSource={imagesSources[listOfIds[2]]}
        />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[3]}
          imageSource={imagesSources[listOfIds[3]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[4]}
          imageSource={imagesSources[listOfIds[4]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[5]}
          imageSource={imagesSources[listOfIds[5]]}
        />
      </View>
      <View style={styles.photosRows}>
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[6]}
          imageSource={imagesSources[listOfIds[6]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[7]}
          imageSource={imagesSources[listOfIds[7]]}
        />
        <AddRemovePhoto
          saveImage={saveImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          handlePress={handlePress}
          id={listOfIds[8]}
          imageSource={imagesSources[listOfIds[8]]}
        />
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

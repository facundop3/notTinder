import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { AddRemoveImage } from "nottinderuikit";
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
  const addImage = async (id: string) => {
    console.log(`adding image ${id}`)
    await getCameraRollPermissionAsync();
    const image = await pickImage();
    setImagesSources({ ...imagesSources, [id]: image });
    uploadImage(image.uri, id);
    getImageSourceFromCache(image.uri, id);
  };
  const removeImage = (id: string) => {
    console.log(`removing image ${id}`)
    deleteImage(id);
    setImagesSources({ ...imagesSources, [id]: false });
  };

  return (
    <>
      <View style={styles.photosRows}>
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[0]}
          imageSource={imagesSources[listOfIds[0]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[1]}
          imageSource={imagesSources[listOfIds[1]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[2]}
          imageSource={imagesSources[listOfIds[2]]}
        />
      </View>
      <View style={styles.photosRows}>
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[3]}
          imageSource={imagesSources[listOfIds[3]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[4]}
          imageSource={imagesSources[listOfIds[4]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[5]}
          imageSource={imagesSources[listOfIds[5]]}
        />
      </View>
      <View style={styles.photosRows}>
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[6]}
          imageSource={imagesSources[listOfIds[6]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[7]}
          imageSource={imagesSources[listOfIds[7]]}
        />
        <AddRemoveImage
          addCallback={addImage}
          addIcon={addIcon}
          removeIcon={removeIcon}
          removeCallback={removeImage}
          id={listOfIds[8]}
          imageSource={imagesSources[listOfIds[8]]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  photosRows: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: 15
  },
});

export default AddPhotoGrid;

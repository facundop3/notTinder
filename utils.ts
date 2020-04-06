import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import "firebase/firestore";
import shorthash from "shorthash";
import * as FileSystem from "expo-file-system";

export const getCameraRollPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  }
};

export const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!result.cancelled) {
    return result;
  }
};

export const uploadImage = async (uri: string, id: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const currentUserUid = firebase.auth().currentUser.uid;
  const ref = firebase.storage().ref().child(`${currentUserUid}/${id}`);
  const putResult = ref.put(blob);
  return putResult;
};

export const getImageUrl = async (id: number | string) => {
  const currentUserUid = firebase.auth().currentUser.uid;
  const ref = firebase.storage().ref().child(`${currentUserUid}/${id}`);
  const url = ref.getDownloadURL();
  return url;
};

export const deleteImage = async (id: string) => {
  const currentUserUid = firebase.auth().currentUser.uid;
  const ref = firebase.storage().ref().child(`${currentUserUid}/${id}`);
  ref
    .delete()
    .then(function () {
      // File deleted successfully
      console.log(`Image: ${id} deleted`);
    })
    .catch(function (error) {
      // Uh-oh, an error occurred!
    });
  deleteImageFromCache(id);
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const getMyProfileData = async () => {
  const userId = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  const userDocumentRef = db.collection("users").doc(userId);
  try {
    const doc = await userDocumentRef.get();
    if (doc.exists) {
      return doc.data();
    } else {
      console.log("No profile data for this user");
    }
  } catch (err) {
    console.error(err);
  }
};

const getCachePath = (uri: string) => {
  const name = shorthash.unique(uri);
  const path = FileSystem.cacheDirectory + name;
  return path;
};

export const getImageSourceFromCache = async (uri: string, id: string) => {
  const path = getCachePath(id);
  const image = await FileSystem.getInfoAsync(path);
  if (image.exists) {
    return { uri: image.uri };
  } else if (!uri) {
    // When no uri given will not try to download the image,
    //just will check on cache
    return null;
  } else {
    const image = await FileSystem.downloadAsync(uri, path);
    return { uri: image.uri };
  }
};

export const deleteImageFromCache = async (uri: string) => {
  const path = getCachePath(uri);
  await FileSystem.deleteAsync(path);
};

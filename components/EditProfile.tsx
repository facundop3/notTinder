import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundButton, colors, AddRemovePhoto } from "./UI-Kit";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// const PhotoPlaceholder = () => {
//   return (
//     <View style={styles.photoPlaceholder}>
//       <View style={{ position: "absolute", right: -10, bottom: -10 }}>
//         <RoundButton size={30} border onPress={() => {}} color={colors.red}>
//           <MaterialCommunityIcons name="plus" size={25} color="white" />
//         </RoundButton>
//       </View>
//     </View>
//   );
// };

const EditProfile = () => {
  const photos = [...Array(9).keys()];
  return (
    <View style={styles.photosContainer}>
      {photos.map(n => (
        <AddRemovePhoto />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default EditProfile;

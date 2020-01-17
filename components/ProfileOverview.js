import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "./UI-Kit";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { RoundButton, colors } from "./UI-Kit";

const ProfileOverview = ({ data }) => {
  const { name, age, school, pictures = [] } = data;
  const [mainPicture] = pictures;
  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
        <Avatar img={mainPicture} size={150} />
        <Text style={styles.nameAge}>
          {name}, {age}
        </Text>
        <Text>{school}</Text>

        <View style={styles.centralActionContainer}>
          <View>
            <RoundButton color={colors.grey}>
              <FontAwesome name="gear" size={30} color={colors.darkGrey} />
            </RoundButton>
            <Text style={styles.buttonSubtitle}>Settings</Text>
          </View>
          <View style={{ paddingTop: 15 }}>
            <RoundButton color={colors.red}>
              <FontAwesome name="camera" size={30} color="white" />
            </RoundButton>
            <Text style={styles.buttonSubtitle}>Add Media</Text>
          </View>
          <View>
            <RoundButton color={colors.grey}>
              <MaterialCommunityIcons
                name="pencil"
                size={30}
                color={colors.darkGrey}
              />
            </RoundButton>
            <Text style={styles.buttonSubtitle}>Edit Info</Text>
          </View>
        </View>
      </View>
      <View style={styles.curve}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: "100%",
    alignItems: "center",
    position: "relative"
  },
  nameAge: {
    fontSize: 25,
    fontWeight: "bold"
  },
  centralActionContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: 30
  },
  buttonSubtitle: {
    color: colors.darkGrey
  },
  whiteContainer: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
    height: "60%",
    zIndex: 2
  },
  curve: {
    backgroundColor: "white",
    borderBottomLeftRadius: 800,
    borderBottomRightRadius: 800,
    height: 700,
    width: 700,
    position: "absolute",
    bottom: 150,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)"
  }
});

export default ProfileOverview;

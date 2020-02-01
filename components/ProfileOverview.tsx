import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "./UI-Kit";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { RoundButton, colors } from "./UI-Kit";
import { CandidateData } from "../interfaces";
const ProfileOverview = ({ data }: { data: CandidateData }) => {
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
            <RoundButton color={colors.grey} onPress={() => {}}>
              <FontAwesome name="gear" size={30} color={colors.darkGrey} />
            </RoundButton>
            <Text style={styles.buttonSubtitle}>Settings</Text>
          </View>
          <View style={{ paddingTop: 15 }}>
            <View style={{ position: "relative" }}>
              <RoundButton color={colors.red} onPress={() => {}}>
                <FontAwesome name="camera" size={30} color="white" />
              </RoundButton>
              <View style={{ position: "absolute", right: 0, bottom: 0 }}>
                <RoundButton size={20} border onPress={() => {}}>
                  <MaterialCommunityIcons
                    name="plus"
                    size={15}
                    color={colors.red}
                  />
                </RoundButton>
              </View>
            </View>
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
      <View style={styles.myPlusButton}>
        <RoundButton shadow height={40} width={120} onPress={() => {}}>
          <Text style={{ color: colors.red }}>My Plus</Text>
        </RoundButton>
      </View>
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
  },
  myPlusButton: {
    padding: 10,
    position: "absolute",
    bottom: 10
  }
});

export default ProfileOverview;

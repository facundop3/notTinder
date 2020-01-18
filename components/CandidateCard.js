import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "./UI-Kit";
const CandidateCard = props => {
  const { toggleCandidateModal, data } = props;
  const { pictures } = data;
  const [currentPic, setCurrentPic] = useState(0);
  const changePic = n => {
    const nextIndex = n + currentPic;
    if (nextIndex >= 0 && nextIndex < pictures.length) {
      setCurrentPic(nextIndex);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={pictures[currentPic]} />
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>LIKE</Text>
        </View>
        <View style={styles.nopeContainer}>
          <Text style={styles.nopeText}>Nope</Text>
        </View>
        <View style={styles.superLikeContainer}>
          <Text style={styles.superLikeText}>SUPER</Text>
          <Text style={styles.superLikeText}>LIKE</Text>
        </View>
        <View style={styles.candidateDataContainer}>
          <Text style={styles.nameAndAge}>
            <Text style={styles.candidateName}>{data.name}</Text> {data.age}
          </Text>
          <Text style={styles.smallWhiteText}>
            <Ionicons name="md-school" size={20} /> {data.school}
          </Text>
          <Text style={styles.smallWhiteText}>
            <MaterialIcons name="location-on" size={20} /> {data.datingCity}
          </Text>
        </View>
      </View>

      <TouchableWithoutFeedback onPress={() => changePic(1)}>
        <View style={styles.nextPic}></View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => changePic(-1)}>
        <View style={styles.previusPic}></View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleCandidateModal}>
        <View style={styles.openInfo}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "100%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative"
  },
  imageContainer: {
    position: "relative"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  candidateDataContainer: {
    position: "absolute",
    bottom: 20,
    left: 10,
    display: "flex",
    color: "red"
  },
  nameAndAge: {
    color: "white",
    fontSize: 25
  },
  smallWhiteText: {
    color: "white",
    fontSize: 15
  },
  candidateName: {
    fontWeight: "bold"
  },
  nextPic: {
    // backgroundColor: "green",
    height: "80%",
    width: "50%",
    right: 0,
    position: "absolute"
  },
  previusPic: {
    // backgroundColor: "red",
    height: "80%",
    width: "50%",
    left: 0,
    position: "absolute"
  },
  openInfo: {
    // backgroundColor: "blue",
    height: "20%",
    width: "100%",
    bottom: 0,
    position: "absolute"
  },
  likeContainer: {
    position: "absolute",
    borderWidth: 4,
    borderColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    top: 40,
    left: 30,
    transform: [{ rotate: "-25deg" }]
  },
  nopeContainer: {
    position: "absolute",
    borderWidth: 4,
    borderColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    top: 40,
    right: 30,
    transform: [{ rotate: "25deg" }]
  },
  superLikeContainer: {
    position: "absolute",
    borderWidth: 4,
    borderColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    bottom: 100,
    left: 100,
    transform: [{ rotate: "-25deg" }]
  },
  likeText: {
    color: colors.green,
    fontSize: 55,
    fontWeight: "bold"
  },
  nopeText: {
    color: colors.red,
    fontSize: 55,
    fontWeight: "bold"
  },
  superLikeText: {
    color: colors.blue,
    fontSize: 45,
    fontWeight: "bold"
  }
});

export default CandidateCard;
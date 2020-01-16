import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const CandidateCard = props => {
  const { toggleCandidateModal, data } = props;
  return (
    <TouchableWithoutFeedback onPress={toggleCandidateModal}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/sample-girl-1.jpeg")}
          />
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "100%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    overflow: "hidden"
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
  }
});

export default CandidateCard;

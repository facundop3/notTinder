import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

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
          <View style={styles.actionsContainer}>
            <TouchableOpacity style={styles.button}>
              <FontAwesomeIcon icon={faThumbsUp} color="green" size={40} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <FontAwesomeIcon icon={faThumbsDown} color="red" size={40} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <Text>
            {data.name}, {data.age}
          </Text>
          <Text>{data.datingCity}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    height: 300
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: -25
  },
  button: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50
  }
});

export default CandidateCard;

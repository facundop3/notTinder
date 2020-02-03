import React, { useState, FC, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated from "react-native-reanimated";
import { colors } from "./UI-Kit";
import { CandidateData } from "../interfaces";
import { PanGestureHandler } from "react-native-gesture-handler";
import useSwipe from "./useSwipe";
import CandidateModal from "./CandidateModal";

const candidatesList: CandidateData[] = [
  {
    id: "candidate-1",
    name: "Beer ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("../assets/images/beer-min.jpeg"),
      require("../assets/images/sample-girl-1-min.jpeg"),
      require("../assets/images/sample-girl-2-min.jpg"),
      require("../assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-2",
    name: "Karen ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("../assets/images/sample-girl-1-min.jpeg"),
      require("../assets/images/beer-min.jpeg"),
      require("../assets/images/sample-girl-2-min.jpg"),
      require("../assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-3",
    name: "Nicole ",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("../assets/images/sample-girl-2-min.jpg"),
      require("../assets/images/beer-min.jpeg"),
      require("../assets/images/sample-girl-1-min.jpeg"),
      require("../assets/images/sample-girl-3-min.jpg")
    ]
  },
  {
    id: "candidate-4",
    name: "Ema",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("../assets/images/sample-girl-3-min.jpg"),
      require("../assets/images/beer-min.jpeg"),
      require("../assets/images/sample-girl-1-min.jpeg"),
      require("../assets/images/sample-girl-2-min.jpg")
    ]
  },
  {
    id: "candidate-5",
    name: "Ema5",
    age: 24,
    datingCity: "Montevideo",
    hometown: "Montevideo",
    company: "Disco",
    school: "Universidad de la Republica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
    pictures: [
      require("../assets/images/sample-girl-3-min.jpg"),
      require("../assets/images/beer-min.jpeg"),
      require("../assets/images/sample-girl-1-min.jpeg"),
      require("../assets/images/sample-girl-2-min.jpg")
    ]
  }
];

const CandidateCard: FC = () => {
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);
  const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const sampleCallback = isLike => {
    console.log(isLike ? "LIKE" : "NOPE");
    // setCurrentIndex((currentIndex + 1) % candidates.length);
    const [toRemove, ...newCandidates] = candidates;
    setCandidates(newCandidates);
  };

  const {
    onGestureEvent,
    likeOpacity,
    nopeOpacity,
    superLikeOpacity,
    style
  } = useSwipe(sampleCallback);

  const [currentPic, setCurrentPic] = useState(0);

  const changePic = (n, length) => {
    console.log("change pic " + currentPic);
    const nextIndex = n + currentPic;
    if (nextIndex >= 0 && nextIndex < length) {
      setCurrentPic(nextIndex);
    }
  };

  const renderCards = data => {
    return (
      <PanGestureHandler
        onHandlerStateChange={onGestureEvent}
        {...{ onGestureEvent }}
      >
        <Animated.View {...{ style }}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={data.pictures[0]}
                key={data.id}
              />
              <Animated.View
                style={[styles.likeContainer, { opacity: likeOpacity }]}
              >
                <Text style={styles.likeText}>LIKE</Text>
              </Animated.View>
              <Animated.View
                style={[styles.nopeContainer, { opacity: nopeOpacity }]}
              >
                <Text style={styles.nopeText}>Nope</Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.superLikeContainer,
                  { opacity: superLikeOpacity }
                ]}
              >
                <Text style={styles.superLikeText}>SUPER</Text>
                <Text style={styles.superLikeText}>LIKE</Text>
              </Animated.View>
              <View style={styles.candidateDataContainer}>
                <Text style={styles.nameAndAge}>
                  <Text style={styles.candidateName}>{data.name}</Text>{" "}
                  {data.age}
                </Text>
                <Text style={styles.smallWhiteText}>
                  <Ionicons name="md-school" size={20} /> {data.school}
                </Text>
                <Text style={styles.smallWhiteText}>
                  <MaterialIcons name="location-on" size={20} />{" "}
                  {data.datingCity}
                </Text>
              </View>
            </View>

            <TouchableWithoutFeedback
              onPress={() => changePic(1, data.pictures.length)}
            >
              <View style={styles.nextPic}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => changePic(-1, data.pictures.length)}
            >
              <View style={styles.previusPic}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={toggleCandidateModal}>
              <View style={styles.openInfo}></View>
            </TouchableWithoutFeedback>
          </View>
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <>
      {candidates.map(renderCards)}
      <CandidateModal
        showCandidateModal={showCandidateModal}
        toggleCandidateModal={toggleCandidateModal}
        data={candidates[0]}
        key={candidates[0].id + "-modal"}
      />
    </>
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

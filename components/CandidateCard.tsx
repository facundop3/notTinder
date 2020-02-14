import React, { useState, FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "./UI-Kit";
import { Candidate } from "../interfaces";
import CandidateModal from "./CandidateModal";
const CandidateCard: FC<Candidate> = props => {
  const {
    data,
    likeOpacity = 0,
    nopeOpacity = 0,
    superLikeOpacity = 0
  } = props;

  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);
  const [currentPic, setCurrentPic] = useState(0);

  const changePic = (n, length) => {
    const nextIndex = n + currentPic;
    if (nextIndex >= 0 && nextIndex < length) {
      setCurrentPic(nextIndex);
    }
  };
  // //// wip
  const { width, height } = Dimensions.get("window");
  const horizontalSwipeBreakpoint = 0.25 * width;
  const verticalSwipeBreakPoint = 0.25 * height;
  const position = new Animated.ValueXY();
  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 }
    }).start();
  };
  const onSwipeCompleted = () => {};

  const verticalSwipe = () => {
    Animated.timing(position, {
      toValue: { x: 0, y: -height },
      duration: 500
    }).start();
  };
  const horizontalSwipe = (isRight = false) => {
    const translateX = (isRight ? 1 : -1) * width;
    Animated.timing(position, {
      toValue: { x: translateX, y: 0 },
      duration: 250
    }).start(() => {
      onSwipeCompleted();
    });
    console.log("Liked");
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const { dx, dy } = gesture;
      position.setValue({ x: dx, y: dy });
      console.log(dx);
      console.log(dy);
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > horizontalSwipeBreakpoint) {
        horizontalSwipe(true);
        console.log("Like");
      } else if (gesture.dx < -horizontalSwipeBreakpoint) {
        horizontalSwipe();
        console.log("Nope");
      } else if (gesture.dy < verticalSwipeBreakPoint) {
        verticalSwipe();
        console.log("Super Like");
      } else {
        resetPosition();
        console.log("reset");
      }
    }
  });

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      // We increase the range to make the rotation increase slowlier
      inputRange: [-width * 1.5, 0, width * 1.5],
      outputRange: ["120deg", "0deg", "-120deg"]
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  const renderCards = data => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={data.pictures[currentPic]}
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
            style={[styles.superLikeContainer, { opacity: superLikeOpacity }]}
          >
            <Text style={styles.superLikeText}>SUPER</Text>
            <Text style={styles.superLikeText}>LIKE</Text>
          </Animated.View>
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
    );
  };

  return (
    <>
      {renderCards(data)}
      <CandidateModal
        showCandidateModal={showCandidateModal}
        toggleCandidateModal={toggleCandidateModal}
        data={data}
        key={data.id + "-modal"}
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

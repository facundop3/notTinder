import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  Dimensions
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import * as firebase from "firebase";
import CandidateCard from "../components/CandidateCard";
import CandidateModal from "../components/CandidateModal";
import TopNavigation from "../components/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import useSwipe from "../components/useSwipe";
import { CandidateData } from "../interfaces";
import { Styles } from "react-native-svg";

const sampleCandidateData: CandidateData = {
  id: "random",
  name: "Beer ",
  age: 24,
  datingCity: "Montevideo",
  hometown: "Montevideo",
  company: "Disco",
  school: "Universidad de la Republica",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
  pictures: [
    require("../assets/images/beer.jpeg"),
    require("../assets/images/sample-girl-1.jpeg"),
    require("../assets/images/sample-girl-2.jpg"),
    require("../assets/images/sample-girl-3.jpg")
  ]
};

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
      require("../assets/images/beer.jpeg"),
      require("../assets/images/sample-girl-1.jpeg"),
      require("../assets/images/sample-girl-2.jpg"),
      require("../assets/images/sample-girl-3.jpg")
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
      require("../assets/images/sample-girl-1.jpeg"),
      require("../assets/images/beer.jpeg"),
      require("../assets/images/sample-girl-2.jpg"),
      require("../assets/images/sample-girl-3.jpg")
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
      require("../assets/images/sample-girl-2.jpg"),
      require("../assets/images/beer.jpeg"),
      require("../assets/images/sample-girl-1.jpeg"),
      require("../assets/images/sample-girl-3.jpg")
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
      require("../assets/images/sample-girl-3.jpg"),
      require("../assets/images/beer.jpeg"),
      require("../assets/images/sample-girl-1.jpeg"),
      require("../assets/images/sample-girl-2.jpg")
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
      require("../assets/images/sample-girl-3.jpg"),
      require("../assets/images/beer.jpeg"),
      require("../assets/images/sample-girl-1.jpeg"),
      require("../assets/images/sample-girl-2.jpg")
    ]
  }
];
export default function HomeScreen(props) {
  const { width, height } = Dimensions.get("screen");
  const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sampleCallback = isLike => {
    console.log(isLike ? "LIKE" : "NOPE");
    setCurrentIndex((currentIndex + 1) % candidates.length);
  };

  const {
    tempTranslationX,
    tempTranslationY,
    gestureState,
    velocityX,
    translationX,
    translationY
  } = useSwipe(sampleCallback);
  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);
  const rotateZ = Animated.concat(
    Animated.interpolate(translationX, {
      inputRange: [-width / 2, width / 2],
      outputRange: [15, -15],
      extrapolate: Animated.Extrapolate.CLAMP
    }),
    "deg"
  );
  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX,
          translationY,
          velocityX,
          state: gestureState
        }
      }
    ],
    {
      useNativeDriver: true
    }
  );

  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);
  const likeOpacity = Animated.interpolate(translationX, {
    inputRange: [0, width / 4],
    outputRange: [0, 1],
    extrapolate: Animated.Extrapolate.CLAMP
  });
  const nopeOpacity = Animated.interpolate(translationX, {
    inputRange: [-width / 4, 0],
    outputRange: [1, 0],
    extrapolate: Animated.Extrapolate.CLAMP
  });
  const superLikeOpacity = Animated.interpolate(translationY, {
    inputRange: [-height / 4, 0],
    outputRange: [1, 0],
    extrapolate: Animated.Extrapolate.CLAMP
  });
  const style = {
    ...StyleSheet.absoluteFillObject,
    zIndex: 900,
    transform: [
      { translateX: tempTranslationX },
      { translateY: tempTranslationY },
      { rotateZ }
    ]
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TopNavigation navToChat={() => props.navigation.navigate("Links")} />
        <View style={styles.cardContainer}>
          {/* {candidates.reverse().map(candidate => ( */}
          <CandidateCard
            key={"test"}
            data={candidates[(currentIndex + 1) % candidates.length]}
            picture={
              candidates[(currentIndex + 1) % candidates.length].pictures[0]
            }
          />
          {/* // ))} */}
          <PanGestureHandler
            onHandlerStateChange={onGestureEvent}
            {...{ onGestureEvent }}
          >
            <Animated.View {...{ style }}>
              <CandidateCard
                {...{ likeOpacity, nopeOpacity, superLikeOpacity }}
                toggleCandidateModal={toggleCandidateModal}
                data={candidates[currentIndex]}
                picture={candidates[currentIndex].pictures[0]}
              />
            </Animated.View>
          </PanGestureHandler>
          <CandidateModal
            showCandidateModal={showCandidateModal}
            toggleCandidateModal={toggleCandidateModal}
            data={candidates[currentIndex]}
          />
        </View>
        <ActionButtons />
        <View>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create<Styles>({
  safeView: {
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  cardContainer: {
    height: 650,
    alignItems: "center"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});

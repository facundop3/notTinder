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
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

import * as firebase from "firebase";
import CandidateCard from "../components/CandidateCard";
import CandidateModal from "../components/CandidateModal";
import TopNavigation from "../components/TopNavigator";
import ActionButtons from "../components/ActionButtons";

const sampleCandidateData = {
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

const candidatesList = [
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
  }
];

function runSpring(clock, value, dest) {
  const {
    cond,
    spring,
    set,
    clockRunning,
    startClock,
    Value,
    stopClock
  } = Animated;
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0)
  };

  const config = {
    damping: 20,
    mass: 1,
    stiffness: 100,
    overshootClamping: false,
    restSpeedThreshold: 1,
    restDisplacementThreshold: 0.5,
    toValue: new Value(0)
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, 0),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position
  ];
}

export default function HomeScreen(props) {
  const { width, height } = Dimensions.get("screen");
  const [candidates, setCandidates] = useState(candidatesList);
  const [translationX] = useState(new Animated.Value(0));
  const [translationY] = useState(new Animated.Value(0));
  const [velocityX] = useState(new Animated.Value(0));
  const [gestureState] = useState(new Animated.Value(State.UNDETERMINED));
  const [lastCandidate, setLastCandidate] = useState(candidates[0]);
  const [offsetX] = useState(new Animated.Value(0));
  const [offsetY] = useState(new Animated.Value(0));

  const init = () => {
    const {
      cond,
      eq,
      set,
      Clock,
      and,
      lessThan,
      greaterThan,
      clockRunning,
      neq,
      call,
      multiply,
      add,
      stopClock
    } = Animated;
    const clockX = new Clock();
    const clockY = new Clock();
    offsetY.setValue(0);
    offsetX.setValue(0);
    velocityX.setValue(0);
    translationX.setValue(0);
    translationY.setValue(0);
    gestureState.setValue(Animated.UNDETERMINED);
    const translationThreshold = width / 4;
    const finalTranslateX = add(translationX, multiply(0.2, velocityX));
    const onSwiped = ([translateX]) => {
      //TODO onSwiped is being called twice every
      const [removedCandidate, ...noLastCandidate] = candidates;
      setCandidates(noLastCandidate);
      if (translateX > 0) {
        console.log("LIKE ");
      } else {
        console.log("NOPE");
      }
    };
    const snapPoint = cond(
      lessThan(finalTranslateX, -translationThreshold),
      -width,
      cond(greaterThan(finalTranslateX, translationThreshold), width, 0)
    );

    const tempTranslationX = cond(
      eq(gestureState, State.END),
      [
        set(translationX, runSpring(clockX, translationX, snapPoint)),
        set(offsetX, translationX),
        cond(and(eq(clockRunning(clockX), 0), neq(translationX, 0)), [
          call([translationX], onSwiped)
        ]),
        translationX
      ],
      cond(
        eq(gestureState, State.BEGAN),
        [stopClock(clockX), translationX],
        translationX
      )
    );

    const tempTranslationY = cond(
      eq(gestureState, State.END),
      [
        set(translationY, runSpring(clockY, translationY, 0)),
        set(offsetY, translationY),
        translationY
      ],
      cond(
        eq(gestureState, State.BEGAN),
        [stopClock(clockY), translationY],
        translationY
      )
    );
    return { tempTranslationX, tempTranslationY };
  };
  useEffect(() => {
    const [last] = candidates;
    setLastCandidate(last);
    init();
  }, [candidates]);

  const { tempTranslationX, tempTranslationY } = init();
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
          {candidates.reverse().map(candidate => (
            <CandidateCard key={candidate.id} data={candidate} />
          ))}
          <PanGestureHandler
            onHandlerStateChange={onGestureEvent}
            {...{ onGestureEvent }}
          >
            <Animated.View {...{ style }}>
              <CandidateCard
                {...{ likeOpacity, nopeOpacity, superLikeOpacity }}
                toggleCandidateModal={toggleCandidateModal}
                data={lastCandidate}
              />
            </Animated.View>
          </PanGestureHandler>
          <CandidateModal
            showCandidateModal={showCandidateModal}
            toggleCandidateModal={toggleCandidateModal}
            data={lastCandidate}
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

const styles = StyleSheet.create({
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

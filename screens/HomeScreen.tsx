import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Animated,
  Dimensions,
} from "react-native";

// import Radar from "../components/Radar";
import CandidatesDeck from "../components/CandidatesDeck";
import TopNavigation from "../navigation/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import { candidatesList as candidates } from "../sampleData";
import { getNearbyUsers } from "../utils";

function HomeScreen(props) {
  const { width, height } = Dimensions.get("window");
  const candidateCardPosition = new Animated.ValueXY();
  const [currentCandidatendex, setCurrentCardIndex] = useState(0);
  const [isGlodPage, setIsGoldPage] = useState<boolean>(false);
  useEffect(() => {
    getNearbyUsers()
      .then((res) => res.json())
      .then(console.log);
  }, []);
  const verticalSwipe = () => {
    Animated.timing(candidateCardPosition, {
      toValue: { x: 0, y: -height },
      duration: 500,
    }).start(() => resetPosition(true));
  };

  const horizontalSwipe = (isRight = false) => {
    const translateX = (isRight ? 1 : -1) * width * 1.5;
    Animated.timing(candidateCardPosition, {
      toValue: { x: translateX, y: 0 },
      duration: 400,
    }).start(() => resetPosition(true));
    console.log("Liked");
  };

  const resetPosition = (completed) => {
    if (completed) {
      setCurrentCardIndex((currentCandidatendex + 1) % candidates.length);
    }
    Animated.spring(candidateCardPosition, {
      toValue: { x: 0, y: 0 },
    }).start();
  };

  const navTo = (page: string, params: object = {}) => {
    props.navigation.navigate(page, params);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.contentContainer}>
        <TopNavigation
          navTo={navTo}
          switchValue={isGlodPage}
          handleSwitchChange={setIsGoldPage}
        />
        {!isGlodPage && (
          <>
            <View style={styles.cardContainer}>
              <CandidatesDeck
                candidateCardPosition={candidateCardPosition}
                candidates={candidates}
                verticalSwipe={verticalSwipe}
                horizontalSwipe={horizontalSwipe}
                resetPosition={resetPosition}
                currentCandidatendex={currentCandidatendex}
              />
              {/* <Radar /> */}
            </View>
            <ActionButtons
              horizontalSwipe={horizontalSwipe}
              verticalSwipe={verticalSwipe}
              deviceHeight={height}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create<any>({
  contentContainer: {
    height: "100%"
  },
  safeView: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  cardContainer: {
    height: "80%",
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
});

export default HomeScreen;

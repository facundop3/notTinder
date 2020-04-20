import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Animated,
  Dimensions
} from "react-native";

// import Radar from "../components/Radar";
import TopNavigation from "../navigation/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import { candidatesList as candidates } from "../sampleData";
import { getNearbyUsers } from "../utils";
import { SafeAreaModal, MediaCard, SwipeableWrapper } from 'nottinderuikit'
import CandidateProfile from '../components/CandidateProfile'
import DataPreview from '../components/DataPreview'
function HomeScreen(props) {
  const { width, height } = Dimensions.get("window");
  const candidateCardPosition = new Animated.ValueXY();
  const [currentCandidatendex, setCurrentCardIndex] = useState(0);
  const [isGlodPage, setIsGoldPage] = useState<boolean>(false);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextCandidate = () => setCurrentCardIndex((currentCandidatendex + 1) % candidates.length)
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);
  const nextCurrentImageIndex = (n, length) => {
    const nextIndex = n + currentImageIndex;
    if (nextIndex >= 0 && nextIndex < length) {
      setCurrentImageIndex(nextIndex);
    }
  };
  const verticalCallback = () => {
    console.log("verticalCallback")
    nextCandidate()

  }
  const horizontalCallback = (isLeftToRight: boolean) => {
    if (isLeftToRight) {
      console.log("Is left to right")
    } else {
      console.log("Is right to left")
    }
    nextCandidate()
  }

  const verticalSwipe = () => {
    Animated.timing(candidateCardPosition, {
      toValue: { x: 0, y: -height },
      duration: 500,
    }).start(() => {
      verticalCallback()
      resetPosition()
    });
  };

  const horizontalSwipe = (isLeftToRight = false) => {
    const translateX = (isLeftToRight ? 1 : -1) * width * 1.5;
    Animated.timing(candidateCardPosition, {
      toValue: { x: translateX, y: 0 },
      duration: 400,
    }).start(() => {
      horizontalCallback(isLeftToRight)
      resetPosition()
    });
  };

  const resetPosition = (delay: number = 0) => {
    Animated.timing(candidateCardPosition, {
      toValue: { x: 0, y: 0 },
      duration: 250,
      delay
    }).start();
  };
  const navTo = (page: string, params: object = {}) => {
    props.navigation.navigate(page, params);
  };

  useEffect(() => {
    getNearbyUsers()
      .then((res) => res.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    // Restores initial candidateCardPosition when currentCardIndex changes
    // So the next candidate shows in the initial position :)
    resetPosition(200)
  }, [currentCandidatendex]);
  return (
    <>
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
                <SwipeableWrapper
                  verticalCallback={verticalCallback}
                  horizontalCallback={horizontalCallback}
                  animatedDefaultPosition={candidateCardPosition}
                >
                  <MediaCard
                    animatedCardPosition={candidateCardPosition}
                    leftLabel="Like"
                    rightLabel="Nope"
                    downLabel="Super Like"
                    onBottomPress={toggleCandidateModal}
                    images={candidates[currentCandidatendex].pictures}
                    currentImageIndex={currentImageIndex}
                    handleCurrentImageChange={nextCurrentImageIndex}
                    bottomData={<DataPreview data={candidates[currentCandidatendex]} />} />
                </SwipeableWrapper>
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
      <SafeAreaModal visible={showCandidateModal}>
        <CandidateProfile
          data={candidates[currentCandidatendex]}
          isModal
          toggleCandidateModal={toggleCandidateModal}
          nextCurrentImageIndex={nextCurrentImageIndex}
          currentImageIndex={currentImageIndex}
        />
      </SafeAreaModal>
    </>
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

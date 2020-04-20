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
import { candidatesList } from "../sampleData";
import { getNearbyUsers } from "../utils";
import { SafeAreaModal, MediaCard, SwipeableWrapper } from 'nottinderuikit'
import CandidateProfile from '../components/CandidateProfile'
import DataPreview from '../components/DataPreview'
function HomeScreen(props) {
  const { width, height } = Dimensions.get("window");
  const [candidatesAndPositions, setCandidatesAndPositions] = useState(candidatesList.map(candidate => ({ candidate, position: new Animated.ValueXY() })));
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(candidatesAndPositions.length - 1)
  const [isGlodPage, setIsGoldPage] = useState<boolean>(false);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextCandidate = () => {
    candidatesAndPositions.pop()
    setCandidatesAndPositions([...candidatesAndPositions])
  }
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
    Animated.timing(candidatesAndPositions[0].position, {
      toValue: { x: 0, y: -height },
      duration: 500,
    }).start(() => {
      verticalCallback()
      resetPosition()
    });
  };

  const horizontalSwipe = (isLeftToRight = false) => {
    const translateX = (isLeftToRight ? 1 : -1) * width * 1.5;
    Animated.timing(candidatesAndPositions[0].position, {
      toValue: { x: translateX, y: 0 },
      duration: 400,
    }).start(() => {
      horizontalCallback(isLeftToRight)
      resetPosition()
    });
  };

  const resetPosition = (delay: number = 0) => {
    // Animated.timing(candidateCardPosition, {
    //   toValue: { x: 0, y: 0 },
    //   duration: 250,
    //   delay
    // }).start();
  };
  const navTo = (page: string, params: object = {}) => {
    props.navigation.navigate(page, params);
  };
  useEffect(() => {
    console.log('rendered')
    console.log(candidatesAndPositions.map(({ candidate: { name } }) => name))
  })

  useEffect(() => {
    getNearbyUsers()
      .then((res) => res.json())
      .then(console.log);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [candidatesAndPositions])

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View>
          <TopNavigation
            navTo={navTo}
            switchValue={isGlodPage}
            handleSwitchChange={setIsGoldPage}
          />
          {!isGlodPage && (
            <>
              <View style={styles.cardContainer}>
                {
                  candidatesAndPositions.map(({ candidate, position }) => (
                    <View key={candidate.id} style={{
                      position: "absolute",
                      width: "100%",
                      height: '100%'
                    }}>
                      <SwipeableWrapper
                        verticalCallback={verticalCallback}
                        horizontalCallback={horizontalCallback}
                        animatedDefaultPosition={position}
                      >
                        <MediaCard
                          animatedCardPosition={position}
                          leftLabel="Like"
                          rightLabel="Nope"
                          downLabel="Super Like"
                          onBottomPress={toggleCandidateModal}
                          images={candidate.pictures}
                          currentImageIndex={currentImageIndex}
                          handleCurrentImageChange={nextCurrentImageIndex}
                          bottomData={<DataPreview data={candidate} />} />
                      </SwipeableWrapper>
                    </View>
                  ))
                }
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
          data={candidatesAndPositions[candidatesAndPositions.length - 1].candidate}
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
  safeView: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  cardContainer: {
    height: "80%",
    position: "relative"
  }
});

export default HomeScreen;

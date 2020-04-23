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

import Radar from "../components/Radar";
import TopNavigation from "../navigation/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import { candidatesList } from "../sampleData";
// import { getNearbyUsers } from "../utils";
import { SafeAreaModal, MediaCard, SwipeableWrapper } from 'nottinderuikit'
import CandidateProfile from '../components/CandidateProfile'
import DataPreview from '../components/DataPreview'
import { getImageSourceFromCache } from "../utils";
function HomeScreen(props) {
  const { width, height } = Dimensions.get("window");
  const [candidatesAndPositions, setCandidatesAndPositions] = useState(candidatesList.map(candidate => ({ candidate, position: new Animated.ValueXY() })));
  const [isGlodPage, setIsGoldPage] = useState<boolean>(false);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [profileImageSource, setProfileImageSource] = useState<any>(null);
  const getNextCardScale = () => {
    const { diffClamp, add } = Animated
    const dxBasedScale = candidatesAndPositions[candidatesAndPositions.length - 1].position?.x.interpolate({
      inputRange: [-width / 4, 0, width / 4],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
    const dyBasedScale = candidatesAndPositions[candidatesAndPositions.length - 1].position?.y.interpolate({
      inputRange: [-height / 4, 0, height / 4],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    });
    return diffClamp(add(dxBasedScale, dyBasedScale), .8, 1)
  }

  const nextCandidate = () => {
    if (!candidatesAndPositions.length) return
    candidatesAndPositions.pop()
    setCandidatesAndPositions([...candidatesAndPositions])

  }
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);
  const nextCurrentImageIndex = (n) => {
    const { candidate } = candidatesAndPositions[candidatesAndPositions.length - 1]
    const nextIndex = n + currentImageIndex;
    if (nextIndex >= 0 && nextIndex < candidate.pictures.length) {
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
    if (!candidatesAndPositions.length) return
    Animated.timing(candidatesAndPositions[candidatesAndPositions.length - 1]?.position, {
      toValue: { x: 0, y: -height },
      duration: 500,
    }).start(verticalCallback);
  };

  const horizontalSwipe = (isLeftToRight = false) => {
    if (!candidatesAndPositions.length) return
    const translateX = (isLeftToRight ? 1 : -1) * width * 1.5;
    Animated.timing(candidatesAndPositions[candidatesAndPositions.length - 1]?.position, {
      toValue: { x: translateX, y: 0 },
      duration: 400,
    }).start(() => {
      horizontalCallback(isLeftToRight)
    });
  };
  const navTo = (page: string, params: object = {}) => {
    props.navigation.navigate(page, params);
  };

  // useEffect(() => {
  //   getNearbyUsers()
  //     .then((res) => res.json())
  //     .then(console.log);
  // }, []);
  useEffect(() => {
    getImageSourceFromCache("", "profile-image-0")
      .then(img => {
        console.log("image from cache", img)
        setProfileImageSource(img)
      })
      .catch(err => {
        console.error(err)
      })
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
                  candidatesAndPositions.length ?
                    candidatesAndPositions.map(({ candidate, position }, i) => {
                      const length = candidatesAndPositions.length
                      const scale = length - 1 === i ? 1 : getNextCardScale()
                      return (
                        <Animated.View key={candidate.id} style={[{
                          position: "absolute",
                          width: "100%",
                          height: '100%'
                        }, { transform: [{ scale }] }]}>
                          <SwipeableWrapper
                            verticalCallback={verticalCallback}
                            horizontalCallback={horizontalCallback}
                            positionXY={position}
                          >
                            <MediaCard
                              positionXY={position}
                              leftLabel="Like"
                              rightLabel="Nope"
                              downLabel="Super Like"
                              onBottomPress={toggleCandidateModal}
                              images={candidate.pictures}
                              currentImageIndex={currentImageIndex}
                              handleCurrentImageChange={nextCurrentImageIndex}
                              bottomData={<DataPreview data={candidate} />} />
                          </SwipeableWrapper>
                        </Animated.View>
                      )
                    })
                    :
                    <Radar avatarSource={profileImageSource} />
                }
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
          data={candidatesAndPositions[candidatesAndPositions.length - 1]?.candidate}
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
    paddingHorizontal: 10,
    position: "relative",
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;

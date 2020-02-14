import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import { CandidateData } from "../interfaces";
import { candidatesList } from "../sampleData";
import { Animated, PanResponder, Dimensions, View } from "react-native";
// import makeSwipable from "./makeSwipable";

const CandidatesDeck = () => {
  const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sampleCallback = isLike => {
    console.log(isLike ? "LIKE" : "NOPE");
    setCurrentIndex((currentIndex + 1) % candidates.length);
  };

  useEffect(() => {
    console.log(`current index: ${currentIndex}`);
  }, [currentIndex]);

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
  // const SwipableCard = makeSwipable(CandidateCard, sampleCallback);

  return (
    // <SwipableCard
    //   {...candidates[currentIndex]}
    //   key={candidates[currentIndex].id}
    // />
    <View style={{ width: "100%" }}>
      <Animated.View
        style={{ ...getCardStyle() }}
        {...panResponder.panHandlers}
      >
        <CandidateCard data={candidates[currentIndex]} />
      </Animated.View>
    </View>
  );
};

export default CandidatesDeck;
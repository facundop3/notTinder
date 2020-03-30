import React, { useState, useEffect, FC } from "react";
import CandidateCard from "./CandidateCard";
import { CandidateData } from "../interfaces";
// import { candidatesList } from "../sampleData";
import { Animated, PanResponder, Dimensions, View } from "react-native";

interface Props {
  candidateCardPosition: any;
  candidates: CandidateData[];
  verticalSwipe: () => void;
  horizontalSwipe: (isLike: boolean) => void;
  resetPosition: (isCompleted: boolean) => void;
  currentCandidatendex: number;
}
const CandidatesDeck: FC<Props> = ({
  candidateCardPosition,
  candidates,
  verticalSwipe,
  horizontalSwipe,
  resetPosition,
  currentCandidatendex
}) => {
  // const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  // const [currentCandidatendex, setcurrentCandidatendex] = useState(0);

  useEffect(() => {
    console.log(`current index: ${currentCandidatendex}`);
    resetPosition(false);
  }, [currentCandidatendex]);
  // Wip
  const { width, height } = Dimensions.get("window");
  const horizontalSwipeBreakpoint = 0.25 * width;
  const verticalSwipeBreakPoint = 0.25 * height;
  const position = candidateCardPosition;
  // const resetPosition = completed => {
  //   if (completed) {
  //     setcurrentCandidatendex((currentCandidatendex + 1) % candidates.length);
  //   }
  //   Animated.spring(position, {
  //     toValue: { x: 0, y: 0 }
  //   }).start();
  // };

  // const verticalSwipe = () => {
  //   Animated.timing(position, {
  //     toValue: { x: 0, y: -height },
  //     duration: 500
  //   }).start(() => resetPosition(true));
  // };
  // const horizontalSwipe = (isRight = false) => {
  //   const translateX = (isRight ? 1 : -1) * width * 1.5;
  //   Animated.timing(position, {
  //     toValue: { x: translateX, y: 0 },
  //     duration: 400
  //   }).start(() => resetPosition(true));
  //   console.log("Liked");
  // };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (event, gesture) => {
      const { dx, dy } = gesture;
      return Boolean(dx && dy);
    },
    onPanResponderMove: (event, gesture) => {
      const { dx, dy } = gesture;
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > horizontalSwipeBreakpoint) {
        horizontalSwipe(true);
        console.log("Like");
      } else if (gesture.dx < -horizontalSwipeBreakpoint) {
        horizontalSwipe(false);
        console.log("Nope");
      } else if (gesture.dy < -verticalSwipeBreakPoint) {
        verticalSwipe();
        console.log("Super Like");
      } else {
        resetPosition(false);
        console.log("reset");
      }
    }
  });

  const getOpacities = () => {
    const likeOpacity = position.x.interpolate({
      inputRange: [0, width / 4],
      outputRange: [0, 1]
    });

    const nopeOpacity = position.x.interpolate({
      inputRange: [-width / 4, 0],
      outputRange: [1, 0]
    });
    const superLikeOpacity = position.y.interpolate({
      inputRange: [-height / 4, 0],
      outputRange: [1, 0]
    });
    return { likeOpacity, nopeOpacity, superLikeOpacity };
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      // We increase the range to make the rotation increase slowlier
      inputRange: [-width * 1.5, 0, width * 1.5],
      outputRange: ["120deg", "0deg", "-120deg"]
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
      justifyContent: "center",
      alignItems: "center"
    };
  };

  return (
    <View style={{ width: "100%" }}>
      <Animated.View style={getCardStyle()} {...panResponder.panHandlers}>
        <CandidateCard
          data={candidates[currentCandidatendex]}
          opacities={getOpacities()}
        />
      </Animated.View>
    </View>
  );
};

export default CandidatesDeck;

import React, { useEffect, FC } from "react";
import { Animated, PanResponder, Dimensions, View } from "react-native";
import { CandidateData } from "../interfaces";
import { MediaCard } from 'nottinderuikit'
import DataPreview from './DataPreview';

interface Props {
  candidateCardPosition: any;
  candidates: CandidateData[];
  verticalSwipe: () => void;
  horizontalSwipe: (isLike: boolean) => void;
  resetPosition: (isCompleted: boolean) => void;
  currentCandidatendex: number;
  nextCurrentImageIndex: (n: number, length: number) => void;
  currentImageIndex: number;
  toggleCandidateModal: () => void;
}
const CandidatesDeck: FC<Props> = ({
  candidateCardPosition,
  candidates,
  verticalSwipe,
  horizontalSwipe,
  resetPosition,
  currentCandidatendex,
  nextCurrentImageIndex,
  currentImageIndex,
  toggleCandidateModal
}) => {

  useEffect(() => {
    console.log(`current index: ${currentCandidatendex}`);
    resetPosition(false);
  }, [currentCandidatendex]);
  const { width, height } = Dimensions.get("window");
  const horizontalSwipeBreakpoint = 0.25 * width;
  const verticalSwipeBreakPoint = 0.25 * height;
  const position = candidateCardPosition;
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
    const left = position.x.interpolate({
      inputRange: [0, width / 4],
      outputRange: [0, 1]
    });

    const right = position.x.interpolate({
      inputRange: [-width / 4, 0],
      outputRange: [1, 0]
    });
    const down = position.y.interpolate({
      inputRange: [-height / 4, 0],
      outputRange: [1, 0]
    });
    return { left, right, down };
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
    <View>
      <Animated.View style={getCardStyle()} {...panResponder.panHandlers}>
        <MediaCard
          leftLabel="Like"
          rightLabel="Nope"
          downLabel="Super Like"
          opacities={getOpacities()}
          onBottomPress={toggleCandidateModal}
          images={candidates[currentCandidatendex].pictures}
          currentImageIndex={currentImageIndex}
          handleCurrentImageChange={nextCurrentImageIndex}
          bottomData={<DataPreview data={candidates[currentCandidatendex]} />} />
      </Animated.View>
    </View>
  );
};

export default CandidatesDeck;

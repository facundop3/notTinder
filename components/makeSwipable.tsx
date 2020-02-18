import React from "react";
import { PanResponder, Animated, Dimensions } from "react-native";
const MakeSwipable = (
  WrappedComponent,
  callback = () => console.log("Swipe without callback")
) => {
  return data => {
    const { width, height } = Dimensions.get("window");
    const horizontalSwipeBreakpoint = width * 0.25;
    const verticalSwipeBreakPoint = height * 0.25;
    const position = new Animated.ValueXY();
    const resetPosition = () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 }
      }).start();
    };
    const horizontalSwipe = (isRight = false) => {
      const translateX = (isRight ? 1 : -1) * width;
      Animated.timing(position, {
        toValue: { x: translateX, y: 0 },
        duration: 250
      }).start(() => {
        // onSwipeCompleted();
        console.log("Swipedfff");
      });
      console.log("Liked");
    };
    const myPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        const { dx, dy } = gesture;
        position.setValue({ x: dx, y: dy });
        console.log("OnPanResponderMove");
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > horizontalSwipeBreakpoint) {
          // horizontalSwipe(true);
          console.log("Like");
        } else if (gesture.dx < -horizontalSwipeBreakpoint) {
          // horizontalSwipe();
          console.log("Nope");
        } else if (gesture.dy < verticalSwipeBreakPoint) {
          // verticalSwipe();
          console.log("Super Like");
        } else {
          resetPosition();
          console.log("reset");
        }
      }
    });

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

    return (
      <Animated.View
        style={{ ...getCardStyle(), width: "100%" }}
        {...myPanResponder.panHandlers}
      >
        <WrappedComponent
          data={data}
          likeOpacity={likeOpacity}
          nopeOpacity={nopeOpacity}
          superLikeOpacity={superLikeOpacity}
        />
      </Animated.View>
    );
  };
};

export default MakeSwipable;

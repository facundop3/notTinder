import React from "react";
import useSwipe from "./useSwipe";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
const MakeSwipable = (WrappedComponent, props, callback) => {
  return () => {
    const {
      onGestureEvent,
      likeOpacity,
      nopeOpacity,
      superLikeOpacity,
      style
    } = useSwipe(callback);
    return (
      <PanGestureHandler
        onHandlerStateChange={onGestureEvent}
        {...{ onGestureEvent }}
      >
        <Animated.View {...{ style }}>
          <WrappedComponent
            {...props}
            likeOpacity={likeOpacity}
            nopeOpacity={nopeOpacity}
            superLikeOpacity={superLikeOpacity}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  };
};

export default MakeSwipable;

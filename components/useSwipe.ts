import { useState } from "react";
import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { State } from "react-native-gesture-handler";

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

const useSwipe = callback => {
  const { width } = Dimensions.get("window");
  const [translationX] = useState(new Animated.Value(0));
  const [translationY] = useState(new Animated.Value(0));
  const [velocityX] = useState(new Animated.Value(0));
  const [gestureState] = useState(new Animated.Value(State.UNDETERMINED));
  const [offsetX] = useState(new Animated.Value(0));
  const [offsetY] = useState(new Animated.Value(0));
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
  const restoreDefault = () => {
    offsetY.setValue(0);
    offsetX.setValue(0);
    velocityX.setValue(0);
    translationX.setValue(0);
    translationY.setValue(0);
    // TODO: Check this type issue
    gestureState.setValue(Animated.UNDETERMINED);
  };
  restoreDefault();

  const translationThreshold = width / 4;
  const finalTranslateX = add(translationX, multiply(0.5, velocityX));
  const onSwiped = ([translateX]) => {
    const isRight = translateX > 0;
    callback && callback(isRight);
    restoreDefault();
  };
  const snapPoint = cond(
    lessThan(finalTranslateX, -translationThreshold),
    -(width + 100),
    cond(greaterThan(finalTranslateX, translationThreshold), width + 100, 0)
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
  return {
    tempTranslationX,
    tempTranslationY,
    gestureState,
    velocityX,
    translationX,
    translationY
  };
};

export default useSwipe;

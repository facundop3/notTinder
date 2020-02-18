import { Animated } from "react-native";
export interface CandidateData {
  id: string;
  name: string;
  age: number;
  datingCity: string;
  hometown: string;
  company: string;
  school: string;
  description: string;
  pictures: any[];
}
export interface Candidate {
  data: CandidateData;
  opacities: {
    likeOpacity?: Animated.AnimatedInterpolation;
    nopeOpacity?: Animated.AnimatedInterpolation;
    superLikeOpacity?: Animated.AnimatedInterpolation;
  };
}

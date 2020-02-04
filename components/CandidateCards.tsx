import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import { CandidateData } from "../interfaces";
import { candidatesList } from "../sampleData";
import makeSwipable from "./makeSwipable";

const CandidateCards = () => {
  const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sampleCallback = isLike => {
    console.log(isLike ? "LIKE" : "NOPE");
    setCurrentIndex((currentIndex + 1) % candidates.length);
  };

  useEffect(() => {
    console.log(`current index: ${currentIndex}`);
  }, [currentIndex]);
  const SwipableCard = makeSwipable(CandidateCard, sampleCallback);

  return (
    <SwipableCard
      {...candidates[currentIndex]}
      key={candidates[currentIndex].id}
    />
  );
};

export default CandidateCards;

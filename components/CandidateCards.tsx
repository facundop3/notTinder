import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";
import { CandidateData } from "../interfaces";
import { candidatesList } from "../sampleData";
import makeSwipable from "./makeSwipable";

const CandidateCards = () => {
  const [candidates, setCandidates] = useState<CandidateData[]>(candidatesList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const sampleCallback = isLike => {
    console.log(isLike ? "LIKE" : "NOPE");
    setCurrentIndex((currentIndex + 1) % candidates.length);
    setNextIndex((nextIndex + 1) % candidates.length);
  };
  let Swipable = makeSwipable(
    CandidateCard,
    candidates[currentIndex],
    sampleCallback
  );
  useEffect(() => {
    console.log(`Current index : ${currentIndex}`);
    console.log(`Next index : ${nextIndex}`);
    Swipable = makeSwipable(
      CandidateCard,
      candidates[currentIndex],
      sampleCallback
    );
  }, [currentIndex, nextIndex]);

  const renderCards = () => {
    const swipableComponents = candidates.map(data =>
      makeSwipable(CandidateCard, data, sampleCallback)
    );
    return swipableComponents.map((Swipable, i) => <Swipable key={i} />);
  };

  return renderCards();
};

export default CandidateCards;

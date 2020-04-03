import React, { useState } from "react";
import { View } from "react-native";
import { LabeledRadioButtons, Slider } from "../components/UI-Kit";
import AgeRange from "./AgeRange";
const SettingsForm = () => {
  const [maxDistance, setMaxDistance] = useState<number>(10);
  const [minAge, setMinAge] = useState<number>(18);
  const [maxAge, setMaxAge] = useState<number>(55);

  const handleMinAgeChange = (age: string) => {
    const nextAge = Number(age) >= 18 ? Number(age) : 18;
    setMinAge(nextAge);
  };
  const handleMaxAgeChange = (age: string) => {
    const rightAgeRange = Number(age) >= minAge && Number(age) < 100;
    const nextAge = rightAgeRange ? Number(age) : minAge;
    setMaxAge(nextAge);
  };
  const options = [
    { value: "Women", label: "Women" },
    { value: "Men", label: "Men" },
    { value: "Everyone", label: "Everyone" }
  ];
  return (
    <View>
      <LabeledRadioButtons label="Show me:" options={options} />
      <Slider value={maxDistance} onChange={setMaxDistance} />
      <AgeRange
        minAge={minAge}
        handleMinAgeChange={handleMinAgeChange}
        handleMaxAgeChange={handleMaxAgeChange}
        maxAge={maxAge}
      />
    </View>
  );
};

export default SettingsForm;

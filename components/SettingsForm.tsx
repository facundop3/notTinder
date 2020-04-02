import React, { useState } from "react";
import { View } from "react-native";
import { LabeledRadioButtons, Slider, RangeSlider } from "../components/UI-Kit";

const SettingsForm = () => {
  const [maxDistance, setMaxDistance] = useState<number>(10);
  const options = [
    { value: "Women", label: "Women" },
    { value: "Men", label: "Men" },
    { value: "Everyone", label: "Everyone" }
  ];
  return (
    <View>
      <LabeledRadioButtons label="Show me:" options={options} />
      <Slider value={maxDistance} onChange={setMaxDistance} />
      <RangeSlider />
    </View>
  );
};

export default SettingsForm;

import React from "react";
import { View, Text } from "react-native";
import { LabeledRadioButtons } from "../components/UI-Kit";

const SettingsForm = () => {
  const options = [
    { value: "Women", label: "Women" },
    { value: "Men", label: "Men" },
    { value: "Everyone", label: "Everyone" }
  ];
  return (
    <View>
      <Text>Show me:</Text>
      <LabeledRadioButtons label="Show me:" options={options} />
    </View>
  );
};

export default SettingsForm;

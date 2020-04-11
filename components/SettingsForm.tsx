import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LabeledRadioButtons, Slider, Card, colors } from "nottinderuikit";
import AgeRange from "./AgeRange";
import { signOut } from "../utils";
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
    { value: "Everyone", label: "Everyone" },
  ];
  return (
    <View style={styles.container}>
      <Card>
        <LabeledRadioButtons label="Show me:" options={options} />
      </Card>
      <Card>
        <Slider value={maxDistance} onChange={setMaxDistance} />
      </Card>
      <Card>
        <AgeRange
          minAge={minAge}
          handleMinAgeChange={handleMinAgeChange}
          handleMaxAgeChange={handleMaxAgeChange}
          maxAge={maxAge}
        />
      </Card>
      <TouchableOpacity onPress={signOut}>
        <Card>
          <Text style={styles.logoutLabel}>logout</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: "100%",
  },
  logoutLabel: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SettingsForm;

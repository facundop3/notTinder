import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { LabeledInput } from "./UI-Kit";

const ProfileForm = () => {
  const [about, setAbout] = useState<string>("");
  const handleChange = text => {
    setAbout(text);
  };
  return (
    <View style={styles.container}>
      <LabeledInput
        value={about}
        onTextChange={handleChange}
        label="About me"
        multiline
        lines={8}
      />
      <LabeledInput
        value={about}
        onTextChange={handleChange}
        label="Job Title"
      />
      <LabeledInput value={about} onTextChange={handleChange} label="Company" />
      <LabeledInput value={about} onTextChange={handleChange} label="School" />
      <LabeledInput
        value={about}
        onTextChange={handleChange}
        label="Living In"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  input: {
    backgroundColor: "#FFF",
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  }
});

export default ProfileForm;

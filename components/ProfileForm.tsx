import React, { useState, FC } from "react";
import { View, StyleSheet } from "react-native";
import { LabeledInput } from "nottinderuikit";

interface Props {
  age: string;
  company: string;
  datingCity: string;
  description: string;
  hometown: string;
  jobTitle: string;
  name: string;
  school: string;
}
const ProfileForm: FC<Props> = ({
  age,
  company,
  datingCity,
  description,
  hometown,
  jobTitle,
  name,
  school,
}) => {
  const [about, setAbout] = useState<string>("");
  const handleChange = (text) => {
    setAbout(text);
  };
  return (
    <View>
      <LabeledInput
        value={description}
        onTextChange={handleChange}
        label="About me"
        multiline
        lines={8}
      />
      <LabeledInput
        value={jobTitle}
        onTextChange={handleChange}
        label="Job Title"
      />
      <LabeledInput
        value={company}
        onTextChange={handleChange}
        label="Company"
      />
      <LabeledInput value={school} onTextChange={handleChange} label="School" />
      <LabeledInput
        value={datingCity}
        onTextChange={handleChange}
        label="Living In"
      />
    </View>
  );
};

export default ProfileForm;

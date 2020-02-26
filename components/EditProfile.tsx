import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AddPhotoGrid from "./AddPhotoGrid";
import ProfileForm from "./ProfileForm";
import { colors, LabeledRadioButtons } from "./UI-Kit";

const EditProfile = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const handleChange = ev => {
    setSelected(!selected);
  };
  return (
    <ScrollView style={styles.container}>
      <AddPhotoGrid />
      <ProfileForm />
      <LabeledRadioButtons
        options={[
          { label: "Man", value: "man" },
          { label: "Woman", value: "woman" }
        ]}
        label="Gender"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey
  }
});

export default EditProfile;

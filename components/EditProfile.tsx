import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import AddPhotoGrid from "./AddPhotoGrid";
import ProfileForm from "./ProfileForm";
import { colors, LabeledRadioButtons } from "./UI-Kit";

const EditProfile = () => {
  const genderOptions = [
    { label: "Man", value: "man" },
    { label: "Woman", value: "woman" }
  ];
  return (
    <ScrollView style={styles.container}>
      <AddPhotoGrid />
      <ProfileForm />
      <LabeledRadioButtons options={genderOptions} label="Gender" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey
  }
});

export default EditProfile;

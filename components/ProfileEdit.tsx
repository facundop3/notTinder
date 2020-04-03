import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AddPhotoGrid from "./AddPhotoGrid";
import ProfileForm from "./ProfileForm";
import { colors, LabeledRadioButtons } from "./UI-Kit";
import { getMyProfileData } from "../utils";

const EditProfile = () => {
  const genderOptions = [
    { label: "Man", value: "man" },
    { label: "Woman", value: "woman" }
  ];
  const [profileData, setProfileData] = useState<any>({
    age: "",
    company: "string",
    datingCity: "",
    description: "",
    hometown: "",
    jobTitle: "",
    name: "",
    school: ""
  });
  useEffect(() => {
    getMyProfileData().then(setProfileData);
  }, []);
  useEffect(() => {
    console.log(profileData);
  }, [profileData]);
  return (
    <ScrollView style={styles.container}>
      <AddPhotoGrid />
      <ProfileForm {...profileData} />
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

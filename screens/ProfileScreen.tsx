import React from "react";
import ProfileOverview from "../components/ProfileOverview";
import { candidate } from "../sampleData";
export default function ProfileScreen({ navigation }) {
  return <ProfileOverview data={candidate} navigation={navigation} />;
}

ProfileScreen.navigationOptions = {
  title: "My Profile"
};

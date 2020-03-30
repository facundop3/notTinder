import React from "react";
import ProfileOverview from "../components/ProfileOverview";
import { candidate } from "../sampleData";
export default function SettingsScreen() {
  return <ProfileOverview data={candidate} />;
}

SettingsScreen.navigationOptions = {
  title: "My Profile"
};

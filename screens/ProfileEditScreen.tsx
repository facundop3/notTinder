import React from "react";
import ProfileEdit from "../components/ProfileEdit";
export default function SettingsScreen(props) {
  return <ProfileEdit />;
}

SettingsScreen.navigationOptions = {
  title: "My Profile"
};

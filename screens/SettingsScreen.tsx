import React from "react";
import SettingsForm from "../components/SettingsForm";

export default function SettingsScreen({ navigation }) {
  return <SettingsForm />;
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

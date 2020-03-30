import React from "react";
import { View, Text } from "react-native";
import SettingsForm from "../components/SettingsForm";

export default function SettingsScreen({ navigation }) {
  return (
    <View>
      <SettingsForm />
      <Text>Show me:</Text>
      <Text>Max distance</Text>
      <Text>Age range</Text>
      <Text>Log out</Text>
      <Text>Delete account</Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: "Settings"
};

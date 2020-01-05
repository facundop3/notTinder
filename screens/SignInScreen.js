import React from "react";
import { View, Text } from "react-native";
import SignInForm from "../components/SignInForm";
export default function SignInScreen() {
  return (
    <View>
      <Text>Here we ask you who you are </Text>
      <SignInForm />
    </View>
  );
}

SignInScreen.navigationOptions = {
  title: "app.json"
};

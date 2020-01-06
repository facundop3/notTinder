import React from "react";
import { View, Text } from "react-native";
import SignInForm from "../components/SignInForm";
export default function SignInScreen() {
  return (
    <View>
      <SignInForm />
    </View>
  );
}

SignInScreen.navigationOptions = {
  title: "app.json"
};

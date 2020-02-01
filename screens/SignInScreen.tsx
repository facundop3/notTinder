import React, { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import SignInForm from "../components/SignInForm";
import * as firebase from "firebase";
export default function SignInScreen() {
  const [errorMessage, setErrorMessage] = useState(null);
  const handleLogin = ({ email, password }) => {
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => setErrorMessage(err));
    }
  };
  return (
    <View>
      <SignInForm handleLogin={handleLogin} error={errorMessage} />
    </View>
  );
}

SignInScreen.navigationOptions = {
  title: "Dat3"
};

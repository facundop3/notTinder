import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Stack from "./Stack";

import SignInScreen from "../screens/SignInScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBfWyGERnlkGCLsnnEGCzlNJdtftdYM0FI",
  authDomain: "dat3-9ae16.firebaseapp.com",
  databaseURL: "https://dat3-9ae16.firebaseio.com",
  projectId: "dat3-9ae16",
  storageBucket: "dat3-9ae16.appspot.com",
  messagingSenderId: "719097210264",
  appId: "1:719097210264:web:88c1f4d9500766a132f7ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      AuthLoading: AuthLoadingScreen,
      Main: Stack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

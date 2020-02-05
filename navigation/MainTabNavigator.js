import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TopNavigator from "./TopNavigator";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

// HomeStack.navigationOptions = {
//   tabBarLabel: "",
//   tabBarIcon: ({ focused }) => <TopNavigator />
// };

HomeStack.path = "";

const ChatsStack = createStackNavigator({
  Links: LinksScreen
});

// ChatsStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-link" : "md-link"}
//     />
//   )
// };

ChatsStack.path = "";

const ProfileStack = createStackNavigator({
  Settings: SettingsScreen
});

// ProfileStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-options" : "md-options"}
//     />
//   )
// };

ProfileStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ChatsStack,
  ProfileStack
});

tabNavigator.path = "";

export default tabNavigator;

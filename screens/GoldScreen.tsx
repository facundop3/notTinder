import React from "react";
import { View, Text } from "react-native";
export default function GoldScreen({ navigation }) {
  return (
    <View>
      <Text>Likes</Text>
    </View>
  );
}

GoldScreen.navigationOptions = {
  title: "My Gold"
};

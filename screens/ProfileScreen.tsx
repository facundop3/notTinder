import React from "react";
import ProfileOverview from "../components/ProfileOverview";
import { candidate } from "../sampleData";
export default function ProfileScreen({ navigation }) {
  const { params } = navigation.state;
  return (
    <ProfileOverview data={candidate} navigation={navigation} params={params} />
  );
}

ProfileScreen.navigationOptions = {
  title: "My Profile"
};

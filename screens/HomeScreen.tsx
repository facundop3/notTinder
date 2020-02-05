import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform
} from "react-native";

import * as firebase from "firebase";
// import CandidateCard from "../components/CandidateCard";
import CandidateCards from "../components/CandidateCards";

import TopNavigation from "../navigation/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import { Styles } from "react-native-svg";

function HomeScreen(props) {
  useEffect(() => {
    console.log("HomeScreen re-rendered");
  });
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TopNavigation navToChat={() => props.navigation.navigate("Links")} />
        <View style={styles.cardContainer}>
          <CandidateCards />
        </View>
        <ActionButtons />
        <View>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create<Styles>({
  safeView: {
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
  cardContainer: {
    height: 650,
    alignItems: "center"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});

export default React.memo(HomeScreen);

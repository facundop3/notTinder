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

import Radar from "../components/Radar";
// import CandidateCard from "../components/CandidateCard";
import CandidatesDeck from "../components/CandidatesDeck";

import TopNavigation from "../navigation/TopNavigator";
import ActionButtons from "../components/ActionButtons";
import { Styles } from "react-native-svg";

function HomeScreen(props) {
  useEffect(() => {
    console.log("HomeScreen re-rendered");
  });
  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.contentContainer}>
        <TopNavigation navToChat={() => props.navigation.navigate("Links")} />
        <View style={styles.cardContainer}>
          {/* <CandidatesDeck /> */}
          <Radar />
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
      </View>
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
    height: 650
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});

export default React.memo(HomeScreen);

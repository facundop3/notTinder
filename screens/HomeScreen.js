import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";

import CandidateCard from "../components/CandidateCard";
import CandidateModal from "../components/CandidateModal";
import TopNavigation from "../components/TopNavigator";

import { Avatar, Chip } from "../components/UI-Kit";
import * as firebase from "firebase";
import ActionButtons from "../components/ActionButtons";

const sampleCandidateData = {
  name: "Karen",
  age: 24,
  datingCity: "Montevideo",
  hometown: "Montevideo",
  company: "Disco",
  school: "Universidad de la Republica",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ullamcorper nisl, ut pulvinar ex. Cras rutrum nec nulla maximus imperdiet. Praesent eu libero vel nisl lacinia commodo eget quis tellus. In quis nibh varius, volutpat sem ac, imperdiet ante. Curabitur commodo sed orci a rutrum. Integer neque lorem, maximus et purus a, venenatis mattis diam. Curabitur gravida molestie odio eget convallis.",
  pictures: [
    require("../assets/images/sample-girl-1.jpeg"),
    require("../assets/images/sample-girl-2.jpg"),
    require("../assets/images/sample-girl-3.jpg")
  ]
};

export default function HomeScreen(props) {
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const toggleCandidateModal = () => setShowCandidateModal(!showCandidateModal);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TopNavigation navToChat={() => props.navigation.navigate("Links")} />
        <View style={styles.cardContainer}>
          <CandidateCard
            toggleCandidateModal={toggleCandidateModal}
            data={sampleCandidateData}
          />
          <CandidateModal
            showCandidateModal={showCandidateModal}
            toggleCandidateModal={toggleCandidateModal}
            data={sampleCandidateData}
          />
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

const styles = StyleSheet.create({
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

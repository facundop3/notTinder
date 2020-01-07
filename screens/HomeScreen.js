import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { MonoText } from "../components/StyledText";
import CandidateCard from "../components/CandidateCard";
import CandidateModal from "../components/CandidateModal";

import { Avatar, Chip } from "../components/UI-Kit";
import * as firebase from "firebase";

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
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.topNavigationContainer}>
          <Avatar
            img={require("../assets/images/sample-boy-1.jpg")}
            size={30}
          />
          <Chip>Liked You</Chip>
          <Chip onPress={() => props.navigation.navigate("Links")}>
            Conversations
          </Chip>
        </View>

        <View style={styles.getStartedContainer}>
          <CandidateCard
            toggleCandidateModal={toggleCandidateModal}
            data={sampleCandidateData}
          />
          <CandidateModal
            showCandidateModal={showCandidateModal}
            toggleCandidateModal={toggleCandidateModal}
            data={sampleCandidateData}
          />

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>Hello and wellcome to app</Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={() => firebase.auth().signOut()}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}
        >
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  topNavigationContainer: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  View,
  StyleSheet,
  Text
} from "react-native";
import * as firebase from "firebase";
class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "Auth");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AuthLoadingScreen;

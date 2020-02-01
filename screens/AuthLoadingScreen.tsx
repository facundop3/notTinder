import React, { useEffect, FC } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import * as firebase from "firebase";

const AuthLoadingScreen: FC<any> = props => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      props.navigation.navigate(user ? "Main" : "Auth");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AuthLoadingScreen;

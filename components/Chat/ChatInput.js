import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const ChatInput = props => {
  const [value, setValue] = useState("");
  const sendMessage = ev => {
    console.log(value);
    setValue("");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoFocus
        onChangeText={text => setValue(text)}
        value={value}
        placeholder="Say something"
      />
      <TouchableHighlight onPress={sendMessage}>
        <FontAwesomeIcon icon={faPaperPlane} color="blue" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    bottom: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
    overflow: "hidden",
    height: 40,
    paddingHorizontal: 15,
    width: "90%",
    marginRight: 10
  }
});

export default ChatInput;

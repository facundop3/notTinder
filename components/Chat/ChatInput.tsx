import React, { useState, FC } from "react";
import { View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from "nottinderuikit";
const ChatInput: FC = () => {
  const [value, setValue] = useState("");
  const sendMessage = () => {
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
      <View style={styles.sendIcon}>
        <TouchableHighlight onPress={sendMessage}>
          <MaterialIcons name="send" size={30} color={colors.darkGrey} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    height: '10%'
  },
  input: {
    borderWidth: 1,
    borderColor: colors.darkGrey,
    borderRadius: 50,
    overflow: "hidden",
    height: "60%",
    paddingHorizontal: "10%",
    width: "100%",
    position: "relative"
  },
  sendIcon: {
    position: "absolute",
    right: 25,
  }
});

export default ChatInput;

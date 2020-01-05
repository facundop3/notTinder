import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const SingnInForm = props => {
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
        placeholder="youremail@sample.com"
      />
      <TextInput
        style={styles.input}
        autoFocus
        onChangeText={text => setValue(text)}
        value={value}
        secureTextEntry={true}
        placeholder="youremail@sample.com"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    bottom: 0,
    padding: 20,
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

export default SingnInForm;

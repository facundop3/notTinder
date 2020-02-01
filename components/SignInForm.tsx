import React, { useState, FC } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";

interface Props {
  handleLogin: (any) => void;
  errorMessage: (any) => void;
  handleGmail: (any) => void;
}
const SingnInForm: FC<Props> = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, errorMessage, handleGmail } = props;

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Wellcome !</Text>
        <Text>First you need to create an account</Text>
        <Text>
          You can use your Gmail or Facebook account to skip this step.
        </Text>
      </View>

      <Text>Your email:</Text>
      <TextInput
        style={styles.input}
        autoFocus
        onChangeText={text => setEmail(text)}
        value={email}
        autoCompleteType="email"
        placeholder="youremail@sample.com"
      />
      <Text>Create your password</Text>
      <TextInput
        style={styles.input}
        autoFocus
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="* * * *"
      />
      <TouchableHighlight
        style={styles.join}
        onPress={() => handleLogin({ email, password })}
      >
        <Text style={{ color: "white" }}>Join Now</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 70
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 50,
    overflow: "hidden",
    height: 40,
    paddingHorizontal: 15,
    width: "90%",
    margin: 10
  },
  welcomeContainer: {
    padding: 10
  },
  title: {
    fontSize: 25
  },
  join: {
    backgroundColor: "orange",
    borderRadius: 40,
    overflow: "hidden",
    padding: 15,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SingnInForm;

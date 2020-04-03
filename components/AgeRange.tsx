import React, { FC } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { colors } from "./UI-Kit";

interface Props {
  handleMinAgeChange: (age: string) => void;
  handleMaxAgeChange: (age: string) => void;
  minAge: number;
  maxAge: number;
}
const AgeRange: FC<Props> = ({
  handleMinAgeChange,
  handleMaxAgeChange,
  minAge,
  maxAge
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.redLabel}>Age Range:</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.label}>From:</Text>
          <TextInput
            style={styles.input}
            value={String(minAge)}
            onChangeText={handleMinAgeChange}
            keyboardType="number-pad"
            maxLength={2}
          />
        </View>
        <View style={styles.inputLabelContainer}>
          <Text style={styles.label}>To:</Text>
          <TextInput
            style={styles.input}
            value={String(maxAge)}
            keyboardType="number-pad"
            onChangeText={handleMaxAgeChange}
            maxLength={2}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  redLabel: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: colors.red
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  inputContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputLabelContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    borderWidth: 2,
    width: 30,
    height: 30,
    borderRadius: 3,
    borderColor: colors.darkGrey,
    margin: 5,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  }
});

export default AgeRange;

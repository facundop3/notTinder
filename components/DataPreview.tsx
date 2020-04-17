import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const DataPreview = ({ data }) => {
  const styles = StyleSheet.create({
    nameAndAge: {
      color: "white",
      fontSize: 25,
    },
    smallWhiteText: {
      color: "white",
      fontSize: 15,
    },
    candidateName: {
      fontWeight: "bold",
    }
  });
  return <>
    <Text style={styles.nameAndAge}>
      <Text style={styles.candidateName}>{data.name}</Text> {data.age}
    </Text>
    <Text style={styles.smallWhiteText}>
      <Ionicons name="md-school" size={20} /> {data.school}
    </Text>
    <Text style={styles.smallWhiteText}>
      <MaterialIcons name="location-on" size={20} /> {data.datingCity}
    </Text>
  </>
}

export default DataPreview
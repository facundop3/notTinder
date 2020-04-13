import React, { FC } from "react";
import { Text, View, Image, StyleSheet, ScrollView, TouchableWithoutFeedback } from "react-native";
import { FontAwesome, SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { colors, RoundButton, CurrentIndexIndicator } from "nottinderuikit";
import { CandidateData } from "../interfaces";

interface Props {
  toggleCandidateModal: () => void;
  data: CandidateData;
  isModal?: boolean;
  currentPic: number;
  changePic: (n: number, lenght: number) => void;
}

const CandidateProfile: FC<Props> = (props) => {
  const { toggleCandidateModal, data, isModal, currentPic, changePic } = props;
  const mainImage = data.pictures[currentPic]
  const renderCandidateData = () => {
    return (
      <>
        <View style={styles.candidateInfoContainer}>
          <Text>
            <Text style={styles.candidateName}>{data.name}</Text>, <Text style={styles.candidateAge}>{data.age}</Text>
          </Text>
          <Text style={styles.candidateInfo}>
            <SimpleLineIcons name="location-pin" color={colors.darkGrey} size={18} />{"  "}
          Dating in {data.datingCity}
          </Text>
          <Text style={styles.candidateInfo}>
            <SimpleLineIcons name="home" color={colors.darkGrey} size={18} />{"  "}
          From {data.hometown}
          </Text>
          <Text style={styles.candidateInfo}>
            <SimpleLineIcons name="briefcase" color={colors.darkGrey} size={18} />{"  "}
          Works at {data.company}
          </Text>

          <Text style={styles.candidateInfo}>
            <SimpleLineIcons name="graduation" color={colors.darkGrey} size={18} />{"  "}
          Studies at {data.school}
          </Text>
        </View>
        <ScrollView style={styles.candidateDescriptionContainer}>
          <Text style={styles.candidateInfo}>{data.description}</Text>
        </ScrollView>
      </>
    );
  };

  const CloseButton = <View style={styles.closeButton}>
    <RoundButton onPress={toggleCandidateModal} color={colors.red} >
      <FontAwesome name="arrow-down" color="white" size={30} />
    </RoundButton>
  </View>

  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={mainImage} />
      {isModal && CloseButton}
      <View style={styles.moreOptions}>
        <MaterialIcons name="more-horiz" color="white" size={40} />
      </View>
      <View>{renderCandidateData()}</View>
      <CurrentIndexIndicator listOfIds={data.pictures.map((e, i) => ({ id: String(i) }))} activeIndex={currentPic} />
      <TouchableWithoutFeedback
        onPress={() => changePic(1, data.pictures.length)}
      >
        <View style={styles.nextPic}></View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => changePic(-1, data.pictures.length)}
      >
        <View style={styles.previusPic}></View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  mainImage: {
    width: "100%",
    height: "60%",
    position: "relative"
  },
  moreOptions: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 2
  },
  closeButton: {
    position: "absolute",
    top: "55%",
    right: 15,
    zIndex: 2
  },
  candidateInfoContainer: {
    padding: 10,
  },
  candidateName: {
    fontSize: 30,
    fontWeight: "bold"
  },
  candidateAge: {
    fontSize: 30
  },
  candidateInfo: {
    fontSize: 17,
  },
  candidateDescriptionContainer: {
    borderTopWidth: .5,
    borderColor: colors.darkGrey,
    padding: 10,
  },
  nextPic: {
    height: "60%",
    width: "50%",
    right: 0,
    position: "absolute",
  },
  previusPic: {
    height: "60%",
    width: "50%",
    left: 0,
    position: "absolute",
  },
});

export default CandidateProfile;

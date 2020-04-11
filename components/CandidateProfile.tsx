import React, { FC } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { Chip } from "nottinderuikit";
import { CandidateData } from "../interfaces";

interface Props {
  toggleCandidateModal: () => void;
  data: CandidateData;
  isModal?: boolean;
}
const CandidateProfile: FC<Props> = (props) => {
  const { toggleCandidateModal, data, isModal } = props;
  const [mainImage] = data.pictures;
  const renderCandidateData = () => {
    return (
      <View style={styles.candidateInfoContainer}>
        <Text>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Dating in {data.datingCity}
        </Text>
        <Text>
          <FontAwesomeIcon icon={faHome} />
          From {data.hometown}
        </Text>
        <Text>
          <FontAwesomeIcon icon={faBriefcase} />
          Works at {data.company}
        </Text>

        <Text>
          <FontAwesomeIcon icon={faGraduationCap} />
          Studies at {data.school}
        </Text>
        <Text>{data.description}</Text>
      </View>
    );
  };

  const renderCandidatePictures = () => {
    return (
      <View style={styles.imagesContainer}>
        {data.pictures.map((img) => {
          return <Image style={styles.image} source={img} />;
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mainImage} source={mainImage} />
      <View style={styles.topActionsContainer}>
        <View style={styles.topActionsSubcontainer}>
          <View style={{ flexDirection: "row" }}>
            {isModal && <Chip onPress={toggleCandidateModal}>Close</Chip>}
            <Chip>{data.name}</Chip>
          </View>
          <View style={styles.moreOptions}>
            <Chip isCircle>
              <FontAwesomeIcon icon={faEllipsisH} color="white" />
            </Chip>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>{renderCandidateData()}</View>
      {renderCandidatePictures()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: "100%",
    height: 300,
  },
  imagesContainer: {
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 300,
    borderRadius: 5,
    overflow: "hidden",
    margin: 10,
  },
  container: {
    position: "relative",
  },
  topActionsContainer: {
    position: "absolute",
    top: 5,
    flexDirection: "row",
    width: "100%",
  },
  topActionsSubcontainer: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
  },
  moreOptions: {
    position: "absolute",
    right: 10,
  },
  candidateInfoContainer: {
    padding: 10,
  },
});

export default CandidateProfile;

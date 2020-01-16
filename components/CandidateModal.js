import React from "react";
import { Modal, SafeAreaView } from "react-native";
import CandidateProfile from "./CandidateProfile";

const CandidateModal = props => {
  const { showCandidateModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showCandidateModal}
      {...props}
    >
      <SafeAreaView>
        <CandidateProfile {...props} isModal />
      </SafeAreaView>
    </Modal>
  );
};

export default CandidateModal;

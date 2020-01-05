import React from "react";
import { Modal } from "react-native";
import CandidateProfile from "./CandidateProfile";

const CandidateModal = props => {
  const { showCandidateModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showCandidateModal}
    >
      <CandidateProfile {...props} isModal />
    </Modal>
  );
};

export default CandidateModal;

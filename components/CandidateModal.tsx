import React, { FC } from "react";
import { Modal, SafeAreaView } from "react-native";
import CandidateProfile from "./CandidateProfile";
import { CandidateData } from "../interfaces";

interface Props {
  showCandidateModal: boolean;
  data: CandidateData;
  toggleCandidateModal: () => void;
}
const CandidateModal: FC<Props> = props => {
  const { showCandidateModal, data, toggleCandidateModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showCandidateModal}
    >
      <SafeAreaView>
        <CandidateProfile data={data} toggleCandidateModal={toggleCandidateModal} isModal />
      </SafeAreaView>
    </Modal>
  );
};

export default CandidateModal;

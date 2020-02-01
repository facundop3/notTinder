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

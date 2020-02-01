import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableHighlight,
  SafeAreaView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "../UI-Kit";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

interface Props {
  data: any;
  showChatModal: boolean;
  toggleChatModal: () => void;
}
const ChatModal: FC<Props> = props => {
  const { data, showChatModal, toggleChatModal } = props;
  return (
    <Modal animationType="slide" transparent={false} visible={showChatModal}>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableHighlight onPress={toggleChatModal}>
                <Text style={{ marginRight: 20, fontSize: 16 }}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Text>
              </TouchableHighlight>
              {data && (
                <>
                  <Avatar img={data.avatar} size={50} />
                  <Text style={{ fontSize: 20 }}>{data.name}</Text>
                </>
              )}
            </View>
            {data && <ChatBody />}
          </ScrollView>
          <ChatInput />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default ChatModal;

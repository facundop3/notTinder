import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Avatar, SafeAreaModal } from "nottinderuikit";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

interface Props {
  data: any;
  showChatModal: boolean;
  toggleChatModal: () => void;
}
const ChatModal: FC<Props> = (props) => {
  const { data, showChatModal, toggleChatModal } = props;
  return (
    <SafeAreaModal animationType="slide" visible={showChatModal}>
      <View>
        <View style={styles.header}>
          <TouchableHighlight onPress={toggleChatModal}>
            <Text style={{ marginRight: 20, fontSize: 16 }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Text>
          </TouchableHighlight>
          {data && (
            <>
              <Avatar source={data.avatar} size={50} />
              <Text style={{ fontSize: 20 }}>{data.name}</Text>
            </>
          )}
        </View>
        <View style={styles.chatBodyContainer}>
          {data && <ChatBody />}
        </View>
        <ChatInput />
      </View>
    </SafeAreaModal>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
  chatBodyContainer: {
    height: "80%"
  }
});
export default ChatModal;

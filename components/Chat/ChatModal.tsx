import React, { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Avatar, SafeAreaModal, colors, ChatInput } from "nottinderuikit";
import ChatBody from "./ChatBody";
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  data: any;
  showChatModal: boolean;
  toggleChatModal: () => void;
}
const ChatModal: FC<Props> = (props) => {
  const { data, showChatModal, toggleChatModal } = props;
  const [chatValue, setChatValue] = useState("");
  const chatIcon = <MaterialIcons name="send" size={30} color={colors.darkGrey} />
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
        <ChatInput value={chatValue} handleChangeText={setChatValue} sendIcon={chatIcon} />
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

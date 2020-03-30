import React, { useState } from "react";
import { View } from "react-native";
import Conversations from "../components/Conversations";
import ChatModal from "../components/Chat/ChatModal";
import { sampleChatList, sampleImages } from "../sampleData";
export default function LinksScreen() {
  const [showChatModal, setShowChatModal] = useState(false);
  const [currentChat, setCurrentChat] = useState("");
  const toggleChatModal = (chatId = "") => {
    setCurrentChat(chatId);
    setShowChatModal(!showChatModal);
  };

  return (
    <View>
      <Conversations
        conversationsList={sampleChatList}
        toggleChatModal={toggleChatModal}
        newMatches={sampleImages}
      />
      <ChatModal
        showChatModal={showChatModal}
        toggleChatModal={toggleChatModal}
        data={sampleChatList.find(({ id }) => id === currentChat)}
      />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "Conversations"
};

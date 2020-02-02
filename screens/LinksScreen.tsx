import React, { useState } from "react";
import { View } from "react-native";
import Conversations from "../components/Conversations";
import ChatModal from "../components/Chat/ChatModal";

const sampleData = [
  {
    id: "bla-1",
    name: "Karen",
    lastMessage: "Ok, see you there !",
    avatar: require("../assets/images/sample-girl-1.jpeg")
  },
  {
    id: "bla-2",
    name: "Nicol",
    lastMessage: "That's weird",
    avatar: require("../assets/images/sample-girl-2.jpg")
  },
  {
    id: "bla-3",
    name: "Ana",
    lastMessage: "Hi",
    avatar: require("../assets/images/sample-girl-3.jpg")
  }
];

const newMatches = [
  require("../assets/images/dog-1-min.jpeg"),
  require("../assets/images/beer-min.jpeg"),
  require("../assets/images/dog-2-min.jpeg")
];
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
        conversationsList={sampleData}
        toggleChatModal={toggleChatModal}
        newMatches={newMatches}
      />
      <ChatModal
        showChatModal={showChatModal}
        toggleChatModal={toggleChatModal}
        data={sampleData.find(({ id }) => id === currentChat)}
      />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: "Conversations"
};

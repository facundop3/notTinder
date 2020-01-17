import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback
} from "react-native";
import { Avatar, colors } from "./UI-Kit";

function ConversationItem({ name, id, lastMessage, avatar, toggleChatModal }) {
  return (
    <TouchableHighlight
      onPress={() => toggleChatModal(id)}
      underlayColor="grey"
    >
      <View style={styles.conversationContainer}>
        <Avatar img={avatar} />
        <View>
          <Text>{name}</Text>
          <Text>{lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const Conversations = props => {
  const { conversationsList, toggleChatModal } = props;
  const [isFeedActive, setIsFeedActive] = useState(false);
  const textStyle = StyleSheet.create({
    message: {
      fontSize: 20,
      color: isFeedActive ? colors.darkGrey : colors.red
    },
    feed: {
      fontSize: 20,
      color: isFeedActive ? colors.red : colors.darkGrey
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messagesFeedContainer}>
        <TouchableWithoutFeedback onPress={() => setIsFeedActive(false)}>
          <Text style={textStyle.message}>Messages</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setIsFeedActive(true)}>
          <Text style={textStyle.feed}>Feed</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        data={conversationsList}
        renderItem={({ item }) => (
          <ConversationItem {...item} toggleChatModal={toggleChatModal} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  conversationContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 80,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)"
  },
  messagesFeedContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    alignItems: "center"
  }
});

export default Conversations;

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight
} from "react-native";
import { Avatar } from "./UI-Kit";

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
  return (
    <SafeAreaView style={styles.container}>
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
  }
});

export default Conversations;

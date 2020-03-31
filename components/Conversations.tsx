import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Avatar, colors } from "./UI-Kit";

function ConversationItem({ name, id, lastMessage, avatar, toggleChatModal }) {
  return (
    <TouchableHighlight
      onPress={() => toggleChatModal(id)}
      underlayColor="grey"
    >
      <View style={styles.conversationContainer}>
        <Avatar img={avatar} size={90} />
        <View>
          <Text>{name}</Text>
          <Text>{lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const NewMatchItem = props => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Avatar size={70} img={props.img} />
      <Text>{props.name}</Text>
    </View>
  );
};

const Conversations = props => {
  const { conversationsList, toggleChatModal, newMatches } = props;
  const [isFeedActive, setIsFeedActive] = useState(false);
  const [messagesFilter, setMessagesFilter] = useState("");
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
      <View style={styles.searchContainer}>
        <EvilIcons name="search" color={colors.red} size={30} />
        <TextInput
          style={styles.input}
          onChangeText={text => setMessagesFilter(text)}
          value={messagesFilter}
          placeholder="Search n Matches"
        />
      </View>
      <View style={styles.newMatchesContainer}>
        <Text style={styles.headerText}>New Matches:</Text>
        <FlatList
          style={{ paddingVertical: 16 }}
          data={newMatches}
          horizontal
          renderItem={({ item }) => (
            <NewMatchItem img={item.avatar} name={item.name} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.newMatchesContainer}>
        <Text style={styles.headerText}>Messages:</Text>
        <FlatList
          style={{ paddingVertical: 16 }}
          data={conversationsList}
          renderItem={({ item }) => (
            <ConversationItem {...item} toggleChatModal={toggleChatModal} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  conversationContainer: {
    alignItems: "center",
    flexDirection: "row",
    height: 100
  },
  messagesFeedContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    alignItems: "center"
  },
  searchContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  input: {
    borderBottomColor: colors.red,
    borderBottomWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    width: "90%",
    marginRight: 10
  },
  newMatchesContainer: {
    padding: 15
  },
  headerText: {
    color: colors.red,
    fontSize: 20
  }
});

export default Conversations;

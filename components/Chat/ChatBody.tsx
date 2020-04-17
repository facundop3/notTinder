import React, { FC } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { conversation } from "../../sampleData";
import { ChatBubble } from 'nottinderuikit'

const ChatBody: FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={conversation}
        renderItem={({ item }) => <ChatBubble {...item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 80
  }
});

export default ChatBody;

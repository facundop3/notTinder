import React, { FC } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { conversation } from "../../sampleData";
interface ChatBubbleProps {
  text: string;
  isInbound?: boolean;
  id: string;
}
const ChatBubble: FC<ChatBubbleProps> = ({ text, isInbound }) => {
  const styles = StyleSheet.create({
    container: {
      alignSelf: isInbound ? "flex-start" : "flex-end"
    },
    message: {
      backgroundColor: isInbound ? "white" : "grey",
      padding: 12,
      borderRadius: 20,
      overflow: "hidden",
      color: isInbound ? "black" : "white",
      ...(isInbound ? { borderWidth: 1, borderColor: "rgba(0,0,0,0.2)" } : {})
    }
  });
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.message}>{text}</Text>
      </View>
    </View>
  );
};
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
    height: "100%",
    paddingBottom: 80
  }
});

export default ChatBody;

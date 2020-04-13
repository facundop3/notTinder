import React, { FC } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { conversation } from "../../sampleData";
import { colors } from 'nottinderuikit'
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
      backgroundColor: isInbound ? colors.grey : colors.blue,
      padding: 12,
      borderRadius: 20,
      fontSize: 16,
      overflow: "hidden",
      color: isInbound ? "black" : "white",
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
    paddingBottom: 80
  }
});

export default ChatBody;

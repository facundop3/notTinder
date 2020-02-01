import React, { FC } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";

interface ChatBubbleProps {
  message: string;
  isInbound?: boolean;
}
const ChatBubble: FC<ChatBubbleProps> = ({ message, isInbound }) => {
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
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};
const ChatBody: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
      <ChatBubble message="Hello, how you doing?" isInbound />
      <ChatBubble message="Fine and you?" />
      <ChatBubble message="I'm good too" isInbound />
    </ScrollView>
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

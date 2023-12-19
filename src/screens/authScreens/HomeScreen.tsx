import React, { useEffect } from "react";
import { client } from "../../utils/streamChatConfig";
import { Text, View, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";

const HomeScreen = () => {
  const user = {
    id: "10000",
    name: "justice",
    image:
      "https://unsplash.com/photos/an-aerial-view-of-a-desert-with-rocks-and-sand-s3leOixsIX0",
  };
  useEffect(() => {
    const connectUser = async () => {
      try {
        const response = await client.connectUser(
          {
            ...user,
          },
          client.devToken(user.id)
        );
        console.log(response, "connection response ");
      } catch (error) {
        console.log(error);
        Alert.alert("Error with Connection To ChatService ");
      }
    };

    connectUser();
    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text> textInComponent </Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff32",
    alignItems: "center",
    justifyContent: "center",
  },
});

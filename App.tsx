import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/authScreens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import NavigationComponent from "./src/infrastructure/navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationComponent />
    </GestureHandlerRootView>
  );
}

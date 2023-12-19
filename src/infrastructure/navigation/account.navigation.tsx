import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../../screens/publicScreens/SignUpScreen";
import LoginScreen from "../../screens/publicScreens/LoginScreen";
const Stack = createStackNavigator();

const AccountNavigation = () => {
  const screenOptionConfig = ({}) => ({
    headerShown: false,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionConfig}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigation;

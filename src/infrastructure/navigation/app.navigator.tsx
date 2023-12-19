import React from "react";
import { View, Text } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import WalletScreen from "../../screens/authScreens/WalletScreen";

const Tab = createBottomTabNavigator();

const RestaurantStackNavigation = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>RestaurantStackNavigation</Text>
    </View>
  );
};

const CartsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>CartsScreen</Text>
    </View>
  );
};

const MapScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MapScreen</Text>
    </View>
  );
};

type RouteParams = {
  Restaurants: undefined;
  Cart: undefined;
  Map: undefined;
  Settings: undefined;
};

const AppNavigator = () => {
  const routeNames: {
    [key: string]: { screenName: string; iconName: string };
  } = {
    Wallet: {
      screenName: "Wallet",
      iconName: "wallet",
    },
    Cart: {
      screenName: "Cart",
      iconName: "cart",
    },
    Map: {
      screenName: "Map",
      iconName: "map",
    },
    Settings: {
      screenName: "Settings",
      iconName: "settings",
    },
  };

  const screenOptionConfig:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => BottomTabNavigationOptions)
    | undefined = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const routeConfig = routeNames[route.name];
      const iconName: any = routeConfig ? routeConfig.iconName : "";
      if (iconName) {
        return <Ionicons name={iconName} size={size} color={color} />;
      }

      return undefined;
    },
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: {
      position: "absolute",
      padding: 10,
      backgroundColor: "black",
      borderTopStartRadius: 40,
      borderTopEndRadius: 40,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptionConfig}>
      <Tab.Screen name="Cart" component={CartsScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

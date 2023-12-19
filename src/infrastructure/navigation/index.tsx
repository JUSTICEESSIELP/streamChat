import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app.navigator";
import AccountNavigation from "./account.navigation";

const NavigationComponent = () => {
  const [isAuthenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigation />}
    </NavigationContainer>
  );
};

export default NavigationComponent;

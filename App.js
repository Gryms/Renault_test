import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "./src/screens/SignIn.dumb";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

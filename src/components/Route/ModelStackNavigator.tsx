import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WeeklyScreen } from "../WeeklyScreen";

export const ModelStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator mode={"modal"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WeeklyScreen" component={WeeklyScreen} />
    </Stack.Navigator>
  );
};

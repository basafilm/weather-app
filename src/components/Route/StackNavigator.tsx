import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../HomeScreen";
import { Weatherdetails } from "../WeatherDetails";

export const StackNavigator = () => {
  const Stack = createStackNavigator();
  const stackNavigation: any = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={Weatherdetails} />
    </Stack.Navigator>
  );
};

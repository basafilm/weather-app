import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Weatherdetails } from "../WeatherDetails";
import { DrawerNavigator } from "./DrawerNavigator";

export const StackNavigator = (props: any) => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="Details" component={Weatherdetails} />
      </Stack.Navigator>
    </>
  );
};

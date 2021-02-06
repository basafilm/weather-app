import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CustomizeButton } from "../CustomizeButton";
import { HomeScreen } from "..//HomeScreen";
import { Weatherdetails } from "../WeatherDetails";

export const StackNavigator = () => {
  const Stack = createStackNavigator();
  const stackNavigation: any = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Hoem"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <CustomizeButton
                onPress={() => {
                  stackNavigation.openDrawer();
                }}
                text="Open"
              />
            );
          },
        }}
      />
      <Stack.Screen name="Details" component={Weatherdetails} />
    </Stack.Navigator>
  );
};

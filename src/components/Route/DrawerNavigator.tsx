import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../HomeScreen";
import { Weatherdetails } from "../WeatherDetails";
import { useNavigation } from "@react-navigation/native";

import { createAppContainer } from "react-navigation";
import { Button } from "react-native";

export const DrawerNavigator = (): JSX.Element => {
  const Drawer = createDrawerNavigator();
  const stackNavigation: any = useNavigation();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => {
              return (
                <Button
                  onPress={() => {
                    stackNavigation.openDrawer();
                  }}
                  title="Open"
                />
              );
            },
          }}
        />
        <Drawer.Screen name="About" component={Weatherdetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

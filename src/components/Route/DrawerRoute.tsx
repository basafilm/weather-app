import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const DrawerRoute = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ModelStackNavigator" component={""} />
      <Drawer.Screen name="Article" component={""} />
    </Drawer.Navigator>
  );
};

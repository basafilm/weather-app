import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../HomeScreen";
import { Drawercontent } from "./Drawercontent";

export const DrawerNavigator = (props: any): JSX.Element => {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator drawerContent={(props) => <Drawercontent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </>
  );
};

import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { WeatherContext } from "./src/components/Context/WeatherContext";
import { HomeScreen } from "./src/components/HomeScreen";
import { Weatherdetails } from "./src/components/WeatherDetails";
import { WeeklyScreen } from "./src/components/WeeklyScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomizeButton } from "./src/components/CustomizeButton";
import { Button, ImageBackground, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ModelStackNavigator"
        component={ModelStackNavigator}
      />
      <Drawer.Screen name="Article" component={Weatherdetails} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const inceptionNavigator = () => {
  return (
    <Stack.Navigator mode={"modal"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Hoem" component={StackNavigator} />
      <Stack.Screen name="InceptNavigator" component={Weatherdetails} />
    </Stack.Navigator>
  );
};
const StackNavigator = () => {
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
const ModelStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WeeklyScreen" component={WeeklyScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [courentCity, setCourentsity] = useState("");

  return (
    <NavigationContainer>
      <WeatherContext.Provider value={{ courentCity, setCourentsity }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
              title: "Courent Weather",
              tabBarIcon: () => {
                return <FontAwesome5 name="home" size={16} color="blue" />;
              },
            }}
          />
          <Tab.Screen name="Weekly" component={ModelStackNavigator} />
        </Tab.Navigator>
      </WeatherContext.Provider>
    </NavigationContainer>
  );
};

export default App;

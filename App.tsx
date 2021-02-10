import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WeatherContext } from "./src/components/Context/WeatherContext";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { StackNavigator } from "./src/components/Route/StackNavigator";
import { ModelStackNavigator } from "./src/components/Route/ModelStackNavigator";

const App = () => {
  const Tab = createBottomTabNavigator();

  const [courentCity, setCourentsity] = useState("");
  const [city, setCity] = useState();

  return (
    <>
      <NavigationContainer>
        <WeatherContext.Provider
          value={{ courentCity, setCourentsity, city, setCity }}
        >
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={StackNavigator}
              options={{
                title: "Courent",
                tabBarIcon: () => {
                  return <FontAwesome5 name="home" size={16} color="blue" />;
                },
              }}
            />
            <Tab.Screen
              name="Weekly"
              component={ModelStackNavigator}
              options={{
                title: "weekly",
                tabBarIcon: () => {
                  return (
                    <MaterialIcons name="view-week" size={24} color="blue" />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </WeatherContext.Provider>
      </NavigationContainer>
    </>
  );
};

export default App;

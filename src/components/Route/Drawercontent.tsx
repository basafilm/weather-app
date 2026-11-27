import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { CityLists } from "../AddItems/CityLists";

export const Drawercontent: any = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.Items}>
        <CityLists />
      </View>
      <View style={styles.DrawerContent}>
        <DrawerContentScrollView style={styles.DrawerScroll}>
          <View>
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="info-circle" size={size} color={color} />
              )}
              label="About"
              onPress={() => {
                navigation.navigate("About");
              }}
            />
          </View>
        </DrawerContentScrollView>

        <DrawerItem
          style={{ flex: 1 }}
          icon={({ color, size }) => (
            <FontAwesome name="sign-out" size={size} color={color} />
          )}
          label="back"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fffff3",
  },
  Items: {
    flex: 3,
  },
  DrawerContent: { flex: 1 },
  DrawerScroll: {
    flex: 1,
  },
});

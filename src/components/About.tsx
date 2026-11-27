import React from "react";
import { Text, View } from "react-native";

export function About(props) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          paddingTop: 50,
          backgroundColor: "#AABBCC",
        }}
      >
        <Text>Created by : Malek Shafii</Text>
      </View>
    </>
  );
}

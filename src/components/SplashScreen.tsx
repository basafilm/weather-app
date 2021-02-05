import React from "react";
import { View, ActivityIndicator } from "react-native";
export const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        margin: "auto",
      }}
    >
      <ActivityIndicator animating size="large" />
    </View>
  );
};

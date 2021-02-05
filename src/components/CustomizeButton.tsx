import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

type ButtonProps = {
  text: string;
  onPress?: (() => void) | undefined;
};
export function CustomizeButton({ text, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text1}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: "auto",
    width: "95%",
    height: "auto",
    backgroundColor: "#fff3",
    borderRadius: 5,
    flexDirection: "column",
    alignContent: "center",
  },
  text1: {
    margin: "auto",
    paddingVertical: 5,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 10,
  },
});

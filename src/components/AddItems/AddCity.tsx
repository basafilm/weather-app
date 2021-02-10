import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function AddCity({ setItesm }: any) {
  const [textInput, setTextInput]: any = useState([]);
  const handelText = (city: string) => {
    if (city) {
      setTextInput(city);
    }
  };

  const handelSubmit = (textInput: string) => {
    setItesm((prev: any) => {
      return [
        {
          key: Math.random(),
          city: textInput,
        },
        ...prev,
      ];
    });
  };
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="City Name"
        onChangeText={handelText}
        clearButtonMode="always"
      />
      <View style={styles.buttonInput}>
        <TouchableOpacity>
          <Ionicons
            name="add-circle-outline"
            size={24}
            color="black"
            onPress={() => {
              handelSubmit(textInput);
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  buttonInput: {
    flex: 1,
  },
});

import React, { useContext, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { WeatherContext } from "../Context/WeatherContext";

export function AddCity({ setItesm }: any) {
  const { city, setCity } = useContext(WeatherContext);
  // const [textInput, setTextInput]: any = useState(city);

  const handelSubmit = (textInput: any) => {
    if (textInput.length > 1) {
      setItesm((prev: any) => {
        return [
          {
            key: Math.random(),
            city: city,
          },
          ...prev,
        ];
      });
    }
  };
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Save City Name"
        onChangeText={(city) => setCity(city)}
        value={city}
      />
      <View style={styles.buttonInput}>
        <TouchableOpacity>
          <EvilIcons
            name="search"
            size={24}
            color="black"
            onPress={() => {
              handelSubmit(city);
              setCity("");
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

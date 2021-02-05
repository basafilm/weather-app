import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export function AddCity({ setCity }: any) {
  const [addCity, setAddCity]: any = useState();

  return (
    <>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={"Courent Location / City Name"}
          onChangeText={(value) => setAddCity(value)}
          clearTextOnFocus
          textContentType="location"
        />
        <View style={styles.SearchClearButton}>
          <TouchableOpacity
            onPress={async () => {
              setCity(addCity);
            }}
          >
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    margin: "auto",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "2%",
  },

  textInput: { flex: 5, height: 40 },
  SearchClearButton: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
});

import React, { useState, useContext } from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddCity } from "./AddCity";
import { WeatherContext } from "../Context/WeatherContext";
import { useNavigation } from "@react-navigation/native";

export function CityLists() {
  const { setCity } = useContext(WeatherContext);
  const [items, setItesm] = useState([
    {
      key: 0,
      city: "",
    },
  ]);
  const deletHandler = (key: number) => {
    setItesm((prev) => {
      return prev.filter((item) => item.key != key);
    });
  };
  const navigation = useNavigation();
  const handelSubmitCity = (city: string) => {
    setCity(city);
    navigation.goBack();
  };

  return (
    <View style={styles.ItemsContainer}>
      <AddCity setItesm={setItesm} />
      <FlatList
        style={styles.flatlistContainer}
        data={items}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatChild}>
              <TouchableOpacity
                style={styles.flatTouch}
                onPress={() => handelSubmitCity(item.city)}
              >
                <Text style={{ textAlign: "left" }}>{item.city}</Text>
              </TouchableOpacity>
              <View style={styles.flatButton}>
                <Button onPress={() => deletHandler(item.key)} title="+" />
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.key.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ItemsContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 10,
    justifyContent: "space-between",
  },

  flatlistContainer: {
    flex: 1,
  },
  flatChild: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatTouch: {
    flex: 1,
  },
  flatButton: {
    flex: 1,
  },
});

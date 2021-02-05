import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export const WeeklyScreen = () => {
  const [items, setItesm] = useState([
    {
      day: "Monday",
      weather: "17c",
    },
  ]);
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={styles.main}>
      <FlatList
        // style={styles.}
        data={items}
        renderItem={(item) => {
          return (
            <View>
              <Text>{`${item.day}:${item.weather}`}</Text>
            </View>
          );
        }}
      />
      <Text>Weekly Screen</Text>
    </View>
  );
};

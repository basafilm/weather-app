import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

export const DailyWeather = ({ daily }: any) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <SafeAreaView style={styles.DailyContainer}>
        {daily?.slice(1).map((item: any) => {
          const dateDays = days[new Date(item.dt * 1000).getDay()];
          return (
            <View key={item.dt} style={styles.dailyDataContainer}>
              <Image
                style={styles.weatherIcone}
                source={{
                  uri:
                    "http://openweathermap.org/img/wn/" +
                    item?.weather[0]?.icon +
                    "@2x.png",
                }}
              />
              <Text style={styles.daysName}>{dateDays}</Text>
              <Text style={styles.maxMinTemp}>
                {`${item?.temp.max?.toFixed(0)}°`}/
                {`${item?.temp.min?.toFixed(0)}°`}
              </Text>
              <Text style={styles.weatherDescriptions}>
                {item?.weather[0]?.main},{item?.weather[0]?.description}
              </Text>
            </View>
          );
        })}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  DailyContainer: {
    flex: 1,
    width: "90%",
    margin: "auto",
  },
  dailyDataContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weatherIcone: { flex: 1, maxWidth: "20%" },
  daysName: {
    flex: 0.5,
    fontStyle: "normal",
    fontSize: 16,
  },
  maxMinTemp: {
    flex: 0.5,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  weatherDescriptions: {
    flex: 1.5,
  },
});

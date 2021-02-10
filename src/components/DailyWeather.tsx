import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const DailyWeather = ({ daily }: any) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <View style={styles.DailyContainer}>
        {daily?.map((item: any) => {
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
                {`${item?.temp.min?.toFixed(0)}°`}/
                {`${item?.temp.max?.toFixed(0)}°`}
              </Text>
              <Text style={styles.weatherDescriptions}>
                {item?.weather[0]?.description}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  DailyContainer: {
    flex: 1,
    width: "100%",
    margin: "auto",
    alignContent: "center",
    backgroundColor: "rgb(220,179,135)",
    padding: 15,
  },
  dailyDataContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weatherIcone: { flex: 1, maxWidth: "20%" },
  daysName: {
    flex: 1,
    fontStyle: "normal",
    fontSize: 16,
  },
  maxMinTemp: {
    flex: 1,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  weatherDescriptions: {
    flex: 1,
  },
});

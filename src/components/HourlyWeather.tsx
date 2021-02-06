import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import moment from "moment";

export const HourlyWeather = ({ hourly }: any) => {
  return (
    <View style={styles.hourlyContainer}>
      <Text style={styles.todayText}>Now</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {hourly?.map((item: any) => {
          const timezoneInMinutes = item.dt / 60;
          const currentTime = moment()
            .utcOffset(timezoneInMinutes)
            .format("HH");
          return (
            <View key={item.dt} style={styles.scrollContainer}>
              <Text style={styles.hourlyDataContainer}>{currentTime}</Text>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.weatherIcone}
                  source={{
                    uri:
                      "http://openweathermap.org/img/wn/" +
                      item?.weather[0]?.icon +
                      "@2x.png",
                  }}
                />
              </View>
              <Text style={styles.maxMinTemp}>
                {`${item?.temp?.toFixed(0)}°`}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hourlyContainer: {
    flex: 1,
    padding: 2,
  },
  todayText: {
    color: "white",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  scrollView: {
    flex: 1,
    overflow: "scroll",
  },
  scrollContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  hourlyDataContainer: {
    flex: 1,
    fontSize: 20,
    fontWeight: "300",
    color: "white",
  },
  iconContainer: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
  },
  weatherIcone: { width: 30, height: 30 },

  maxMinTemp: {
    flex: 1,
    fontSize: 16,
    color: "white",
  },
});

import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import moment from "moment";

export const HourlyWeather = ({ hourly }: any) => {
  return (
    <View style={styles.hourlyContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {hourly?.slice(1).map((item: any) => {
          const timezoneInMinutes = item.dt / 60;
          const currentTime = moment()
            .utcOffset(timezoneInMinutes)
            .format("hh");
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
    padding: 5,
  },
  scrollView: {
    flex: 1,
    overflow: "scroll",
  },
  scrollContainer: { flex: 1, flexDirection: "column", paddingTop: 10 },
  hourlyDataContainer: {
    fontSize: 20,
    fontWeight: "300",
    paddingHorizontal: 10,
  },
  iconContainer: {
    flex: 2,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  weatherIcone: { width: 50, height: 50 },

  maxMinTemp: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    fontSize: 16,
  },
});

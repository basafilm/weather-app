import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { forecastFor7days } from "../servises/index";
import { WeatherContext } from "./Context/WeatherContext";
import { DailyWeather } from "./DailyWeather";
import { HourlyWeather } from "./HourlyWeather";

export const WeeklyScreen = () => {
  const { courentCity } = useContext(WeatherContext);
  const [weeklyData, setWeeklyData]: any = useState();
  const lat = courentCity?.coord?.lat;
  const lon = courentCity?.coord?.lon;

  useEffect(() => {
    (async () => {
      try {
        const weeklyWeather: any = await forecastFor7days(lat, lon);
        setWeeklyData(weeklyWeather);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lat, lon]);
  const { name, main = {}, weather = [] } = courentCity;
  const { temp }: any = main;
  const description: any = weather[0]?.description;
  const icon = weather[0]?.icon;
  const backgroundImage = require("../../assets/weather.png");

  return (
    <SafeAreaView style={styles.weeklyMainContainer}>
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.cityContainer}>
          <View style={styles.cityNameDate}>
            <Text style={styles.cityName}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.weatherIconContainer}>
            <Image
              style={styles.weatherIcone}
              source={{
                uri: "http://openweathermap.org/img/wn/" + icon + "@2x.png",
              }}
            />
          </View>
        </View>
        <View style={styles.tempSunContainer}>
          <View style={styles.tempContainer}>
            <Text style={styles.temp}>{`${temp?.toFixed(0)}℃`}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.hourlyContainer}>
        <HourlyWeather hourly={weeklyData?.hourly} />
      </View>
      <View style={styles.DailyContainer}>
        <DailyWeather
          daily={weeklyData?.daily}
          timezone_offset={weeklyData?.timezone_offset}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  weeklyMainContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
  },
  ImageBackground: {
    flex: 2,
    maxWidth: "100%",
    margin: "auto",
  },
  cityContainer: {
    flex: 1,
    margin: "auto",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityNameDate: { flex: 1, marginTop: "5%" },
  cityName: {
    fontSize: 22,
    color: "#ffffff",
    textAlign: "center",
  },

  weatherIconContainer: {
    flex: 1,
    width: "50%",
    height: "50%",
    marginTop: "5%",
  },
  description: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  weatherIcone: { width: 120, height: 120 },
  tempSunContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  tempContainer: {
    flex: 1,
    width: "100%",
  },
  temp: {
    color: "#ffffff",
    fontSize: 54,
    paddingLeft: "10%",
  },
  hourlyContainer: {
    flex: 1,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  DailyContainer: { flex: 2 },
});

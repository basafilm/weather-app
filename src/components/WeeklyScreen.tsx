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

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate =
    days[new Date(Date.now() + courentCity?.timezone * 1000).getDay()];

  return (
    <View style={styles.weeklyMainContainer}>
      <ImageBackground
        source={backgroundImage}
        style={styles.ImageBackground}
        blurRadius={7}
      >
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
            <Text style={styles.today}>{currentDate} Today</Text>
          </View>
        </View>
        <View style={styles.hourlyContainer}>
          <HourlyWeather hourly={weeklyData?.hourly} />
        </View>
      </ImageBackground>

      <View style={styles.DailyContainer}>
        <DailyWeather
          daily={weeklyData?.daily}
          timezone_offset={weeklyData?.timezone_offset}
        />
      </View>
    </View>
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
    flex: 1,
    maxWidth: "100%",
    margin: "auto",
    paddingTop: 20,
  },
  cityContainer: {
    flex: 2,
    margin: "auto",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityNameDate: { flex: 1, marginTop: "10%" },
  cityName: {
    fontSize: 32,
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
  today: {
    fontWeight: "bold",
    paddingLeft: 10,
    color: "white",
  },
  hourlyContainer: {
    flex: 1,
  },
  DailyContainer: { flex: 1 },
});

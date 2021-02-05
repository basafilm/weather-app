import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

type PropsType = {
  dt: number;
  timezone: number;
};
interface WeatherPropsType {
  courentCity: PropsType;
}

export const CourentDataTime = ({
  courentCity,
}: WeatherPropsType): JSX.Element => {
  const timezone = courentCity.timezone;
  const timezoneInMinutes = timezone / 60;
  const currentTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");
  const currentDate = new Date(Date.now() + courentCity?.timezone * 1000);
  const getToday = currentDate.toDateString();

  return (
    <>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.date}>{getToday}</Text>
        <Text style={styles.time}>{currentTime}</Text>
      </View>
    </>
  );
};

// styles
const styles = StyleSheet.create({
  dateTimeContainer: {
    flex: 1,
    flexDirection: "column",
  },
  date: {
    flex: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontStyle: "italic",
    color: "#ffffff",
  },
  time: {
    flex: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
  },
});

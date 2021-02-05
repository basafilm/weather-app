import React, { useCallback, useContext } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { CourentDataTime } from "./CourentDataTime";
import { CustomizeButton } from "./CustomizeButton";
import { AddCity } from "./AddCity";
import { WeatherContext } from "./Context/WeatherContext";
import moment from "moment";
import { GeoLocation } from "./GeoLocation";

interface WeatherPropsType {
  city: any;
  setCity: any;
  latLon: any;
  setLatLon: any;
}

export const WatherInfo = ({
  setCity,
  latLon,
  setLatLon,
}: WeatherPropsType): JSX.Element => {
  const { courentCity } = useContext(WeatherContext);
  const navigation = useNavigation();
  const openDetails = useCallback(() => {
    navigation.navigate("Details", {
      country: courentCity?.sys?.country,
      city: courentCity?.name,
    });
  }, []);
  console.log(courentCity);
  const { name, sys = {}, main = {}, wind = {}, weather = [] } = courentCity;
  const { sunrise, sunset }: any = sys;
  const { humidity, feels_like, temp, temp_max, temp_min }: any = main;
  const description: any = weather[0]?.description;
  const icon = weather[0]?.icon;
  const { speed }: any = wind;
  const timezone = courentCity.timezone;
  let sunRise = moment()
    .utcOffset(sunrise / 21600)
    .format("h:mm A");

  const backgroundImage = require("../../assets/weather.png");

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.weatherUpperSection}>
          <View style={styles.textInputCourentButtonContainer}>
            <View style={styles.textInputContainer}>
              <AddCity setCity={setCity} />
            </View>
          </View>

          <View style={styles.cityContainer}>
            <View style={styles.cityNameDate}>
              <Text style={styles.cityName}>{name}</Text>

              {/* <View>
                {description?.includes("clear sky") ? (
                  <MaterialCommunityIcons
                    name="weather-cloudy"
                    size={24}
                    color="black"
                  />
                ) : description?.includes("snow") ? (
                  <MaterialCommunityIcons
                    name="weather-pouring"
                    size={24}
                    color="black"
                  />
                ) : description?.includes("Clouds") ? (
                  <MaterialCommunityIcons
                    name="weather-snowy"
                    size={24}
                    color="black"
                  />
                ) : description?.includes("sunny") ? (
                  <MaterialCommunityIcons
                    name="weather-sunny"
                    size={24}
                    color="black"
                  />
                ) : null}
              </View> */}
              <CourentDataTime courentCity={courentCity} />
              <Text style={styles.description}>{description}</Text>
            </View>
            <GeoLocation setLatLon={setLatLon} latLon={latLon} />

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
              <Text style={styles.tempMaxMin}>
                {`Max: ${temp_max?.toFixed(0)}℃`}
              </Text>
              <Text style={styles.tempMaxMin}>
                {`Min: ${temp_min?.toFixed(0)}℃`}
              </Text>
            </View>
          </View>
          <CustomizeButton text={"Details"} onPress={openDetails} />
        </View>
      </ImageBackground>

      <View style={styles.weatherLowerSection}>
        <View style={styles.feelsHumWind}>
          <View style={styles.HumWindContainer}>
            <FontAwesome5 name="temperature-low" size={24} color="black" />
            <View>
              <Text>{`feels_like`}</Text>
              <Text>{`${feels_like?.toFixed(0)}℃`} </Text>
            </View>
          </View>
          <View style={styles.HumWindContainer}>
            <SimpleLineIcons name="drop" size={28} color="black" />
            <View>
              <Text>{`Humidity`}</Text>
              <Text>{`${humidity}%`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.feelsHumWind}>
          <View style={styles.HumWindContainer}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={28}
              color="black"
            />
            <View>
              <Text> {`Wind`}</Text>
              <Text>{`${speed?.toFixed(0)}Km/h`}</Text>
            </View>
          </View>
          <View style={styles.HumWindContainer}>
            <Fontisto name="day-sunny" size={28} color="black" />
            <View>
              <Text> {`Sun Rise`}</Text>
              <Text>{`${sunRise}`}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
// styles
const styles = StyleSheet.create({
  weatherUpperSection: {
    flex: 1,
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  textInputCourentButtonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2%",
  },
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "7%",
    padding: "2%",
  },
  textInput: { height: 40 },
  ImageBackground: {
    flex: 6,
    maxWidth: "100%",
    margin: "auto",
  },
  cityContainer: {
    flex: 3,
    margin: "auto",
    paddingRight: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cityNameDate: { flex: 2, width: "50%", height: "50%" },
  cityName: {
    fontSize: 22,
    color: "#ffffff",
    textAlign: "center",
  },

  weatherIconContainer: {
    flex: 1,
    width: "50%",
    height: "50%",
  },
  description: {
    flex: 1,
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  weatherIcone: { maxWidth: "100%", height: "100%" },
  tempSunContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },
  tempContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
  },
  temp: {
    color: "#ffffff",
    fontSize: 54,
    paddingLeft: "10%",
  },
  tempMaxMin: {
    color: "#ffffff",
    fontSize: 12,
    paddingLeft: "20%",
  },
  sunRiseSetContainer: {
    flex: 1,
    alignContent: "center",
  },
  sunRiseSet: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  weatherLowerSection: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto",
    paddingLeft: "7%",
  },
  feelsHumWind: {
    flex: 1,
    flexDirection: "row",
    padding: "1%",
    alignContent: "center",
    alignItems: "flex-start",
  },
  HumWindContainer: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
  },
});

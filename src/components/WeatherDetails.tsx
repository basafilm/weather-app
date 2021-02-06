import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { RouteProp } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  SimpleLineIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { CourentDateTime } from "./CourentDateTime";

type RootStackParamList = {
  Profile: { country: string; city: string; courentCity: any };
};
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
type ProfileScreenNavigationProp = { navigate: any; push: any };

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
  title: string;
};

export function Weatherdetails({ navigation, route }: Props) {
  const country = route.params.courentCity;
  const { name, sys = {}, main = {}, wind = {}, weather = [] } = country;
  const { sunrise, sunset }: any = sys;
  const { humidity, feels_like, temp, temp_max, temp_min }: any = main;
  const description: any = weather[0]?.description;
  const icon = weather[0]?.icon;
  const { speed }: any = wind;
  const timezone = country.timezone;
  let sunRise = new Date((sunrise + timezone) * 1000)
    .toISOString()
    .slice(11, 19);
  let sunSet = new Date((sunset + timezone) * 1000).toISOString().slice(11, 19);
  const backgroundImage = require("../../assets/weather.png");

  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.weatherUpperSection}>
          <View style={styles.cityContainer}>
            <View style={styles.cityNameDate}>
              <Text numberOfLines={1} style={styles.cityName}>
                {name}
              </Text>
              <CourentDateTime courentCity={country} />
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
              <Text style={styles.tempMaxMin}>
                {`Max: ${temp_max?.toFixed(0)}℃`}
              </Text>
              <Text style={styles.tempMaxMin}>
                {`Min: ${temp_min?.toFixed(0)}℃`}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.weatherLowerSection}>
        <View style={styles.feelsHumWind}>
          <View style={styles.HumWindContainer}>
            <Feather name="sunrise" size={24} color="orange" />
            <View>
              <Text> {`Sun Rise`}</Text>
              <Text>{`${sunRise}`}</Text>
            </View>
          </View>
          <View style={styles.HumWindContainer}>
            <Feather name="sunset" size={24} color="orange" />
            <View>
              <Text> {`Sun Set`}</Text>
              <Text>{`${sunSet}`}</Text>
            </View>
          </View>
        </View>
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
            <MaterialIcons name="visibility" size={24} color="black" />
            <View>
              <Text>{`Visibility`}</Text>
              <Text>{`${country?.visibility / 100} M`}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
// styles
const styles = StyleSheet.create({
  weatherUpperSection: {
    flex: 1,
    alignContent: "center",
  },
  ImageBackground: {
    flex: 1,
    maxWidth: "100%",
    margin: "auto",
  },
  cityContainer: {
    flex: 1.3,
    margin: "auto",
    flexDirection: "row",
    paddingTop: 100,
  },
  cityNameDate: { flex: 2, width: "50%", height: "50%" },
  cityName: {
    fontSize: 32,
    color: "#ffffff",
    textAlign: "center",
  },

  weatherIconContainer: {
    flex: 2,
  },
  description: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
  },
  weatherIcone: { width: 150, height: 150 },
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
    padding: "7%",
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

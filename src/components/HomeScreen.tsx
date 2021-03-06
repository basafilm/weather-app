import React, { useCallback, useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { getWeatherByCityName } from "../servises/index";
import { getWeatherLatLong } from "../servises/index";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { WatherInfo } from "./WatherInfo";
import { SplashScreen } from "./SplashScreen";
import { WeatherContext } from "./Context/WeatherContext";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface GeolocationData {
  latitude: number;
  longitude: number;
}
export function HomeScreen({ navigation }: Props) {
  const { setCourentsity, city, setCity } = useContext(WeatherContext);
  const [latLon, setLatLon] = useState<GeolocationData>({
    latitude: 0,
    longitude: 0,
  });
  const lat: any = latLon.latitude.toFixed(4);
  const lon: any = latLon.longitude.toFixed(4);
  const [loading, setloading] = useState(true);
  const refreshLocation = useCallback(async () => {
    try {
      if (!city) {
        const getByLatLon = await getWeatherLatLong(lat, lon);
        setCourentsity(getByLatLon);
      } else {
        const getWeather = await getWeatherByCityName(city);
        setCourentsity(getWeather);
      }
    } catch (error) {
      throw error;
    }
    setloading(false);
  }, [city]);

  useEffect(() => {
    refreshLocation();
  }, [city, lat, lon]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: "center",
    },
  });
  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <WatherInfo
            city={city}
            setCity={setCity}
            latLon={latLon}
            setLatLon={setLatLon}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

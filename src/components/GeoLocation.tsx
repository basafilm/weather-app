import React, { useState, useCallback } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";

export function GeoLocation({ setLatLon, latLon }: any) {
  const [errorMsg, setErrorMsg]: any = useState(null);
  const [loading, setLoading] = useState(true);
  useCallback(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg(
            "Permission to access location was denied / enter the city name"
          );
        }
        const options: any = {
          enableHighAccuracy: true,
          maximumAge: 5000,
          timeout: 1000,
        };
        let courentLocation = await Location.getCurrentPositionAsync(options);

        setLatLon({
          latitude: courentLocation.coords.latitude,
          longitude: courentLocation.coords.longitude,
        });
      })();
    }
    return () => setLoading(false);
  }, [latLon.latitude]);
  let text: any = "Waiting..";

  if (loading) {
    text = "Loading ...!";
  }
  if (errorMsg) {
    text = errorMsg;
  } else if (latLon) {
    text = null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    textAlign: "center",
  },
});

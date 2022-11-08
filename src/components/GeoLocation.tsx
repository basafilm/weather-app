import React, { useState, useCallback } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Location from "expo-location";

export function GeoLocation({ setCity, setLoading, setErrorMsg }: any) {
  (async () => {
    if (Platform.OS === "android" && !Device.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      let { status } = await Location.requestForegroundPermissionsAsync();
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
      const { coords } = await Location.getCurrentPositionAsync(options);
      if (coords) {
        let { longitude, latitude } = coords;
        const regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        const convert = (array: any) =>
          Object.fromEntries(
            array.map((item: any, index: number) => [item[index], item])
          );
        const address = convert(regionName).undefined;
        setCity(address?.city);
        // setCity({
        //   latitude: coords.latitude,
        //   longitude: coords.longitude,
        //   address: address?.city,
        // });
        setLoading(false);
      }
    }
  })();
}

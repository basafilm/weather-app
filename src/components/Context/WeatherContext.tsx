import React, { createContext } from "react";

interface WeatherPropsType {
  courentCity: any;
  setCourentsity: any;
  city: any;
  setCity: any;
}
export const WeatherContext = createContext<WeatherPropsType>({
  courentCity: {},
  setCourentsity: {},
  city: {},
  setCity: {},
});

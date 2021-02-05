import React, { createContext } from "react";

interface WeatherPropsType {
  courentCity: any;
  setCourentsity: any;
}
export const WeatherContext = createContext<WeatherPropsType>({
  courentCity: {},
  setCourentsity: {},
});

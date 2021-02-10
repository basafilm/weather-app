const token = "772fedbd6e67d600702779d68d5c7f91";
const url = "https://api.openweathermap.org/data/2.5/weather?";

async function responseConf<T>(response: any): Promise<T> {
  if (!response.ok) {
    const message = `An error has ocurred: ${response.status}`;
    throw new Error(message);
  }

  const weather = await response.json();
  return weather;
}

export async function getWeatherByCityName<T>(city: string): Promise<T> {
  if (!city) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(`${url}q=${city}&APPID=${token}&units=metric`);
  return responseConf(response);
}
export async function getWeatherLatLong<T>(
  lat: number,
  lon: number
): Promise<T> {
  if (!lat && lon) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(
    `${url}lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${token}&units=metric`
  );
  return responseConf(response);
}
export async function getWeatherByCityID<T>(id: number): Promise<T> {
  if (!id) {
    throw new Error("You need to provide id");
  }
  const response = await fetch(`${url}id=${id}&APPID=${token}`);

  return responseConf(response);
}

//example: api.openweathermap.org/data/2.5/weather?zip=94040,us&appid={API key}
export async function getWeatherByZip<T>(
  zip: number,
  country: string
): Promise<T> {
  if (!zip && !country) {
    throw new Error("You need to provide zip and country");
  }
  const response = await fetch(`${url}zip=${zip},${country}&APPID=${token}`);

  return responseConf(response);
}
export async function forecastFor7days<T>(
  lat: number,
  lon: number
): Promise<T> {
  if (!lat && !lon) {
    throw new Error("You need to provide city");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${token}&units=metric`
  );
  return responseConf(response);
}

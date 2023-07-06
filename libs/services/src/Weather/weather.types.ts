type City = {
  // City name (eg: Budapest)
  name: string;
  // URL (eg: https://url.com/.../budapest.jpg)
  picture: string;
};

export enum TempUnit {
  Celsius = 'C',
  Kelvin = 'K',
  Farenheit = 'F'
};

export type WeatherDTO = {
  // Date as UTC ISO string
  date: string;

  city: City;

  tempType: `${TempUnit}`;

  // temperature (number float)
  temp: number;
};

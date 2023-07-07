export type ForecastDTO = {
  /* Latitude of the location, decimal (−90; 90) */
  lat: number;
  /* Longitude of the location, decimal (-180; 180) */
  lon: number;
  /* Timezone in the ±XX:XX format */
  tz: string;
  /*  Date specified in the API request in the `YYYY-MM-DD` format (from 1979-01-02 up to the previous day before the current date) */
  date: string;
  /* Units of measurement specified in the request. */
  units: 'metric';
  /* Cloud cover in percent at 12:00 for the date specified in the request */
  cloudcover: HourSpecifics;
  /* Relative humidity in percent at 12:00 for the date specified in the request */
  humidity: HourSpecifics;
  /* Total amount of liquid water equivalent of precipitation for the date specified in the request */
  precipitation: { total: number };
  /* Atmospheric pressure at 12:00 for the date specified in the request */
  pressure: HourSpecifics;

  /* Temperature related information */
  temperature: HourSpecifics & { min: number; max: number };

  wind: {
    /* Maximum wind speed related information */
    max: number;
    /* Maximum wind speed for the date specified in the request */
    speed: number;
    /* Wind cardinal direction relevant to the maximum wind speed, degrees (meteorological) */
    direction: number;
  };

};

type HourSpecifics = {
  /* night metric at 00:00 for the date specified in the request */
  night?: number;
  /* morning metric at 06:00 for the date specified in the request */
  morning?: number;
  /* afternoon metric at 12:00 for the date specified in the request */
  afternoon?: number;
  /* evening metric at 18:00 for the date specified in the request */
  evening?: number;
}

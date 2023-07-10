import type { Meta } from '@storybook/react-native';

import { ForecastItem } from './ForecastItem';
import { ForecastList } from './ForecastList';

const Story: Meta<typeof ForecastList> = {
  component: () => (
    <ForecastList>
      {weatherMock.daily.splice(0,5).map((d) => (
        <ForecastItem
          dt={d.dt}
          key={d.dt}
          temp={d.temp}
          weather={d.weather}
        />
      ))}
    </ForecastList>
  ),
  title: '5 day Forecast',
};

export default Story;

export const Primary = {
  args: {
    locality: 'Stockholm',
    temperature: 12.2,
    data: {
      weather: [{
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }]
    }
  },
};


const weatherMock = {
  "lat": 55.6053,
  "lon": 13.0002,
  "timezone": "Europe/Stockholm",
  "timezone_offset": 7200,
  "current": {
    "dt": 1688997439,
    "sunrise": 1688956681,
    "sunset": 1689018490,
    "temp": 18.82,
    "feels_like": 19.13,
    "pressure": 1017,
    "humidity": 91,
    "dew_point": 17.32,
    "uvi": 0.89,
    "clouds": 100,
    "visibility": 10000,
    "wind_speed": 1.38,
    "wind_deg": 22,
    "wind_gust": 2.03,
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ]
  },
  "daily": [
    {
      "dt": 1688986800,
      "sunrise": 1688956681,
      "sunset": 1689018490,
      "moonrise": 1688941740,
      "moonset": 1688991120,
      "moon_phase": 0.75,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 20.21,
        "min": 16.2,
        "max": 21.32,
        "night": 16.25,
        "eve": 17.58,
        "morn": 18.33
      },
      "feels_like": {
        "day": 20.27,
        "night": 16.33,
        "eve": 17.8,
        "morn": 18.05
      },
      "pressure": 1017,
      "humidity": 76,
      "dew_point": 15.85,
      "wind_speed": 6.47,
      "wind_deg": 150,
      "wind_gust": 9.24,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 1,
      "rain": 4.35,
      "uvi": 2.14
    },
    {
      "dt": 1689073200,
      "sunrise": 1689043157,
      "sunset": 1689104831,
      "moonrise": 1689028620,
      "moonset": 1689082800,
      "moon_phase": 0.8,
      "summary": "Expect a day of partly cloudy with clear spells",
      "temp": {
        "day": 19.3,
        "min": 15,
        "max": 20.55,
        "night": 18.25,
        "eve": 20.3,
        "morn": 16.09
      },
      "feels_like": {
        "day": 19.04,
        "night": 17.96,
        "eve": 20.06,
        "morn": 16.03
      },
      "pressure": 1016,
      "humidity": 67,
      "dew_point": 12.94,
      "wind_speed": 7.93,
      "wind_deg": 128,
      "wind_gust": 14.01,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": 25,
      "pop": 0.12,
      "uvi": 6.45
    },
    {
      "dt": 1689159600,
      "sunrise": 1689129634,
      "sunset": 1689191168,
      "moonrise": 1689115620,
      "moonset": 1689174360,
      "moon_phase": 0.83,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 19.08,
        "min": 16.44,
        "max": 20.6,
        "night": 16.56,
        "eve": 19.69,
        "morn": 16.63
      },
      "feels_like": {
        "day": 19.26,
        "night": 16.41,
        "eve": 19.59,
        "morn": 16.83
      },
      "pressure": 1005,
      "humidity": 85,
      "dew_point": 16.52,
      "wind_speed": 9.12,
      "wind_deg": 236,
      "wind_gust": 15.83,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 90,
      "pop": 1,
      "rain": 22.69,
      "uvi": 3.83
    },
    {
      "dt": 1689246000,
      "sunrise": 1689216115,
      "sunset": 1689277503,
      "moonrise": 1689202740,
      "moonset": 1689265860,
      "moon_phase": 0.86,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 18.18,
        "min": 14.34,
        "max": 19.26,
        "night": 16.05,
        "eve": 18.02,
        "morn": 15.92
      },
      "feels_like": {
        "day": 17.93,
        "night": 15.85,
        "eve": 17.84,
        "morn": 15.76
      },
      "pressure": 1011,
      "humidity": 72,
      "dew_point": 13.22,
      "wind_speed": 5.99,
      "wind_deg": 252,
      "wind_gust": 8.71,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 74,
      "pop": 1,
      "rain": 5.59,
      "uvi": 4.65
    },
    {
      "dt": 1689332400,
      "sunrise": 1689302597,
      "sunset": 1689363834,
      "moonrise": 1689290280,
      "moonset": 1689357060,
      "moon_phase": 0.89,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 19.15,
        "min": 14.63,
        "max": 20.09,
        "night": 16.54,
        "eve": 19.04,
        "morn": 15.97
      },
      "feels_like": {
        "day": 18.82,
        "night": 16.29,
        "eve": 18.78,
        "morn": 15.79
      },
      "pressure": 1015,
      "humidity": 65,
      "dew_point": 12.43,
      "wind_speed": 4.54,
      "wind_deg": 281,
      "wind_gust": 7.03,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 13,
      "pop": 0.95,
      "rain": 1.88,
      "uvi": 5.61
    },
    {
      "dt": 1689418800,
      "sunrise": 1689389082,
      "sunset": 1689450162,
      "moonrise": 1689378420,
      "moonset": 1689447480,
      "moon_phase": 0.93,
      "summary": "There will be clear sky until morning, then partly cloudy",
      "temp": {
        "day": 21.34,
        "min": 14.95,
        "max": 21.55,
        "night": 19.13,
        "eve": 19.23,
        "morn": 18.04
      },
      "feels_like": {
        "day": 21.07,
        "night": 18.8,
        "eve": 19.09,
        "morn": 17.73
      },
      "pressure": 1013,
      "humidity": 59,
      "dew_point": 12.83,
      "wind_speed": 6.69,
      "wind_deg": 136,
      "wind_gust": 13.56,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": 93,
      "pop": 0,
      "uvi": 6
    },
    {
      "dt": 1689505200,
      "sunrise": 1689475569,
      "sunset": 1689536487,
      "moonrise": 1689467400,
      "moonset": 1689536880,
      "moon_phase": 0.96,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 21.44,
        "min": 17.87,
        "max": 21.55,
        "night": 18.61,
        "eve": 20.11,
        "morn": 19.1
      },
      "feels_like": {
        "day": 21.26,
        "night": 18.25,
        "eve": 19.9,
        "morn": 19.23
      },
      "pressure": 1009,
      "humidity": 62,
      "dew_point": 13.82,
      "wind_speed": 6.22,
      "wind_deg": 142,
      "wind_gust": 11.37,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 76,
      "pop": 0.2,
      "rain": 0.16,
      "uvi": 6
    },
    {
      "dt": 1689591600,
      "sunrise": 1689562059,
      "sunset": 1689622809,
      "moonrise": 1689557400,
      "moonset": 1689625200,
      "moon_phase": 0,
      "summary": "Expect a day of partly cloudy with rain",
      "temp": {
        "day": 18.48,
        "min": 16.1,
        "max": 18.88,
        "night": 16.1,
        "eve": 18.04,
        "morn": 17.94
      },
      "feels_like": {
        "day": 18.21,
        "night": 15.7,
        "eve": 17.73,
        "morn": 17.72
      },
      "pressure": 1007,
      "humidity": 70,
      "dew_point": 12.95,
      "wind_speed": 11.31,
      "wind_deg": 232,
      "wind_gust": 14.21,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 20,
      "pop": 1,
      "rain": 1.93,
      "uvi": 6
    }
  ]
}

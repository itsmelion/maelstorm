import axios from 'axios';
import Config from 'react-native-config';

/**
 * Setup and axios instance to fly network requests.
 * its good for its neat api, familiarity and useful interceptors.
*/
export const network = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000 * 60 * 0.10,
});

network.interceptors.request.use((config) => {
  const params = {
    ...config.params,
    appid: Config.OPEN_WEATHER_API_KEY,
  };

  return {
    ...config,
    params
  };
})

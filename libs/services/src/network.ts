import axios from 'axios';

// We all know what they say about API keys and env-vars.. but i hardcoded. yep.
const baseURL = process.env.API_URL || 'https://api.openweathermap.org';
const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY || 'fb74eb4077417a230cd10f54a92dec87';


/**
 * Setup and axios instance to fly network requests.
 * its good for its neat api, familiarity and useful interceptors.
*/
export const network = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

network.interceptors.request.use((config) => {
  const params = {
    ...config.params,
    appid: OPEN_WEATHER_API_KEY,
  };

  return {
    ...config,
    params
  };
})

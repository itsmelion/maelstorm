import axios from 'axios';

const baseURL = process.env.API_URL || 'https://us-central1-mobile-assignment-server.cloudfunctions.net';


/**
 * Setup and axios instance
 * its good for its neat api, familiarity and useful interceptors.
*/
export const network = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// src/api.js

import mockData from './mock-data';
import NProgress from 'nprogress';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};
// this function will remove the code from the URL once is used it

const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

/**
 *
 * This function will fetch the list of all events
 */

export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }
  if (!navigator.onLine) {
    const events = localStorage.getItem('lastEvents');
    NProgress.done();
    return events ? JSON.parse(events) : [];
  }
  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      'https://2ec5nwywrk.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/' + //poner el tuyo
      token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      NProgress.done();
      localStorage.setItem('lastEvents', JSON.stringify(result.events));
      return result.events;
    } else return null;
  }
};

const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);

    const response = await fetch(
      'https://2ec5nwywrk.execute-api.eu-central-1.amazonaws.com/dev/api/token' +
        '/' +
        encodeCode
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem('access_token', access_token);
    return access_token;
  } catch (error) {
    error.json();
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const response = await fetch(
        'https://2ec5nwywrk.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url'
      );
      const result = await response.json();
      const { authUrl } = result;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

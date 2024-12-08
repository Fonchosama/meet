'use strict';

const { google } = require('googleapis');
const calendar = google.calendar('v3');
const SCOPES = [
  'https://www.googleapis.com/auth/calendar.events.public.readonly',
];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = ['https://Fonchosama.github.io/meet/'];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  /**
   *
   * Scopes array is passed to the `scope` option.
   *
   */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “error” and “response”
     */

    oAuth2Client.getToken(code, (error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
    .then((results) => {
      // Respond with OAuth token
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

module.exports.getCalendarEvents = async (event) => {
  const access_token = decodeURIComponent(
    `${event.pathParameters.access_token}`
  ); //Declare an access_token variable and get the token using the same method you used to get the code in the getAccessToken() function.
  oAuth2Client.setCredentials({ access_token }); // et the access token as credentials in oAuth2Client like so: oAuth2Client.setCredentials({ access_token }); right after the line where you declared access_token.

  return new Promise((resolve, reject) => {
    //Step 4: Code your asynchronous logic.
    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          return reject(error);
        }
        return resolve(response);
      }
    );
  })
    .then((results) => {
      // Step 5: Declare what happens when the promise is resolved.
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ events: results.data.items }),
      };
    })
    .catch((error) => {
      // Handle error ... Step 6: Code your error handling logic.
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
};

import React from 'react';

function eventMaker () {

const CLIENT_ID = '217797051125-141a2rvr26gr6gbicoe2tqpsj14a3vv4.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDoneJG3EYsL2tHAAVg84S0rf1-BYLAV7Q';

      // Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const authorizeButton = document.getElementById('authorize_button');
const signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
function handleClientLoad() {
  window.gapi.load('client:auth2', initClient);
}

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
function initClient() {
  window.gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
          // Listen for sign-in state changes.
    window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
    updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}
      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}
      /**
       *  Sign in the user upon button click.
       */
function handleAuthClick(event) {
  window.gapi.auth2.getAuthInstance().signIn();
}

      /**
       *  Sign out the user upon button click.
       */
function handleSignoutClick(event) {
  window.gapi.auth2.getAuthInstance().signOut();
}

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
function appendPre(message) {
  const pre = document.getElementById('content');
  const textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}
      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
function listUpcomingEvents() {
  window.gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response) {
    const events = response.result.items;
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (let i = 0; i < events.length; i++) {
        const event = events[i];
        const when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}

var event = {
  'summary': 'Birthday Dinner',
  'location': '420 Bayland Ave.',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2020-09-3T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2020-09-3T17:00:00-09:00',
    'timeZone': 'America/Los_Angeles',
  },
  // 'recurrence': [
  //   'RRULE:FREQ=DAILY;COUNT=2'
  // ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};

var request = window.gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});

request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});

return (
  <div>
    <button id="authorize_button" style="display: none;">Authorize</button>
    <button id="signout_button" style="display: none;">Sign Out</button>
  </div>
) 
}

export default eventMaker; 
const google = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

const scope = [
    'https://www.googleapis.com/auth/calendar'
  ];


import React, {useState} from "react";
import '../styles/socialStyle.css'

function Events () {

//   const CLIENT_ID = '217797051125-141a2rvr26gr6gbicoe2tqpsj14a3vv4.apps.googleusercontent.com';
//   const API_KEY = 'AIzaSyDoneJG3EYsL2tHAAVg84S0rf1-BYLAV7Q';
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  var gapi = window.gapi;

  const [summary, setSummary] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [start, setStart] = useState();  
  const [end, setEnd] = useState();
  const [attendees, setAttendees] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("summary is " + summary);
    console.log("location is " + location);
    console.log("description is " + description);
    console.log("day is" + day)
    console.log("start is " + start);
    console.log("end is " + end);
    console.log("attendees is " + attendees);
  };
  
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('success!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(()=> {
        var event = {
          'summary': 'Fight with ' + summary + '!',
          'location': location,
          'description': description,
          'start': {
            'dateTime': '2020-'+month+'-'+day+'T17:00:00-0'+start+':00',
            'timeZone': 'America/Chicago',
          },
          'end': {
            'dateTime': '2020-'+month+'-'+day+'T17:00:00-0'+end+':00',
            'timeZone': 'America/Chicago',
          },
          // 'recurrence': [
          //   'RRULE:FREQ=DAILY;COUNT=2'
          // ],
          'attendees': [{
              'email': attendees}],
          'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes': 24 * 60},
              {'method': 'popup', 'minutes': 30},
            ],
          },
        };

        var request = gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource':event,
        })

        request.execute(event => {
          window.open(event.htmlLink)
        })
      })
    })
  }
  
  return (
    <div>
        <h2>Schedule a Fight!</h2>
    <form className="fight-scheduler" onSubmit={handleSubmit}>
                <br />
              <input
                className="form-control"
                type="text"
                placeholder="Challenger's name?"
                name="summary"
                onChange={e => setSummary(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Address of fight?"
                name="location"
                onChange={e => setLocation(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Reason for fight?"
                name="description"
                onChange={e => setDescription(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="number"
                min="0"
                max="31"
                placeholder="Month of Fight: (MM)?"
                name="month"
                onChange={e => setMonth(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="number"
                min="0"
                max="31"
                placeholder="Day of Fight: (DD)?"
                name="day"
                onChange={e => setDay(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="number"
                min="0"
                max="9"
                placeholder="Start time of fight?"
                name="start"
                onChange={e => setStart(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="number"
                min="0"
                max="9"
                placeholder="End time of fight?"
                name="end"
                onChange={e => setEnd(e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Email of challenger?"
                name="attendees"
                onChange={e => setAttendees(e.target.value)}
              />
      </form>
      <br />
      <br />
      <button class="fight-sub" onClick={handleClick}>Schedule Fight!</button>
      </div>
  ) 
  }
  
  export default Events; 
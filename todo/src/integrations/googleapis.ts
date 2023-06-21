import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  // creds need to put in secret
});

const calendar = google.calendar({ version: 'v3', auth });

calendar.events.list({
  calendarId: 'primary',
  timeMin: new Date().toISOString(),
  maxResults: 10,
  singleEvents: true,
  orderBy: 'tartTime',
}, (err, res) => {
  if (err) return console.error('google api err', err);

  if(res) {
    const events = res.data.items;
    console.log(events)
  }
  
    
});
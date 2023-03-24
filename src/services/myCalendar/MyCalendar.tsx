import { GoogleCalendarEvents } from 'react-google-calendar-events';

function MyCalendar() {
  return (
    <div>
      <GoogleCalendarEvents
        calendarId={process.env.REACT_APP_CALENDAR_ID}
        apiKey={process.env.REACT_APP_API_KEY}
      />
    </div>
  );
}

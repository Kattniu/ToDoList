// Autenticación con Google Calendar API
function initGoogleCalendar() {
    gapi.load('client:auth2', initAuth);
  }
  
  function initAuth() {
    gapi.auth2.init({
      client_id: 'YOUR_GOOGLE_CLIENT_ID'
    });
  }
  
  function addEventToGoogleCalendar(event) {
    const eventDetails = {
      summary: event.name,
      location: event.location,
      description: event.description,
      start: {
        dateTime: event.start,
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: event.end,
        timeZone: 'America/Los_Angeles'
      }
    };
    const request = gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: eventDetails
    });
    request.execute();
  }
  
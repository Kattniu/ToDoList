document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let city = document.getElementById('city').value;
    getWeather(city);
    getEvents(city);
  });
  
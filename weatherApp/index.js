window.addEventListener('load', () => {
  let long;
  let lat;

  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureTimezone = document.querySelector('.location-timezone');
  let temperatureDescription = document.querySelector('.temperature-description');
  
  console.log(navigator.geolocation);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      // console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(long, lat);

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b5a76916d09de5ac27fab0a4d4fc7e02`;

      fetch(api)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(data => {
        
        const { temp } = data.main;
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent = data.weather[0].main;
        console.log(temp);

        console.log('data', data);
        return data;
      })

    })
  }
})
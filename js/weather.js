const API_KEY ="83ecd2278ea1f5cd21bdd7b9f7590076";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".sky");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
};

function onGeoError() {
  alert("날씨를 알려 줄 수 없어요.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

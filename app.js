const API_KEY = `f5b8bc06c7ed08d6cc717aea0a0592ea`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const API = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
// const IMG_URL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getweather = async (city) => {
  weather.innerHTML = `<h2>Loding......</h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  //   console.log(response);
  const data = await response.json();
  return showWeather(data);
};
/*getweather*/ const showWeather = (data) => {
  // console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h2>city not found</h2>`;
    return;
  }
  weather.innerHTML = `
    <div>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Opps!" />
    </div>
    <div>
      <h2>${Math.round(data.main.temp)}°C</h2>
      <h4>${data.weather[0].main}</h4>
      <h4>${data.name}</h4>
    </div>`;
};
form.addEventListener("submit", function (event) {
  getweather(search.value);
  event.preventDefault(); /*preventdefault stop form reload */
});

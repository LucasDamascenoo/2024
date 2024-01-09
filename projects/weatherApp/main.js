const apiKey = "a7332f10e7ef2652790326534158f802";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("Erro ao obter dados meteorológicos.");
    }

    const data = await response.json();

    const tempArrumada = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${tempArrumada} ºc`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity} %`;
    document.querySelector(".speed").innerHTML = `${data.wind.speed} km/h`;

    const weatherType = data.weather[0].main.toLowerCase();

    const iconMap = {
      clouds: "./img/clouds.png",
      clear: "./img/clear.png",
      rain: "./img/rain.png",
      drizzle: "./img/drizzle.png",
      mist: "./img/mist.png",
      snow: "./img/snow.png",
    };

    icon.src = iconMap[weatherType] || "";
  } catch (error) {
    console.error("Erro ao processar a solicitação:", error.message);

    alert("erro na api");
  }
}

btn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkWeather(searchBox.value);
  } else {
    alert("Por favor, insira um nome de cidade válido.");
  }
});

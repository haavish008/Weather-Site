async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const apiKey = "9418a037f955219f8244a1fb39d754a9"; // ← paste your key locally
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><span>🌡️ Temperature:</span> ${data.main.temp} °C</p>
      <p><span>☁️ Weather:</span> ${data.weather[0].description}</p>
      <p><span>💧 Humidity:</span> ${data.main.humidity}%</p>
      <p><span>🌬️ Wind Speed:</span> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML =
      `<p class="error">City not found or network error.</p>`;
    console.error(error);
  }
}

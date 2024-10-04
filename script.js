document.getElementById("searchBtn").addEventListener("click", async function() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const apiKey = '3720249e39722a94d8b0fdbbc84157f8'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data); // Log the full response
        
        if (response.ok && data.weather) {
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = `${data.main.temp}°C`;
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind Speed: ${data.wind.speed} km/h`;
        } else {
            alert("City not found, please try again!");
        }
    } catch (error) {
        console.error(error);
        alert("Unable to fetch weather data at the moment. Please try again later.");
    }
});


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function showWeatherCityDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'getyourowntokenbrother';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherCityInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherCityInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });

}

function showWeatherLatLonDetails(event) {
    event.preventDefault();

    const latitude = document.getElementById("lat").value;
    const longitude = document.getElementById("lon").value;

    const apiKey = 'getyourowntokenbrother';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherLatLonInfo');

            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherLatLonInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById('weatherCityForm').addEventListener('submit',showWeatherCityDetails );
document.getElementById('weatherLatLonForm').addEventListener('submit',showWeatherLatLonDetails );

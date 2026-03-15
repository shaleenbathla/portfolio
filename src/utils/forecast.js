const request = require('request')
require('dotenv').config();


const forecast = (latitude, longitude, callback) => {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.cod !== 200) {
            callback('Unable to find location: ' + (body.message || 'Unknown error'), undefined);
        } else {
            const weather = body.weather && body.weather[0];
            const main = body.main;
            if (!weather || !main) {
                callback('Incomplete weather data received.', undefined);
                return;
            }
            const data = `${weather.description}. It is currently ${main.temp}°C. Feels like ${main.feels_like}°C. Humidity: ${main.humidity}%. Wind speed: ${body.wind && body.wind.speed} m/s.`;
            callback(undefined, data);
        }
    });
};

module.exports = forecast

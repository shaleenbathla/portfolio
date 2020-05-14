const forecast = require('../src/utils/forecast');

// Example coordinates for London
const latitude = 51.5074;
const longitude = -0.1278;

forecast(latitude, longitude, (error, data) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Weather data:', data);
    }
});
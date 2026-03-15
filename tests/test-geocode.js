const geocode = require('../src/utils/geocode');

// Example address
const address = 'London';

geocode(address, (error, data) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Geocode data:', data);
    }
});

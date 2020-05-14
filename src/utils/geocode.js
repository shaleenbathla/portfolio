const request = require('request')
require('dotenv').config();

const geocode = (address, callback) => {
    const access_token = `access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
    const limit = 'limit=1'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?' + access_token + '&' + limit

    request({url,json : true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to location service!',undefined)
        }
        else if (!body || body.error) {
            console.error('Geocode API error or missing body:', body);
            callback('Unable to find location. URL has errors/missing part!', undefined);
        }
        else if (!body.features || !Array.isArray(body.features) || body.features.length === 0) {
            console.error('Geocode API response missing features or features is empty:', body);
            callback('Unable to find location. Try another search!', undefined);
        }
        else {
            const result = {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            };
            console.log('Geocode result:', result);
            callback(undefined, result);
        }
    })
}

module.exports = geocode
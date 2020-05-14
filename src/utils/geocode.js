const request = require('request')

const geocode = (address,callback) => {
    const access_token = 'access_token=pk.eyJ1Ijoid2FybG9ja3gwMDciLCJhIjoiY2swYmhxeTRjMHVuOTNpcTg4b25ibTZvZiJ9._uvecyaB1vELmiKbfK6IOg'
    const limit = 'limit=1'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?' + access_token + '&' + limit

    request({url,json : true}, (error,{ body }) => {
        if(error){
            callback('Unable to connect to location service!',undefined)
        }
        else if(body.error){
            callback('Unable to find location.URL has errors/missing part!',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search!',undefined)
        }
        else{
            callback(undefined,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
//had trouble with the api key given and couldn't get access
//started to hardcode until I hard back about this but never heard back

const lat = 36.0331
const long = 86.7828
APIkey = '25e989bd41e3e24ce13173d8126e0fd6'


//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

export const getWeather = () => {
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${APIkey}`)
            .then(response => response.json())
}

export const getWeatherTest = () =>
{
    return  {
    "lat": 36.0331,
    "lon": 86.7828,
    "timezone": "America/Tennessee",
    "timezone_offset": -18000,
    "current": {
      "dt": 1646318698,
      "sunrise": 1646306882,
      "sunset": 1646347929,
      "temp": 282.21,
      "feels_like": 278.41,
      "pressure": 1014,
      "humidity": 65,
      "dew_point": 275.99,
      "uvi": 2.55,
      "clouds": 40,
      "visibility": 10000,
      "wind_speed": 8.75,
      "wind_deg": 360,
      "wind_gust": 13.89,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ]
    },

      "daily": [
      {
        "dt": 1646326800,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "moonrise": 1646309880,
        "moonset": 1646352120,
        "moon_phase": 0.03,
        "temp": {
          "day": 281.63,
          "min": 271.72,
          "max": 282.21,
          "night": 271.72,
          "eve": 277.99,
          "morn": 280.92
        },
        "feels_like": {
          "day": 277.83,
          "night": 264.72,
          "eve": 273.35,
          "morn": 277.66
        },
        "pressure": 1016,
        "humidity": 55,
        "dew_point": 273.12,
        "wind_speed": 9.29,
        "wind_deg": 3,
        "wind_gust": 16.48,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 49,
        "pop": 0.25,
        "rain": 0.11,
        "uvi": 3.38
     } ]
    
}
}
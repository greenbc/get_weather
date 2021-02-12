
const form = document.querySelector('#weatherForm')

form.addEventListener('submit', ( event ) => {
    event.preventDefault()
    let city_name = event.path[0][0].value;
    console.log(city_name)

    function getWeather( city_name ) {
        const API_key = '3524c7e03ca4ce7ff7c610896f6024b0';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            var fahrenheit_max = Math.round(((parseFloat(data.main.temp_max)-273.15)*1.8)+32);
            var fahrenheit_min = Math.round(((parseFloat(data.main.temp_min)-273.15)*1.8)+32);
        
            document.getElementById('cityResult').innerHTML = data.name;
            document.getElementById('highResult').innerHTML = fahrenheit_max + '&deg;';
            document.getElementById('lowResult').innerHTML = fahrenheit_min + '&deg;';
            document.getElementById('forecastResult').innerHTML = data.weather[0].description;
            document.getElementById('humidityResult').innerHTML = data.main.humidity;
            console.log(data)
        })
        .catch(function() {})
    }
    getWeather( city_name );

})
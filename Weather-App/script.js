let key = '293ea705d566c41d8370f27fe1bf8fcb';
let city = document.getElementById('city');
let desc = document.getElementById('desc');
let windspeed = document.getElementById('windspeed');
let hum = document.getElementById('hum');
let temp = document.getElementById('temp');

// show data
let c = document.getElementById('c');
let d = document.getElementById('d');
let ws = document.getElementById('ws');
let t = document.getElementById('t');
let h = document.getElementById('h');
let clo = document.getElementById('clo');
function fetchData(){
    let cityname = document.getElementById('cityname').value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`

    
    fetch(api)
    .then(response=>response.json())
    .then(data=>{
        c.innerHTML = "City:- ";
        city.innerHTML = data.name;
        d.innerHTML = "Description:- ";
        desc.innerHTML = data.weather[0].description;
        ws.innerHTML = "Wind-Speed:- ";
        windspeed.innerHTML = data.wind.speed;
        h.innerHTML = "Humidity:- ";
        hum.innerHTML = data.main.humidity;
        t.innerHTML = "Temperature:- ";
        temp.innerHTML = Math.round((data.main.temp - 273.15)* 9/5 + 3);
        clo.innerHTML = ' °C';
    })
}



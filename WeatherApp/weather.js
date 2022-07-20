 function getWeather(){
let req = new XMLHttpRequest();

let txt = document.getElementById("location").value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&appid=93f26e3c57081a6210de53b8dcfdfea4`;
req.open('GET', url, true);


req.onload = function(){
    if(req.status >= 200 && req.status < 400){
        let data = JSON.parse(req.responseText);
        document.getElementById("temp").textContent = data.main.temp;
    }
}


req.send();

// message on error
req.onerror = function(){
    console.log("Error");
}
}

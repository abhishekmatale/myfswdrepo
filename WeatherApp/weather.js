  function showPosition(position) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=93f26e3c57081a6210de53b8dcfdfea4`;

    getWeather(url);
  }

 function getWeather(url){
// create a request object

let req = new XMLHttpRequest();

// set the request type and URL

let txt = document.getElementById("location").value;

req.open('GET', url, true);

// onload of request
req.onload = function(){
    if(req.status >= 200 && req.status < 400){
        let data = JSON.parse(req.responseText);
        if(document.getElementById("location").value == "undefined" || document.getElementById("location").value==""){
            document.getElementById("location").value = `${data.name}, ${data.sys.country}`;
        }
        let dtime = new Date(data.dt*1000);
        document.getElementById("wdesc").textContent = ` ${data.weather[0].main} : ${data.weather[0].description}`;
    }
}
// send the request

req.send();

// message on error
req.onerror = function(){
    console.log("Error");
}
}

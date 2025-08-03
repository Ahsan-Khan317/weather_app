let btn = document.querySelector("#searchBtn");
let searchs = document.querySelector("#cityInput") 
const apikey = "e5e3bb906a5f375c1602e0164d5d2162";  
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let citynames = document.querySelector("#cityName");
let wthricon = document.querySelector("#weatherIcon");
let temprt = document.querySelector("#temperature");
let wnd = document.querySelector("#wind");
let vsbl = document.querySelector("#visibility");
let prs = document.querySelector("#pressure");
let hmd = document.querySelector("#humidity");


async function getweather(cityname) {
   
    let response = await fetch(apiUrl + cityname + `&appid=${apikey}`);
    let data = await response.json();

   

let speed1 = `${data.wind.speed} km/hr `;
wnd.textContent = speed1;
let humid = `${data.main.humidity} % `;
hmd.textContent = humid;
let presr = `${data.main.pressure} mb `;
prs.textContent = presr;
let tempr = `${data.main.temp}°C`;
temprt.textContent = tempr;
let visibilit = `${(data.visibility / 1000).toFixed(1)} km`;
vsbl.textContent = visibilit;
let uid = `${data.weather[0].icon}`; console.log(uid);
let imgurl = `https://openweathermap.org/img/wn/${uid}@4x.png`;

wthricon.src=  imgurl;
    
}


btn.addEventListener("click" , () =>{
    let srch = searchs.value.trim().toLowerCase();
    if (srch ===""){
        alert("fill the input first!");
        return;
    }

    console.log(srch);

    searchs.value = "";
    getweather(srch);
 //cityname
    citynames.textContent = srch;

})
document.addEventListener("DOMContentLoaded",()=>{
const cityinput=document.getElementById("city-input");
const addinputbutton=document.getElementById("get-weather-btn");
const weatherinfo=document.getElementById("weather-info");
const cityname=document.getElementById("city-name");
const citytemperature=document.getElementById("temperature");
const citydescription=document.getElementById("description");
const errormessage=document.getElementById("error-message");

const API_KEY="5c346a4269ddfce7a8bb50f280d2be84";

addinputbutton.addEventListener("click",()=>{

const city=cityinput.value.trim();
if(!city)return;

api(city);

function fetchapi(city)
{
    return new Promise((resolve,reject)=>{

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        
        )

        .then(res=>{
            if(!res.ok){
                reject("city not found");
                console.log(res);
            }
            return res.json();
        })
        .then(data=>resolve(data))
        .catch(err=>reject(err));

    });
}

async function api(city)
{
    try{
        const data=await fetchapi(city);
        console.log("FULL API DATA:",data);

        const name=data.name;
        const temp=data.main.temp;
        const description=data.weather[0].description;

        cityname.textContent=name;
        citytemperature.textContent=`${temp} °C`;
        citydescription.textContent=description;

        weatherinfo.classList.remove("hidden");
        errormessage.classList.add("hidden");
    }
    catch(error)
    { 
        weatherinfo.classList.add("hidden");
        errormessage.classList.remove("hidden");
        console.log(error); 
    }
}

});

});

let dataResponse=[];
let currentDayName=document.getElementById("currentDay");
let currentNumDay=document.getElementById("currentNumDay");
let currentMonth=document.getElementById("currentMonth");
let nextNameDay=document.getElementById("nextNameDay");
let currentTemp=document.getElementById("CurrentTemp");
let afterNextNameDay=document.getElementById("afterNextNameDay");
let search=document.getElementById("search");
let currentLocation=document.getElementById("currentLocation");
let weatherToday=document.getElementById("todayWeather");
let nextTemp=document.getElementById("nextTemp");
let minTemperature=document.getElementById("minTemp");
let nextWeather=document.getElementById("nextTextWeather");
let afterNextDay=document.getElementById("afterTomorrow");
let afterNextMinTemp=document.getElementById("afterMinTemp");
let afterNextTextTemp=document.getElementById("afterTextTemp");





        async function getApiWeather(city){
            let https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=07112&days=7`);
            dataResponse= await https.json(https.respose);
            firstDay();
            secondDay();
            thirdDay();
        }
        function firstDay(){
            let currentDate= new Date();
            currentDayName.innerHTML=currentDate.toLocaleDateString("en-US",{weekday:"long"});
            currentNumDay.innerHTML=currentDate.getDate();
            currentMonth.innerHTML=currentDate.toLocaleDateString("en-US",{month:"long"});
            currentLocation.innerHTML=dataResponse.location.name;
            currentTemp.innerHTML=dataResponse.current.temp_c+`<span><sup>o</sup>C</span>`;
            weatherToday.innerHTML=dataResponse.current.condition.text;
        }
        
        function secondDay(){
            nextTemp.innerHTML=dataResponse.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup>C`;
            minTemperature.innerHTML=dataResponse.forecast.forecastday[1].day.mintemp_c+`<sup>o</sup>`
            nextWeather.innerHTML=dataResponse.forecast.forecastday[1].day.condition.text;

        }

        function thirdDay(){
            afterNextDay.innerHTML=dataResponse.forecast.forecastday[2].day.maxtemp_c+`<sup>o</sup>C`;
            afterNextMinTemp.innerHTML=dataResponse.forecast.forecastday[2].day.mintemp_c+`<sup>o</sup>`;
            afterNextTextTemp.innerHTML=dataResponse.forecast.forecastday[2].day.condition.text;
        }   



    function formatDate (date){
        const options={
            weekday: "long", day: "numeric", month: "long" };
            return date.toLocaleDateString("en-US", options);
}


search.addEventListener('input', function(e){
    getApiWeather(search.value);
});





const today=new Date();
const currentFormat=formatDate(today);

const tomorrow=new Date(today);
tomorrow.setDate(today.getDate() + 1);
const tomorrowFormat=formatDate(tomorrow);

const afterTomorrow =new Date(tomorrow)
afterTomorrow.setDate(tomorrow.getDate() + 1);

const formatAterTomorrow=formatDate(afterTomorrow);

const todayDay=today.toLocaleDateString("en-US", { weekday: "long" });
const todayMonth=today.toLocaleDateString("en-US", { day: "numeric" });
const todayName=today.toLocaleDateString("en-us", { month: "long" });



const tomorrowDay=tomorrow.toLocaleDateString("en-US", { weekday: "long" });
nextNameDay.textContent=tomorrowDay;
nextNameDay=afterTomorrow.toLocaleDateString("en-US", {weekday: "long"});
afterNextNameDay.textContent=nextNameDay;



getApiWeather("cairo");
















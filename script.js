// function time_convert(totalSeconds)
//  { 
// //   var hours = Math.floor(num / 60);  
// //   var minutes = num % 60;
// //   return hours + ":" + minutes;   

//  const totalMinutes = Math.floor(totalSeconds / 60);

//   const seconds = totalSeconds % 60;
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   return hours +":" + minutes + ":"+  seconds ;


// // var hours = Math.floor(secs / (60 * 60));

// // var divisor_for_minutes = secs % (60 * 60);
// // var minutes = Math.floor(divisor_for_minutes / 60);
// // var divisor_for_seconds = divisor_for_minutes % 60;
// // var seconds = Math.ceil(divisor_for_seconds);
// // return   hours +":"+ minutes + ":" + seconds; 
//  }




const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c3bf5a1d2cmsh61bf730ed3dfa8dp13d55ejsnfc3a82abe461',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweathercity = (city) => {
    cityname.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {


            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp_2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity_2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed_2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees

            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset           
            //  sunrise.innerHTML = time_convert(response.sunrise)
            // sunset.innerHTML = time_convert(response.sunset)


        })
        .catch(err => console.error(err));
}
submit.addEventListener('click', (e) => {
    e.preventDefault();
    getweathercity(city.value);
})
getweathercity("Indore");




const jblweathercity = (city) => {

    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            jbl_Cloud_pct.innerHTML = response.cloud_pct
            jbl_Temp.innerHTML = response.temp
            jbl_Feels_like.innerHTML = response.feels_like
            jbl_Humidity.innerHTML = response.humidity
            jbl_Min_temp.innerHTML = response.min_temp
            jbl_Max_temp.innerHTML = response.max_temp
            jbl_Wind_speed.innerHTML = response.wind_speed
            jbl_Wind_degrees.innerHTML = response.wind_degrees
            jbl_Sunrise.innerHTML = response.sunrise
            jbl_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
jblweathercity("Jabalpur");
const ujjweathercity = (city = "Ujjain") => {
    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            ujj_Cloud_pct.innerHTML = response.cloud_pct
            ujj_Temp.innerHTML = response.temp
            ujj_Feels_like.innerHTML = response.feels_like
            ujj_Humidity.innerHTML = response.humidity
            ujj_Min_temp.innerHTML = response.min_temp
            ujj_Max_temp.innerHTML = response.max_temp
            ujj_Wind_speed.innerHTML = response.wind_speed
            ujj_Wind_degrees.innerHTML = response.wind_degrees
            ujj_Sunrise.innerHTML = response.sunrise
            ujj_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
ujjweathercity("Ujjain");

const sagweathercity = (city = "Sagar") => {
    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            sag_Cloud_pct.innerHTML = response.cloud_pct
            sag_Temp.innerHTML = response.temp
            sag_Feels_like.innerHTML = response.feels_like
            sag_Humidity.innerHTML = response.humidity
            sag_Min_temp.innerHTML = response.min_temp
            sag_Max_temp.innerHTML = response.max_temp
            sag_Wind_speed.innerHTML = response.wind_speed
            sag_Wind_degrees.innerHTML = response.wind_degrees
            sag_Sunrise.innerHTML = response.sunrise
            sag_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
sagweathercity("Sagar");
const dewweathercity = (city = "Dewas") => {
    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            dew_Cloud_pct.innerHTML = response.cloud_pct
            dew_Temp.innerHTML = response.temp
            dew_Feels_like.innerHTML = response.feels_like
            dew_Humidity.innerHTML = response.humidity
            dew_Min_temp.innerHTML = response.min_temp
            dew_Max_temp.innerHTML = response.max_temp
            dew_Wind_speed.innerHTML = response.wind_speed
            dew_Wind_degrees.innerHTML = response.wind_degrees
            dew_Sunrise.innerHTML = response.sunrise
            dew_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
dewweathercity("Dewas");


const ratweathercity = (city = "Ratlam") => {
    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            rat_Cloud_pct.innerHTML = response.cloud_pct
            rat_Temp.innerHTML = response.temp
            rat_Feels_like.innerHTML = response.feels_like
            rat_Humidity.innerHTML = response.humidity
            rat_Min_temp.innerHTML = response.min_temp
            rat_Max_temp.innerHTML = response.max_temp
            rat_Wind_speed.innerHTML = response.wind_speed
            rat_Wind_degrees.innerHTML = response.wind_degrees
            rat_Sunrise.innerHTML = response.sunrise
            rat_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
ratweathercity("Ratlam");

const gunweathercity = (city = "Guna") => {
    // cityname.innerHTML =city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {




            gun_Cloud_pct.innerHTML = response.cloud_pct
            gun_Temp.innerHTML = response.temp
            gun_Feels_like.innerHTML = response.feels_like
            gun_Humidity.innerHTML = response.humidity
            gun_Min_temp.innerHTML = response.min_temp
            gun_Max_temp.innerHTML = response.max_temp
            gun_Wind_speed.innerHTML = response.wind_speed
            gun_Wind_degrees.innerHTML = response.wind_degrees
            gun_Sunrise.innerHTML = response.sunrise
            gun_Sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
gunweathercity("Guna");



// var v1  = document.getElementById("sunrise").innerHTML;
// sunrise.innerHTML="";
// var a1=time_convert(v1);
// sunrise.innerHTML = a1;
// var v2  = document.getElementById("sunset").innerHTML;
// sunset.innerHTML="";
// sunset.innerHTML=time_convert(v2);
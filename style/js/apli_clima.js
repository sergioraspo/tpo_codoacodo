
let lon;
let lat;
let temperatue = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273.15




window.addEventListener("load",() => {

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position =>{
            console.log(position)
            lon = position.coords.longitude;
            lat = position.coords.latitude;


            //ID API

            const api_id = "e27f8279157ed35b75909a0111dfb909";
            const url_base = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_id}`;

            fetch(url_base)
            .then((response) =>{
                return response.json()
            })

            .then((data) =>{

                console.log("Esta es la data");
                console.log(data);

            temperatue.textContent = Math.floor(data.current.temp - kelvin) + "°C";
            summary.textContent = data.current.weather[0].description;
            loc.textContent = data.timezone;
        
                          

            })


        })
        
        
        )

    }

})

 
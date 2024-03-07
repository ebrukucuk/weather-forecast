const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
//console.log(cityInput, btn);

/*olay izleyicisi
!!olay ne oldugunda gercekleşecek
!!olay gercekleştikten sonra ne olacak?*/


btn.addEventListener("click", () => {
    //console.log("tıklandı");

    //console.dir(cityInput)
    const cityName = cityInput.value
    console.log(cityInput.value)
    //console.log(cityName)

    getData(cityName)
});

function getData(name) {
    //console.log(name);
    const API = "28c9a53618cdbffd439baa700a141f04";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    // console.log(baseUrl)
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like, humidity }, weather: [{ description }], wind: { speed } } = data;
            //console.log(name, country, temp, feels_like, humidity, description, speed)

            //verielri js'e cekme
            const city = document.querySelector(".city");
            const temperature = document.querySelector(".temp");
            const hum = document.querySelector(".humidity");
            const wind = document.querySelector(".wind");
            const weatherDesc = document.querySelector(".weather");
            const feeling = document.querySelector(".feeling");
            console.log(city, temperature, hum, wind, weatherDesc, feeling)

            //js e cekilen elemanları yerine yerleştirme
            city.textContent = `${name}, ${country}`;
            temperature.innerText = `${temp.toFixed(0)}°`;
            hum.textContent = `Nem %${humidity}`;
            wind.innerHTML = `Rüzgar: ${speed}km/s`;
            weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>` ;
            feeling.textContent = `Hissedilen : ${feels_like}`;

        })

        .catch(err => console.log(err))

        //inputun içini boşaltır
        cityInput.value = "";

        //inputa odaklanır
        cityInput.focus();
}
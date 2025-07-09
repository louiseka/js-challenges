const fetchWeather = async () => {
    try {
        const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=50.817871&lon=-0.372882&appid=38fdb4a7c5c6cdc11bf4139a539aeaac")
        const data = await response.json()
        const temperature = data.main.temp
        const description = data.weather[0].description

        const weatherHtml = `
        <h2>Today's weather </h2>
        <p>The temperature is ${temperature} </p>
        <p> The weather is ${description} </p>
        `

        document.body.innerHTML = weatherHtml
    } catch (error) {
        console.error("Fetch error:", error)
    }
} 

fetchWeather()


//Fetch weather data for a city from a public API and display temperature and conditions.


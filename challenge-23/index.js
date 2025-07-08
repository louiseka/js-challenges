fetch("https://meowfacts.herokuapp.com/")
    .then(res => res.json())
    .then(data => console.log(data))



//Fetch data from a public API and log it to the console
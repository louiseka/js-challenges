//Rewrite the Fetch code from challenge 23 using async/await.

const fetchCatFact = async () => {
    try {
        const response = await fetch("https://meowfacts.herokuapp.com/")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error("Fetch error:", error)
    }
}
fetchCatFact()
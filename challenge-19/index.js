let randomNumber = 0
const textMessage = document.getElementById("text-message")

function generateRandomNum(){
    randomNumber = Math.floor((Math.random() * 100) + 1)
}

generateRandomNum()
console.log(randomNumber)


document.getElementById("guess-form").addEventListener("submit", (e) => {
e.preventDefault()
let guessInput = parseInt(document.getElementById("random-number").value, 10);
guessInput === randomNumber ? textMessage.textContent = "That's correct" : textMessage.textContent = "That was wrong"

})

// Create a number guessing game where the user has to guess a randomly generated number between 1 and 100.


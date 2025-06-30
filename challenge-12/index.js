//Create a button in HTML. When clicked, the button’s text should change.

const btn = document.getElementById("btn")

const text = ["hello", "what's up", "bonjour", "howdy", "hi there"]
let index = 0

btn.addEventListener("click", () => {
    btn.textContent = text[index]
    index = (index + 1) % text.length
})
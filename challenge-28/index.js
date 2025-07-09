//Create a button to switch between light and dark modes by toggling a CSS class.

const modeBtn = document.getElementById("mode-btn")


modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
})
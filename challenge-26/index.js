const input = document.getElementById("search-input")

let debounceTimer

function handleInput(e) {
    console.log("User stopped typing. Input vale:", e.target.value)
}

input.addEventListener("input", (e) => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
        handleInput(e)
    }, 500)
})

//Create an input box. Implement debouncing so a function only runs after the user stops typing for 500ms.
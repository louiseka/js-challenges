const form = document.getElementById("form")
const textMessage = document.getElementById("text-message")


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const emailInput = document.getElementById("email").value

    if(!emailInput.includes('@')){
        textMessage.textContent = "Email is invalid"
    } else {
       textMessage.textContent = ""
        window.alert("Email is valid")
    }
})

//Create a form with an email input. Validate that it contains an @ symbol when submitted.


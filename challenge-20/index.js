function countdown() {
    let i = 10
    const timer = setInterval(() => {
        console.log(i)
        i--
        if (i < 0) {
            clearInterval(timer)
        }
    }, 2000)
}
countdown()



//Challenge: Create a timer that counts down from 10 to 0 using setInterval(), logging each number.
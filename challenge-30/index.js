function getTime(){
    const date = new Date()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const clockHtml = `
        <p>${hour}:${minutes}:${seconds}</p>
    `

    document.body.innerHTML = clockHtml
}

setInterval(getTime,1000)


//Build a digital clock that displays the current time, updating every second.


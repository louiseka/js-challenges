const date = new Date()

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
}

const formattedDate = date.toLocaleDateString('en-GB', options)

const hours = date.getHours() 
const minutes = date.getMinutes().toString().padStart(2, '0')
const time = `${hours}:${minutes}`

console.log("It's currently",time, "on", formattedDate)


// Write a program that prints the current date and time in a readable format.


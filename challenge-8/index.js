const numbers = [1, 20, 13, 4, 5]


numbers.map((number)=> {
    console.log(number * 2)
})

numbers.filter((number) => {
    if (number > 10){
        console.log(number, "is greater than 10")
    } else {
        console.log(number, "is less than 10")
    }
})

const sumOfNumbers = numbers.reduce((a,b) => a + b)
console.log(sumOfNumbers)



// Use map(), filter(), and reduce() on an array of numbers to:
// - Multiply each number by 2
// - Filter numbers greater than 10
// - Sum all numbers










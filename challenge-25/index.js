//destructuring an array

const arrayOne = ["pink", "blue", "purple"]
const arrayTwo = ["yellow", "grey", "beige"]

const [firstColour, secondColour, thirdColour] = arrayOne

console.log(firstColour)

//combining two arrays

const combinedArray = [...arrayOne, ...arrayTwo]

console.log(combinedArray)


//destructuring an object

const person = {
    name: "Louise",
    age: 29,
    hobby: "coding"
}

const { name, age, hobby } = person

console.log(name)

//Use destructuring on an object and an array. Combine two arrays using the spread operator.

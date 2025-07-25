function sortUsersByAge(arr) {
    return arr.sort((firstItem, secondItem) => firstItem.age - secondItem.age)
}

function sortUsersByName(arr) {
    return arr.sort((firstItem, secondItem) =>
        firstItem.firstName.localeCompare(secondItem.firstName)
    )
}


const users = [
    {
        firstName: "Louise",
        lastName: "Aldridge",
        age: 99
    },
    {
        firstName: "Gretna",
        lastName: "Ridge",
        age: 19
    },
    {
        firstName: "Rob",
        lastName: "Green",
        age: 38
    }]

console.log(sortUsersByAge(users))
console.log(sortUsersByName(users))

//Sort an Array of Objects by a Property - Example: Sort users by age or name.
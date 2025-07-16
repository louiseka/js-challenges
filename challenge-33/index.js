const vowels = ["a", "e", "i", "o", "u"]

function findVowels(str) {

    if (typeof (str) === "string") {
        const letterArr = str.split("")
        const includedVowels = letterArr.filter((letter) => vowels.includes(letter))
        const vowelsQuantity = includedVowels.length

        if (vowelsQuantity >= 1) {
            console.log(`There is ${vowelsQuantity} vowels in the word "${str}" and they are: ${includedVowels}`)
        } else {
            console.log(`There is ${vowelsQuantity} vowels in the word "${str}"`)
        }
    }
    else {
        console.log("Thats not a string")
    }

}

findVowels("hello")
findVowels("Louise")
findVowels(true)


//Function that counts how many vowels (a, e, i, o, u) are in a string.
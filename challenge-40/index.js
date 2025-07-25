function countOccurence(string) {
    const arr = string.split(" ").join("").split("")
    const counts = {}

    for (const character of arr) {
        counts[character] = counts[character] ? counts[character] + 1 : 1
    }

    return counts
}

console.log(countOccurence("Hello my name"))



//Count the Occurrence of Each Character in a String
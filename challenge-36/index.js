function isItAnagram(str1, str2){

    const arrStr1 = str1.toLowerCase().split("").sort().join("")
    const arrStr2 = str2.toLowerCase().split("").sort().join("")

    arrStr1 === arrStr2 ? console.log(`${str1} and ${str2} is an anagram`) : console.log(`${str1} and ${str2} is not an anagram`)

}

console.log(isItAnagram("silent", "listen"))
console.log(isItAnagram("Louise", "Jack"))

//Check if Two Strings Are Anagrams
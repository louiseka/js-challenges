
function isPalindrome(word){
    const reversedWord = word.split("").reverse().join("")

    reversedWord.toLowerCase()

    if(reversedWord === word){
        console.log(word, "is a palindrome")
    } else {
        console.log(word, "is not a palindrome")
    }
}

isPalindrome("cat")
isPalindrome("level")



//Check if a given string is a palindrome (reads the same forwards and backwards).


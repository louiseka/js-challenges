function capitaliseWords(str) {
    const stringArr = str.split(" ")

    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1)
    }
    return stringArr.join(" ")
}

console.log(capitaliseWords("hello world"))
console.log(capitaliseWords("my name is Louise"))
console.log(capitaliseWords("1"))



//Capitalize the First Letter of Each Word in a String
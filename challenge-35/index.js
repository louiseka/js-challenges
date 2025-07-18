function removeDuplicates(array){

let noDuplicatesArr = []

for (let i = 0; i < array.length; i++){

    if (!noDuplicatesArr.includes(array[i])){
        noDuplicatesArr.push(array[i])
    } 
}
return noDuplicatesArr
}

console.log(removeDuplicates(["red", "pink", "red", "yellow"]))
console.log(removeDuplicates([1, 2, 3, 3, 4]))


//Write a function that removes duplicate values from an array.

//Recursive
function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}


//Iterative

function findFactorial(n){
    let result = 1

    for(let i = 1; i <= n; i++){
        result *= i
    }
    return result
}

console.log(findFactorial(5))

console.log(factorial(5))


//Find the Factorial of a Number (Recursive & Iterative) Calculate the factorial using both approaches


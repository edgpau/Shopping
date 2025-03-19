
// Reversing a string


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("water"));

// finding min & max

let numbers = [10, 5, 20, 8, 15];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Min:", min); 
console.log("Max:", max);


// Finding and removing duplicates

let numbers1 = [1, 2, 3, 2, 4, 5, 1, 6];

let uniqueNumbers = [...new Set(numbers1)];

console.log(uniqueNumbers);

// Check if a string is a pallindrome

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("12321"));


// Fibonacci series

function fibonacciSeries(n) {
    let fib = [0, 1]; // Starting values

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

console.log(fibonacciSeries(10)); 

// find factorial

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));

//  Primes (is prime print few)

// find missing number from 1 to N
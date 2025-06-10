function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


function findMax(arr) {
    return Math.max(...arr);
}


function findMin(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}


function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}


console.log("Reverse:", reverseString("hello")); // "olleh"
console.log("Character Count:", countCharacters("hello")); // 5
console.log("Capitalized:", capitalizeWords("hello world")); // "Hello World"
console.log("Max:", findMax([1, 5, 9])); // 9
console.log("Min:", findMin([1, 5, 9])); // 1
console.log("Sum:", sumArray([1, 2, 3])); // 6
console.log("Filtered (>=10):", filterArray([5, 10, 20], n => n >= 10)); // [10, 20]
console.log("Factorial of 5:", factorial(5)); // 120
console.log("Is 11 Prime?", isPrime(11)); // true
console.log("Fibonacci 7 terms:", fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// Calculate factorial using a loop
function factorial(n) {
    if (n < 0) return -1; // Negative numbers don't have a factorial
    if (n === 0) return 1; // Base case: 0! is 1
    let result = 1;
    
    // Loop through numbers to calculate factorial
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply each number
    }

    return result;
}

// Test cases
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
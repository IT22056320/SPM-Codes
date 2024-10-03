// A more complex calculator with multiple operations
function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) {
                console.error('Cannot divide by zero');
                return null;
            }
            return a / b;
        default:
            console.error('Invalid operation');
            return null;
    }
}

// Test cases
console.log(calculate('add', 5, 2));        // 7
console.log(calculate('subtract', 10, 4));  // 6
console.log(calculate('multiply', 3, 3));   // 9
console.log(calculate('divide', 9, 3));     // 3
console.log(calculate('divide', 9, 0));     // Error: Cannot divide by zero
console.log(calculate('modulus', 5, 2));    // Error: Invalid operation
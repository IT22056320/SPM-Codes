let number = parseInt(prompt("Enter a number: "));
let isPrime = false;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is not a prime number`);
}

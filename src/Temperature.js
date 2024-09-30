let temp = parseFloat(prompt("Enter temperature: "));
let unit = prompt("Enter unit (C for Celsius, F for Fahrenheit): ");

if (unit.toUpperCase() === 'C') {
    let fahrenheit = (temp * 9/5) + 32;
    console.log(`${temp}°C is equal to ${fahrenheit}°F`);
} else if (unit.toUpperCase() === 'F') {
    let celsius = (temp - 32) * 5/9;
    console.log(`${temp}°F is equal to ${celsius}°C`);
} else {
    console.log("Invalid unit");
}

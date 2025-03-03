let firstName = "John";
let lastName = "Smith";
let country = "Nigeria";
let city = "Lagos";
let age = 30;
let isMarried = false;
let year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

console.log(1);
console.log("hello");
console.log([]);

console.log(0);
console.log("");
console.log(null);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


let base = prompt("Enter base:");
let height = prompt("Enter height:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
}


let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(3));
console.log(challenge.slice(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log("You cannot end a sentence with 'because', because 'because' is a conjunction".indexOf("because"));
console.log(challenge.startsWith("30 Days"));
console.log(challenge.endsWith("JavaScript"));
console.log(Math.floor(Math.random() * 101));

let a = 10, b = 5;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}
console.log(a > b ? "a is greater than b" : "a is less than b");


let scores = 85;
if (scores >= 80 && scores <= 100) {
    console.log("A");
} else if (scores >= 70 && scores <= 89) {
    console.log("B");
} else if (scores >= 60 && scores <= 69) {
    console.log("C");
} else if (scores >= 50 && scores <= 59) {
    console.log("D");
} else {
    console.log("F");
}

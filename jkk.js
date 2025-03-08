let  sum = 10 + 10;
console.log(sum)
let myVar = 11;
myVar--;
console.log(myVar)

let a = 48;
let b = 23;

a /= 12;
let myStr = "firstLine\n\t\secondLine\nthirdLine"
console.log(myStr)

let my = "my self " + "my Body";
console.log(my);

let be = "set";


console.log(be);
let mrBy = "sing ";
let secondLetterOfMrBy = mrBy[1];
console.log(secondLetterOfMrBy);


console.log(mrBy);

let myGo = " i can " + " dance";
console.log(myGo);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
let result ="";
result += "The " + myAdjective + " " + myNoun + " "  +   myVerb + " to the store" 
return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("dog", "big", "ran", "quickly"));
let myArray = [550, 30, 40];
let myData = myArray[1];
console.log(myData);
myArray[0] = 45;
console.log(myArray);


let mySet = [[550, 30, 40], [4, 5, 6], [6, 7, 8]];
let myWork = mySet[1][2];
console.log(myData);
let myPet = [["John", 23], ["Cat, 2"]];
myPet.push(["dog, 3"])
let removedFromMyPet = myPet.pop(["Cat, 2"]);
console.log(myPet);
myPet.shift();
myPet.unshift(["paul", 35]);

let myList = [["cereal", 3], ["milk", 2],["bananas", 3], ["juice", 2], ["eggs", 4]];

function ourReusableFunction(){
    console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();


function ourReusableFunction(){
    console.log("Hi World");
}
ourReusableFunction();

function ourFunctionWithArgs(a,b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);

function ourFunctionWithArgs(a,b) {
    console.log(a + b);
}

ourFunctionWithArgs(10, 5);

let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    let output = "";
    if(typeof myGlobal != "undefined") {
 output += "myGlobal: " + myGlobal;        
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

function myLocalScope() {
    let myVar = 5;
    console.log(myVar);
}
myLocalScope();
console.log(myVar);

let outerWear = "T-shirt";
function myOutfit() {
    let outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

function minusSeven(num) {
    return num -7;
}
console.log(minusSeven(10));
function timesFive(num){
    return num * 5;
}
console.log(timesFive(5));

let changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

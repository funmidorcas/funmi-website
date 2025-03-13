


// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")


let count = 0;
console.log(saveEl)

function increment(){
    count = count + 1
    countEl.textContent = count
}




 function save(){
     let countStr = count + "-" 
    //  saveEl.innerText += countStr
    saveEl.textContent += countStr
     console.log(count)
     countEl.textContent = 0
     count = 0
    }

//     let error = document.getElementById("error").textContent = "number not saved"
// message = "number not save"
// error.textContent = message

// console.log(error.textContent)

let error = document.getElementById("error")
function notSaved() {
    error.textContent = "number not saved"
}




let myPoint = 3
function add3Point() {
myPoint += 3
}
 function remove1Point() {
    myPoint -= 1
 }
add3Point()
add3Point()
add3Point()
remove1Point()
remove1Point()
console.log(myPoint)

// sytem given number only
// let num1 = 8
// let num2 = 2
//  document.getElementById("num1").textContent
//   document.getElementById("num2").textContent
//  document.getElementById("sum")
// function add(){
  
//     let result = num1 + num2
// sum.textContent = "Answer = " + result
// }

//  function subtract(){
//     let result = num1 - num2
// sum.textContent = "Answer = " + result
// }
//  function divide() {
//     let result = num1 / num2
// sum.textContent = "Answer = " + result
//  }
//   function multiply() {
//     let result = num1 * num2
// sum.textContent = "Answer = " + result
//   }


// for user to input number
function add() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let sum = document.getElementById("sum");

  let result = parseFloat(num1.value) + parseFloat(num2.value);
  sum.textContent = "Answer = " + result;

  num1.value = "";
  num2.value = "";
}

function subtract() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let sum = document.getElementById("sum");

  let result = parseFloat(num1.value) - parseFloat(num2.value);
  sum.textContent = "Answer = " + result;

  // Reset input fields
  num1.value = "";
  num2.value = "";
}

function divide(){
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let sum = document.getElementById("sum");
 let result = parseFloat(num1.value) / parseFloat(num2.value)
 sum.textContent = "Answer = " + result;
 num1.value = "";
 num2.value = "";

}

function multiply(){
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let sum = document.getElementById("sum");
 let result = parseFloat(num1.value)  * parseFloat(num2.value)
 sum.textContent = "Answer = " + result;
 num1.value = "";
 num2.value = "";

}

  // let firstCard = 8
  // let secondCard = 13                          
  let firstCard = getRandomCard()  
  let secondCard = getRandomCard()
  let total = firstCard + secondCard
  let cards = [firstCard, secondCard]

  
let hasBlackJack = false
let isAlive = false
let message = ""
// another style of declaring variable(object method)
let player = {
   name: "Funmi",
   chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
document.getElementById("message-el").textContent = "Want to Play a round?"
let messageEl = document.getElementById("message-el")
  let sumEl = document.getElementById("sum-el") 
let cardsEL = document.getElementById("cards-el")
 
console.log(cards)
function getRandomCard(){
  // return randomNumber = Math.floor( Math.random() * 11) + 2
  let randomNumber = Math.floor( Math.random() * 11) + 2
if (randomNumber > 10) {
  return 10}
  else if (randomNumber === 1) {
    return 11}
    else{
      return randomNumber
    }
}

function startGame(){
  // isAlive = true
  //    let firstCard = getRandomCard()  
  //  let secondCard = getRandomCard()
  //  let total = firstCard + secondCard
  //  let cards = [firstCard, secondCard]

    renderGame()
}


function renderGame() { 
    //  cardsEL.textContent = "Cards: "  + cards[0] + " " + cards[1]
     cardsEL.textContent = "Cards: "
 for (let i = 0; i < cards.length; i++){
   cardsEL.textContent += cards[i] + " "
 }
    sumEl.textContent = "Sum: " + total
    if(total < 21){
message = "you are not qualified!"
    isAlive = false
  }
  else if(total === 21){
    message = "you won!"
    hasBlackJack = true
  }
  else if(total > 21) {
    message = "you are out!"
    isAlive = false
  }
   
  messageEl.textContent = message
}

function newCard() {
  //  if(isAlive === true && hasBlackJack === false) {
   let card = getRandomCard()
   total += card
   cards.push(card)
console.log(cards)
renderGame()
   }
  // }

  let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sortFruit() {
  for( let i = 0; i < fruit.length; i++){
if (fruit[i] === "orange"){
 appleShelf.textContent += "apple"
} else if ( fruit[i] === "orange") {
  orangeShelf.textContent += "orange"
}
  }
}
sortFruit()











   // **to save without showing*
// function save() {
//      console.log(count)
//  }
//  save()


// randomNumber lesson
// let randomNumber = Math.random() 
// console.log(randomNumber)

// let randomNumber = Math.random() * 6
// console.log(randomNumber)

// let flooredNumber = Math.floor(5.43555)
// console.log(flooredNumber)

// let randomNumber = Math.floor( Math.random() * 7) + 2
// console.log(randomNumber)
//  also.....
// function rollDice(){
//   let randomNumber = Math.floor( Math.random() * 7) + 2
//   return randomNumber
// }
// console.log(rollDice())

// conditional statement lesson
// let age = 21
// let message = ""

// if(age < 21){
//   message = "you can not enter"
// }
// else if( age >=21)
//     {
//   message = "welcome"
// }

// let newAge = 100
// if(newAge < 100){
//     console.log("not qualify")
// } else if(newAge === 100){
//     console.log("you won")

// }
// else{
//     console.log("not anymore")
// }

// let payRoll = 102
// let payPick = 107
// function getPayPrice(){
//   if (payRoll < payPick){
// return payPick
//   } else if (payPick < payRoll){
//     return payRoll
//   } else{
//     return payRoll
//   }
// }
//  let fastPrice = getPayPrice()
//  console.log(fastPrice)



// logical conditional lesson for 'and' 'or' operator
// let hasFinished = true
// let haveCertificate = true
// if (hasFinished === true){
//   if(haveCertificate === true) {
//     generateCertificate()
//   }
// } also can be write as below ....this is 'and' operator
// if (hasFinished === true && haveCertificate === true) {
//     generateCertificate()
  
// } else if (hasFinished === false && haveCertificate === true) {
//   generateCertificate()
// }
// function generateCertificate(){
//   console.log("Generating certificate...")
// }

//     this is 'or' operator
// let lookAlike = true
// let notAlike = true

// if (lookAlike === true || notAlike === true) {
//  goAhead()
// }
// function goAhead(){
//   console.log("hey, awesome")
// }

// let age = 96
// if ( age < 6 ){
//   console.log("free")
// }
// else if( age < 18){
//   console.log("dicount")
// } 
// else if( age < 27){
//   console.log("not free")
// }
// else if ( age < 68){
//   console.log("not discount")
// }
// else {
//   console.log("fully discount")
// }


// object lesson
//  let course = {title: "Learn JS",
//   lessons: 16,
//   creator: "Funmi",
//   length: 10,
// level: 2,
// isFree: true,
// tags: ["HTML", "CSS"],
// sayHello: function(){
//   console.log("Hi FUNMi")
// }
// }
// console.log(course.title)
// course.sayHello()

// array lesson
// let mesages = [Funmi", 
//     "DOrcas", "Toyin"

// ]
// console.log(mesages)
// let newMessage = "Adeniji"
// mesages.push(newMessage)
// console.log(mesages)
// mesages.pop()
// console.log(mesages)

// let largeCountries = ["china", "nigeria", "togo", "ghana"
// ]
// for (let i = 0; i < largeCountries.length; i++){
// console.log("-" + largeCountries[i])
// }
// largeCountries.pop()
// largeCountries.push("india")

// // unshift() and shift() lesson ( it add/remove first item of the arra )
// largeCountries.shift()
// largeCountries.unshift("SA")
// console.log(largeCountries)


// for loop lesson
// for( let i = 10; i < 20; i +=2){
//     console.log(i)
// }
// // // i++ is also as i += 1
// // for array and loop
// let dayOff = 13
// let weekday = "friday"
// if(dayOff === 13 && weekday === "friday"){
//   console.log("what!")
// }
// let hands =["rock", "paper", "scissor"]
// function getHand(){
//   let randomIndex = Math.floor(Math.random() * 3)
//   return hands[randomIndex]
// }
// console.log(getHand())

// let cardss = [7, 3, 4]
// for (let e= 0; e < cardss.length; e++){
//   console.log(cardss[e])
// }
// let info = ["Hi", "my name", "is", "Funmi", "Adeniji"]
//   let greeting = document.getElementById("greeting")
//   console.log(greeting)
//   for (let i = 0; i < info.length; i +=1) {
// greeting.textContent = info[i] + " "
// }


// let fruit = ["apple", "orange", "apple", "apple", "orange"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")
// function sortFruit() {
//   for( let i = 0; i < fruit.length; i++){
// if (fruit[i] === "orange"){
//  appleShelf.textContent += "apple"
// } else if ( fruit[i] === "orange") {
//   orangeShelf.textContent += "orange"
// }
//   }
// }
// sortFruit()

// basic lessons
//  let username = "dorcas"
//  let message = "you have 3 new notification"
// let userMessage = message + ", " + username + "!"
//  console.log(userMessage)


// let welcomeEL =  document.getElementById("welcome-el")
//  let name = "funmi"
//  let greeting = "how are you"
// welcomeEl.innerText = greeting + ", " name
// //   let greetingMe = greeting + ", " + name
//     // console.log(greetingMe)

 
// welcomeEl()
// let  firstName = "Funmi"
// let lastName = "Dorcas"

// function name() {
//     let fullName = firstName + " " + lastName + "Adeniji"
// console.log(fullName)
// }
// name()

// let myAge = 30;
// let humanAge = 7;
// let count = myAge * humanAge;
// console.log(count);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints)
//  bonusPoints = bonusPoints -75;
//  console.log(bonusPoints);
//  bonusPoints = bonusPoints + 45;
//  console.log(bonusPoints);

// function increment(){
//     console.log("the button was clicked")
// }

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);

// }
// countdown()
// countdown()
// function addition () {
//     console.log(5 + 4)
// }
// addition()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// function increment(){
// console.log(lap1 + 1)
// }

// increment()
// increment()
// increment()
// increment()
// increment()












// let form = document.querySelector("form");
// let ul = document.querySelector("ul");

// const items = [
// "read", "eat", "dance", "play",
// ];
// console.log(items);

// const renderList = () => {
//     e.preventDefault();
//     const listItems = items.map
//     ((eachItem, index) => `<li><p>${eachItem}</p><button>X</button></li>`)
//     .join("");
//     ul.innerHTML = listItems;    
// };

// const handleAdditem = (e) => {
// e.preventDefault();
// let inputData = document.querySelector("input").value;
// items.push(inputData);
// console.log(items);
// form.reset();
// renderList();
// };



// form.addEventListener("submit", handleAddItems);



// function logicFunction() {
//     let chideraIsAwesome = false;
    


// js class






// function greeting() {
// let welcomeTextHeading = document.getElementById("welcome-text-heading");
// welcomeTextHeading.innerText = "i cant type too  much";
// console.log(welcomeTextHeading.innerText);
// }





//     console.log('Hello ' + name + ' ' + lastName);

// }
// greet('Jonh', 'Smith');
// function square(number) {
//     return number * number;
// }

// console.log( square(4)
// )


// function greeting() {
// return "Hello"

// }
// const newGreeting = () => {

// }

//     let index = 0;
//     while (index <= 20) {
//         console.log(index);
//     console.log("hello");
//     index++;
// }
//     





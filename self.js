// let counted = document.querySelector("#count")
// let save = document.querySelector("#saved")
// let saver = document.querySelector("#save")
// let text = document.querySelector("#text")
// let error = document.querySelector("#error")
// let count = 0
// function increment(){
//     count = count + 1
//     counted.textContent = count
// }
// save.addEventListener("click", function(){
//     let countStr = count + "-" 
//     //  saveEl.innerText += countStr
//     saver.textContent += countStr
//     counted.textContent = 0
//     // count = 0
// })
//  text.addEventListener("click", function(){
// let message =  "not available"
// error.textContent = message
//  })


//  let number = document.querySelector("#numb")
// let numbers = document.querySelector("#number")
// let answer = document.querySelector("#answer")
// number.textContent = 5
// numbers.textContent = 4

// let number = document.getElementById("num1") 
// let numbers = document.getElementById("num2") 


// const formData = {

// number: document.getElementById("num1").value,
// numbers: document.getElementById("num2").value
// }

let num1 = 8
let num2 = 2

document.getElementById("num1").textContent = 8 
document.getElementById("num2").textContent = 2 
let sum = document.getElementById("sum")



function add(){
    let result = num1 + num2
sum.textContent = result

}
 function subtract(){
    let result = num1 - num2
sum.textContent = result

 }
 function divide() {
    let result = num1 / num2
sum.textContent = result
 }
  function multiply() {
    let result = num1 * num2
sum.textContent = result
  }

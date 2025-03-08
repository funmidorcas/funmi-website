let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.95

let markBMI = markMass / (markHeight ** 2)
let johnBMI = johnMass / (johnHeight ** 2)

console.log(markBMI)
console.log(johnBMI)

let markHigherBMI = markBMI > johnBMI

// if(markHigherBMI){
//     console.log(true)
// }
if(markBMI > johnBMI){
    console.log(true)
}



// let userNameAndAge = prompt("What is your name and age")
// let  userName = userNameAndAge.slice(0, -3)
// let userAge = userNameAndAge.slice(-2)
// console.log(userName)
// console.log(userAge)


// let dogAge = 17
// dogAge = dogAge.toString()
// let stringedNum = "65.5"
// string
// console



let weight = 65.296784352
console.log(Math.round(weight))
console.log(Math.floor(weight))
console.log(Math.ceil(weight))
console.log(weight.toFixed(3))


const gravity = 20
let weAreFloating = false
console.log(gravity >= 30)
if (gravity > 30){
    console.log("Gravity is hugee")
    weAreFloating = true
}
else{
    console.log("Gravity is small")
    weAreFloating = false
}



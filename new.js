// function saveBtn(){
//     console.log("save")
// }
//    saveBtn()
let myLeads = []

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.jdjfjjf.com")
//  myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

   const inputBtn = document.getElementById("input-btn")
   const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")
// localStorage.clear()
let leadsGet = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsGet)
if (leadsGet){
myLeads =  leadsGet
render(myLeads)
} 

// localStorage.setItem("myLeads", "i know you!")
// console.log( localStorage.getItem("myLeads") )

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
const tabs = [
    {url: "https://www.linkdehfhhk/"}
]
tabBtn.addEventListener("click", function(){
    // console.log(tabs)
    console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

// for onclick function 
// function tabLink(){
//     console.log("tabs")
// }

inputBtn.addEventListener("click", function(){
    console.log("input saved")
    myLeads.push(inputEl.value)
    inputEl.value = ""

 localStorage.setItem("myLeads", JSON.stringify(myLeads))



    render(myLeads)
    console.log(localStorage.getItem("myLeads"))

})
let box = document.getElementById("box")
box.addEventListener("click", function(){
    console.log("welcome!")

})
function render(myLeads) 
       {
let listItems = ""
for (let i = 0; i < myLeads.length; i++){
//    ulEl.textContent += myLeads[i] + " "
//    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
//    ......another 2 methods are done below

   // const li =  document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)
// console.log(ulEl.textContent)
// 
// listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
listItems += `
<li>
<a target='_blank' href='${myLeads[i]}'>
 ${myLeads[i]}
     </a></li>`

}
ulEl.innerHTML = listItems

}


const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'>Buy!</button>"
function buy(){
    container.innerHTML += "<p>Thank YOu!</p>"

}

// template strings lesson
// const dada = "amos"
// const mama = "funmi"
// const email = `hey ${dada}! How is it going? cheers ${mama}`
// console.log(email)

let mySet =[]
 localStorage.setItem("mySet", "yes you!")
console.log(localStorage.getItem("mySet"))
// localStorage.clear()
let day = Boolean("")
console.log(day)

// html hr code
const welcomeEL = document.getElementById("welcome-el")


// function greetUser() {
//     welcomeEL.textContent = "welcome back, Funmi"
// }
// greetUser()

// // function greetUser(name) {
//     welcomeEL.textContent = "welcome back," + " " + name 
// //     welcomeEL.textContent = "welcome back, " + name  
// // }
// // greetUser("Funmi")

// function greetUser(greeting, name) {
//     welcomeEL.textContent = greeting + ", " + name  
// }
// greetUser("Hello", "Funmi")

function greetUser(greeting, name, number) {
    welcomeEL.textContent = `${greeting}, ${name} ${number}`  
}
greetUser("Hello", "Funmi", "100")

function getFirst(arr){
return arr[0]
}
let firstCard = getFirst([10, 2, 5])
console.log(firstCard)
// function add(num1, num2){
//     return num1 + num2
// }
// console.log( add(3,4))
// console.log( add(9,31))

let myCourses = ["css", "html", "js", "JSON"]
function single(arr){
    for(let i = 0; i < myCourses.length; i++)
console.log(arr[i])
    }
    single(myCourses)

    // localStorage.setItem("myScores", "100")

    let myScores = localStorage.getItem("myScores")
    console.log(myScores)

    let data = [
        {
            player: "Jane",
            score: 52
        },
        {
            player:  "mark",
            score: 42
        }

    ]
    const login = document.getElementById("login")
    login.addEventListener("click", function(){
console.log(data[1].player)
        // login.textContent = data[0].score
    })
function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    // for( let i = 0; i < arr.length; i++)
    //     baseString += arr[i] + ", "
    // return baseString
    //editted to remove last comma (,)
const lastIndex = arr.length - 1
    for( let i = 0; i < arr.length; i++)
       if(i === lastIndex) { baseString += arr[i]}
else{
    baseString += arr[i] + ", "
}
    return baseString
}

// const imgs = ["img/mdnd", "img/hdhdbd", "img/hdhh"]
// const sentence = generateSentence("highest mountain", ["china","india","mark"])
// console.log(sentence)
// const container = documement.getElementById("container")
// function renderImages(){
//     // for (let i = 0; i < imgs.length; i++){
//     //     container.innerHTML += `<img alt ="dp" class="team-img" src="${imgs[i]}">`
//     // }
//     // the method below makes it better
//     let imgsDOM = ""
//     for (let i = 0; i < imgs.length; i++){
//         imgsDOM += `<img alt="dp" class="team-img" src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }
// renderImages()
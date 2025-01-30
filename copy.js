const showBtns = document.getElementsByClassName("plus");
const hideBtns = document.getElementsByClassName("minus");
let notes = document.getElementsByClassName("note1");

function plus(index) {
    let result = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rerum, non explicabo debitis ratione provident ipsum adipisci ex sed ipsam hic beatae corrupti facilis nostrum tempora velit! Sed, debitis obcaecati.";
    
    notes[index].textContent = result;
    
    // Hide plus button and show minus button
    showBtns[index].style.display = "none";
    hideBtns[index].style.display = "inline-block"; 

    console.log(result);
}

function minus(index) {
    let result = "";  // Declare result properly
    notes[index].textContent = result;

    // Hide minus button and show plus button
    showBtns[index].style.display = "inline-block";
    hideBtns[index].style.display = "none"; 

    console.log(result);
}

// Add event listeners dynamically
for (let i = 0; i < showBtns.length; i++) {
    showBtns[i].addEventListener("click", function () {
        plus(i);
    });
    hideBtns[i].addEventListener("click", function () {
        minus(i);
    });

    // Initially hide all minus buttons
    hideBtns[i].style.display = "none";
}

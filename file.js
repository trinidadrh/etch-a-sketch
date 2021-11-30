// Prompts user to choose number of rows/columns
let chooseNum = prompt("Type the number of rows/columns (between 1-100) on your sketchpad:")

// Creates boxes in grid
let boxContainer = document.querySelector("#container");

for (let i = 1; i < (chooseNum*chooseNum); i++) {
    let div = document.createElement("div");
    div.className = "box-item";
    boxContainer.appendChild(div);
}

// Sets number of rows and columns in grid
if (chooseNum != null) {
    if (chooseNum <= 100 && chooseNum >= 1) {
        boxContainer.style.gridTemplateColumns = "repeat(" + chooseNum + ", auto)";
        boxContainer.style.gridTemplateRows = "repeat(" + chooseNum + ", auto)";
    }
}

// Trigger function when mouse enters box
let box = document.querySelectorAll(".box-item");

for (let i = 0; 1 < box.length; i++) {
        box[i].addEventListener("mouseenter", function() {
            box[i].style.backgroundColor = "black";
        });
}

// Reload page when button is clicked 
function clearGrid(){
    window.location.reload();
}
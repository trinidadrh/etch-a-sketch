// Prompts user to choose number of rows/columns
let chooseNumOfRows = prompt("Select the number of rows/columns on your sketchpad.")

// Creates 16x16 grid
let container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box-item"></div>';
}

// Trigger function when mouse enters box
let boxChange = document.querySelector(".box-item");


boxChange.addEventListener("mouseenter", hoverChange);
function hoverChange() {
    boxChange.style.backgroundColor = "black";
};


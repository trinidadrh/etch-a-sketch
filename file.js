const container = document.getElementById("container");

let chooseNumOfRows = prompt("Select the number of rows/columns on your sketchpad.")

for (let i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>';
}


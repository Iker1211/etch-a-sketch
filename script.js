addEventListener("DOMContentLoaded", () => {

    const rangeInput = document.querySelector("#options");
    const rangeText = document.querySelector("#rangeText");
    const rnbow = document.querySelector("#rainbowMode");
    const colorPicker = document.querySelector("#colorPicker");
    const eraser = document.querySelector("#eraser");
    const container = document.querySelector(".drawing-board");

    let rangeValue = 16;
    let pickedColor = colorPicker.value = "#000000";
    let randomize = false;
    let erase = false;

    function createGrid(size) {
        container.innerHTML = "";

        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
         for (let i = 0; i < size  * size; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);
        }

        const cells = document.querySelectorAll(".cell");

        cells.forEach((cell) => {
            cell.addEventListener("mousemove", (event) => {
                if (drawing) {
                    if (randomize) {
                        pickedColor = getRandomColor();
                    }
                    event.target.style.backgroundColor = pickedColor 
                }
            });
        });
    }

    createGrid(rangeValue);

    let drawing = false;

    container.addEventListener("mousedown", () => {
        drawing = !drawing;
    });

    rangeInput.addEventListener("input", (event) => {
        rangeValue = event.target.value;
        createGrid(rangeValue);
        rangeText.textContent = `${rangeValue} x ${rangeValue}`;
    });

    colorPicker.addEventListener("input", (event) => {
        randomize = false;
        pickedColor = event.target.value;
    });

    rnbow.addEventListener("click", () => {
        erase = false;
        randomize = ! randomize;
    });

    eraser.addEventListener("click", () => {
        randomize = false;
        erase = !erase;
        pickedColor = "transparent";
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

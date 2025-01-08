addEventListener("DOMContentLoaded", (event) => {

    const rangeInput = document.querySelector("#options");
    const rangeText = document.querySelector("#rangeText");
    const btnApply = document.querySelector("#btn-number");
    const container = document.querySelector(".drawing-board");

    let rangeValue = rangeInput.value;

    rangeInput.addEventListener("input", (event) => {
        rangeValue = event.target.value;
        rangeText.textContent = `${rangeValue} x ${rangeValue}`;
    });

    btnApply.addEventListener("click", () => {
        container.innerHTML = "";

        container.style.gridTemplateRows = `repeat(${rangeValue}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${rangeValue}, 1fr)`;

        let drawing = false;

        container.addEventListener("mousedown", () => {
            drawing = !drawing;
        });

        for (let i = 0; i < rangeValue * rangeValue; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);

            cell.addEventListener("mousemove", (event) => {
                if (drawing) {
                    event.target.style.backgroundColor = "black"; //change style.bck to randomColors
                }
            });
        }
    });

});

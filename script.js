// Square grid constructor
const createGrid = (parentElement, dimensions) => {
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");

        for (let j = 0; j < dimensions; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "square");
            div.style.opacity = "0";
            div.addEventListener("mouseenter", () => {
                div.style.opacity = `${Number(div.style.opacity) + 0.1}`
                div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)} ${Math.floor(Math.random() * 100)} ${100 - (Number(div.style.opacity) * 100)})`;
            })

            row.appendChild(div);
        }

        parentElement.appendChild(row);
    }
}

const grid = document.querySelector("#grid");

createGrid(grid, 16);

const gridReset = document.querySelector("#grid-reset");

gridReset.addEventListener("click", () => {
    const dimensions = Math.floor(Number(prompt("Enter the number of squares per side for the new grid:", "16")));
    if (dimensions > 100) {
        dimensions = 100;
    }

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    createGrid(grid, dimensions);
})

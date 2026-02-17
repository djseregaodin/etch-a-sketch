const grid = document.querySelector("#grid")

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
        })
        row.appendChild(div);
    }
    grid.appendChild(row);
}
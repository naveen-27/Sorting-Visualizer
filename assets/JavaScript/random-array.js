// Generating random array
export function randomArray() {
    let length = document.querySelector("input").value;

    // The changing grid columns with change in input
    document.querySelector(".array").style.gridTemplateColumns = `repeat(${length}, 70px)`;
    let html = "";  

    // Generating innerhtml for array elements
    for (var i = 0; i < length; i++) {
        let no = Math.floor(Math.random() * 99) + 1;
        html += `<span class="element">${no}</span>`;
    }

    document.querySelector(".array").innerHTML = html;
}
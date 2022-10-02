// make 16x16 grid

const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    // create a row
    const row = document.createElement('div');
    row.setAttribute('class','row');
    for (let j = 0; j < 16; j++) {
        const col = document.createElement('div');
        col.setAttribute('class','col');
        row.appendChild(col);
    }
    container.appendChild(row);
}

// event listeners to change background-color on hover
const gridSquares = document.querySelectorAll('.col');
gridSquares.forEach(gridSquare => {
    gridSquare.addEventListener('mouseover', () => {
        gridSquare.classList.add('hovered')
    });
});
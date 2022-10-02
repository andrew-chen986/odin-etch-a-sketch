// button allows user to pick grid size
// default will be 100x100
let rows = 100;
let cols = 100;

button = document.querySelector('button');
button.addEventListener('click', () => {
    let x, y;
    x = prompt("Numbers of rows?");
    x = parseInt(x);
    y = prompt("Numbers of cols?");
    y = parseInt(y)

    rows = x;
    cols = y;

    if (Number.isInteger(rows) && Number.isInteger(cols) && 0 <= rows && rows <= 100 && 0 <= cols && cols <= 100) {
        makeGrid(rows, cols);
    }
    else {
        alert("Rows and cols must be an integer between 0 and 100!");
    }
});

function makeGrid(rows, cols) {
    
    const container = document.querySelector('#container');
    
    // delete old grid
    oldRows = container.querySelectorAll('.row');
    oldRows.forEach(oldRow => {
        container.removeChild(oldRow);
    });

    // make x by y grid


    for (let i = 0; i < rows; i++) {
        // create a row
        const row = document.createElement('div');
        row.setAttribute('class','row');
        for (let j = 0; j < cols; j++) {
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

}

makeGrid(rows,cols);
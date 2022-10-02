// make 16x16 grid

container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    // create a row
    row = document.createElement('div');
    row.setAttribute('class','row');
    for (let j = 0; j < 16; j++) {
        col = document.createElement('div');
        col.setAttribute('class','col');
        col.textContent = `${j}`
        row.appendChild(col);
    }
    container.appendChild(row);
}
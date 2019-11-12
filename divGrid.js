const container = document.querySelector('#container');
let gridWidth = 16;
let gridHeight = 16;

for (let i = 0; i < gridWidth; i++){
    let gridRow = document.createElement('div');
    gridRow.classList = 'gridRow';

    for (let n = 1; n <= gridHeight; n++){
        let gridCell = document.createElement('div');
        gridCell.classList = 'gridCell';
        gridCell.style.border = 'solid';
        gridRow.appendChild(gridCell);
    }
    container.appendChild(gridRow);  
}



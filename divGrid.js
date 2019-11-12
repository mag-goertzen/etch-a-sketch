const container = document.querySelector('#container');

let gridWidth = 16;
let gridHeight = 16;

for (let i = 0; i < gridWidth; i++){
    let gridRow = document.createElement('div');
    gridRow.classList = 'gridRow';

    for (let n = 1; n <= gridHeight; n++){
        let gridCell = document.createElement('div');
        gridCell.classList = 'gridCell';
        //gridCell.style.backgroundColor = 'white';
        //gridCell.style.border = 'thin solid';
        gridCell.style.display = 'inline-block';
        gridCell.style.padding = '30px';
        gridRow.appendChild(gridCell);
    }
    container.appendChild(gridRow);  
}



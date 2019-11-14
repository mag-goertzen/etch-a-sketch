const container = document.querySelector('#container');

let gridWidth = 16;
let cellWidth = (960/gridWidth);
let cellPx = cellWidth.toString()+'px';
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
        gridCell.style.width = cellPx;
        gridCell.style.height = gridCell.style.width;
        gridRow.appendChild(gridCell);
    }
    container.appendChild(gridRow);  
}

var gridCells = document.querySelectorAll('.gridCell');

    gridCells.forEach((gridCell) => {
        gridCell.addEventListener('mouseenter', function(e){
            let bgColor = 'rgb(0,0,0)';
            e.target.style.backgroundColor = bgColor;
        })
    }) 


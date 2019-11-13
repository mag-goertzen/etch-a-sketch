function gridGenerator(gridWidth, gridHeight){

    const container = document.querySelector('#container');

    for (let i = 0; i < gridWidth; i++){
        let gridRow = document.createElement('div');
        gridRow.classList = 'gridRow';
    
        for (let n = 1; n <= gridHeight; n++){
            let gridCell = document.createElement('div');
            gridCell.classList = 'gridCell';
            //gridCell.style.backgroundColor = 'white';
            //gridCell.style.border = 'thin solid';
            gridCell.style.display = 'inline-block';
            gridCell.style.padding = '10px';
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);  
    }

    var gridCells = document.querySelectorAll('.gridCell');

    gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'black';
    })
})
    
}
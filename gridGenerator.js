function gridGenerator(gridWidth, gridHeight){

    const container = document.querySelector('#container');
    let cellWidth = (960/gridWidth);
    let cellPx = cellWidth.toString()+'px';

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
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
             
            let bgColor = "rgb("+red+","+green+","+blue+")";
    
            e.target.style.backgroundColor = bgColor;
        })
    })

    
}
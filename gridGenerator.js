//This function creates a grid with a user specified number of cells. The grid will always fill
//the number of cells to a width of 960px.

function gridGenerator(gridWidth, gridHeight){

    //Select the container div to build grid in.
    const container = document.querySelector('#container');

    //Maintains the max width of 960px, no matter the cell input.
    let cellWidth = (960/gridWidth);
    let cellPx = cellWidth.toString()+'px';
    
        //For loop creates the <div> row elements.
        for (let i = 0; i < gridWidth; i++){
            let gridRow = document.createElement('div');
            gridRow.classList = 'gridRow';
            
            //For loop creates the <div> cells in the row <divs>.
            for (let n = 1; n <= gridHeight; n++){
                let gridCell = document.createElement('div');
                gridCell.classList = 'gridCell';
                gridCell.style.display = 'inline-block';
                gridCell.style.width = cellPx;
                gridCell.style.height = gridCell.style.width;

                //Makes cells children of the rows.
                gridRow.appendChild(gridCell);
            }; //end grid cells for loop

        //Makes rows children of the container.
        container.appendChild(gridRow);  
        }; //end rows for loop

}; //end gridGenerator function



let clearButton = document.querySelector('button');

clearButton.addEventListener('click', (e) =>{
    let gridRow = document.querySelectorAll('.gridRow'),n;
    let gridCell = document.querySelectorAll('.gridCell'),i;

    for (let i = 0; i < gridCell.length; ++i){
        gridCell[i].remove();
        //for (let n = 1; n <= gridRow.length; ++n){
            //gridRow[i].remove();
        //}
    }
    let gridWidth = window.prompt('Enter a grid width (1-100): ');
    let gridHeight = window.prompt('Enter a grid height (1-100): ');
    gridGenerator(gridWidth,gridHeight);
});


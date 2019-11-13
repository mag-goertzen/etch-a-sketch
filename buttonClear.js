
let clearButton = document.querySelector('button');

clearButton.addEventListener('click', (e) =>{
    let gridRow = document.querySelectorAll('.gridRow'),n;
    let gridCell = document.querySelectorAll('.gridCell'),i;

    for (let i = 0; i < gridCell.length; ++i){
        gridCell[i].remove();
        for (let n = 1; n <= gridRow.length; ++n){
            gridRow[i].remove();
        }
    }
});


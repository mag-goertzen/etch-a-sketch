//This script takes in button inputs from index.html and generates the user specified response.

//Initialize the grid and default mode.
let gridWidth = 16;
gridGenerator(gridWidth,gridWidth);
hoverTrail('blackBrush');

//Switch hover effect to random color brush.
let colorBrush = document.querySelector('#colorBrush');
colorBrush.addEventListener('click', function(){ 
    
    gridGenerator(gridWidth, gridWidth);  
    hoverTrail('colorBrush');
});

//Switch hover effect to black brush.
const blackBrush = document.querySelector('#blackBrush');
blackBrush.addEventListener('click', function(){
    
    gridGenerator(gridWidth, gridWidth);
    hoverTrail('blackBrush');
});

//Switch hover effect to opacity brush.
const opacityBrush = document.querySelector('#opacityBrush');
opacityBrush.addEventListener('click',function(){
    
    gridGenerator(gridWidth,gridWidth);
    hoverTrail('opacityBrush');
});

//Create new sketch with user specified grid.
const newSketch = document.querySelector('#newSketch');
newSketch.addEventListener('click', function(){
    let gridRow = document.querySelectorAll('.gridRow'),n;

    //Removes rows (& cells) from container div.
    for (let n = 0; n < gridRow.length; ++n){
        gridRow[n].remove();
        }
    
    let gridWidth = window.prompt('Enter a grid size (1-960): ');

    gridGenerator(gridWidth, gridWidth);
    hoverTrail('blackBrush');
});

//Clear the current sketch.
const clearSketch = document.querySelector('#clearSketch');
clearSketch.addEventListener('click', function(){
    var gridCells = document.querySelectorAll('.gridCell');

    //Set the background color to white of each cell.
    gridCells.forEach((gridCell) => {
        gridCell.style.backgroundColor = 'white';
        gridCell.style.opacity = 1.0;
    })
});
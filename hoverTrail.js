//This function changes the color of a specific grid element, dependent upon user input.

function hoverTrail(userMode){

    //Search for all of the class items named: gridCell
    var gridCells = document.querySelectorAll('.gridCell');

    //For each grid cell, if the mouse enters the cell change its color.
    gridCells.forEach((gridCell) => {
        gridCell.addEventListener('mouseenter',function(e){

            //Changes to standard black brush.
            if (userMode == 'blackBrush') {

                //Assigns color to target cell.
                e.target.style.backgroundColor = 'black';
                
            //Changes to color brush.
            }else if (userMode == 'colorBrush'){
                let red = Math.floor(Math.random()*256);
                let green = Math.floor(Math.random()*256);
                let blue = Math.floor(Math.random()*256);
                let bgColor = "rgb("+red+","+green+","+blue+")";
    
                //Assigns color to target cell.
                e.target.style.backgroundColor = bgColor;
             
            //Changes to greyscale brush.
            }else if (userMode == 'opacityBrush'){
                
                let newOpacity = Number(e.target.style.opacity)+0.1;
    
                //Assigns color and opacity to target cell.
                e.target.style.backgroundColor = 'black';
                e.target.style.opacity = newOpacity;
            }else{

            }; //if loop end
    
        });//eventListener end

    }); //forEach end

}; //function hoverTrail end

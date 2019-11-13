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
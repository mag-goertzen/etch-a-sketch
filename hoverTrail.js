var gridCells = document.querySelectorAll('.gridCell');

gridCells.forEach((gridCell) => {
    gridCell.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'black';
    })
})
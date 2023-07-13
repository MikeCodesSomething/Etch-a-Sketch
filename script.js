//Script
let sizeSlider = document.getElementById('size-slider');
let gridSize = sizeSlider.value;
let sizeLabel = document.querySelector('label');
sizeLabel.innerText = `Size: ${gridSize} x ${gridSize}`;
sizeSlider.addEventListener("mousemove", (e) => sizeLabel.innerText = `Size: ${e.target.value} x ${e.target.value}`);
sizeSlider.addEventListener("change", generateGrid);
generateGrid();

//Functions
function generateGrid() {
    gridSize = sizeSlider.value;
    sizeLabel.innerText = `Size: ${gridSize} x ${gridSize}`
    let gridRowTotal = gridSize
    let gridColumnTotal = gridSize
    let gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''
    let gridSquares = []
    for (let i = 0; i < gridColumnTotal; i++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column')
        for (let j = 0; j < gridRowTotal; j++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square')
            gridSquares.push(gridSquare)
            gridColumn.appendChild(gridSquare)
        }
        gridContainer.appendChild(gridColumn)
}
for(let i = 0; i < gridSquares.length; i++) {
    gridSquares[i].addEventListener('mouseover',fillSquare)
}
}


function fillSquare(event) {
    event.target.classList.add('filled')
    //console.log(gridSize)
}

//const gridSquare = document.createElement('div');
//document.body.appendChild(resetButton)



// resetButton.textContent = "Play Again";
// resetButton.addEventListener('click',resetGame)
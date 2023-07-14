//Script
let sizeSlider = document.getElementById('size-slider');
let gridSize = sizeSlider.value;
let eraserButton = document.getElementById('eraser')
let rainbowButton = document.getElementById('rainbow')
let sizeLabel = document.querySelector('label');
sizeLabel.innerText = `Size: ${gridSize} x ${gridSize}`;

let mousedown = false;
let eraserMode = false
let rainbowMode = false

window.addEventListener('mousedown', () => mousedown = true);
window.addEventListener('mouseup', () => mousedown = false);
sizeSlider.addEventListener("mousemove", (e) => sizeLabel.innerText = `Size: ${e.target.value} x ${e.target.value}`);
sizeSlider.addEventListener("change", generateGrid);

eraserButton.addEventListener('click', (e) =>{
    eraserMode = !eraserMode;
    e.target.classList.toggle('selected');
    rainbowMode = false;
    rainbowButton.classList.remove('selected');
    } 
    )

rainbowButton.addEventListener('click', (e) => {
    rainbowMode = !rainbowMode
    e.target.classList.toggle('selected');
    eraserMode = false;
    eraserButton.classList.remove('selected');
    }
    )

generateGrid();


//This stops us accidentally triggering the mouse to 'drag' 
//Dragging messes up our drawing so we really don't want it
document.body.addEventListener('dragstart', function(event) {
    event.preventDefault(); // Prevent the default drag behavior
  });
  

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
    gridSquares[i].addEventListener('mouseover',updateSquare)
    gridSquares[i].addEventListener('click',updateSquare)
    //Using 2 event listeners because we want to draw on click and drag and also if the user clicks the specific square they want to change
}
}


function updateSquare(e) {
    if(!mousedown && e.type != 'click') return;
    if(eraserMode) e.target.style.backgroundColor = 'white';
    else if(rainbowMode) e.target.style.backgroundColor = getRandomColour()
    else e.target.style.backgroundColor = 'black';

}

function getRandomColour() {
    let colourOptions = ['red','yellow','pink','green','orange','purple','blue'];
    let random = Math.floor(Math.random() * colourOptions.length);
    return colourOptions[random];
}



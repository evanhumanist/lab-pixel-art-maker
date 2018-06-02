//Define Selectors
const INPUT_HEIGHT = document.getElementById('inputHeight');
const INPUT_WIDTH = document.getElementById('inputWidth');
const SUBMIT_BUTTON = document.getElementById('submitButton');
const COLOR_PICKER = document.getElementById('colorPicker');
const PIXEL_CANVAS = document.getElementById('pixelCanvas');
let mouseStatus = 'up'; //tracks the status of the mouse

//If the mouse is down, then it paints the pixels
function paintPixel(evt){
    if (evt.target.nodeName == 'TD') {
        if (mouseStatus == 'down') {
            evt.target.style.backgroundColor = COLOR_PICKER.value;
        }
    }
};

//Creates the grid based on the Height and Width input boxes
function makeGrid(gridHeight, gridWidth) {
    while (PIXEL_CANVAS.firstChild){
    	PIXEL_CANVAS.removeChild(PIXEL_CANVAS.firstChild);
    }

    //Create the grid rows
    for (let gridRow = 0; gridRow < gridHeight; gridRow++) {
        const newRow = document.createElement('tr');
        PIXEL_CANVAS.appendChild(newRow);
        // insertAdjacentHTML('beforeend', '<tr class="grid-row"></tr>');
         for (let i = 0; i < gridWidth; i++) {
             const newCell = document.createElement('td');
             newRow.appendChild(newCell);
         }
    }
};

//Changes the mouse status to down for use with painting pixels
function mouseStatusDown(evt) {
    evt.preventDefault();
    mouseStatus = 'down';
    paintPixel(evt);
};

//Changes the mouse status to up for use with painting pixels
function mouseStatusUp(evt) {
    evt.preventDefault();
    mouseStatus = 'up';
};

//Add event listeners
PIXEL_CANVAS.addEventListener('mousemove', paintPixel); //detects if the mouse is moving on the grid
PIXEL_CANVAS.addEventListener('mousedown', mouseStatusDown); //detects if the mouse is clicked on the grid
document.body.addEventListener('mouseup', mouseStatusUp) //detects if the mouse has been unclicked anywhere on the document

//Calls the makeGrid function when you click submit
SUBMIT_BUTTON.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid(INPUT_HEIGHT.value, INPUT_WIDTH.value);
});



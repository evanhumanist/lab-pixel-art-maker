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
    PIXEL_CANVAS.innerHTML = '';

    //Create the grid rows
    for (let gridRow = 0; gridRow < gridHeight; gridRow++) {
        PIXEL_CANVAS.insertAdjacentHTML('beforeend', '<tr class="grid-row"></tr>');
    }

    //Create the content that will go inside each row
    let gridRowContent = '';
    for (let i = 0; i < gridWidth; i++) {
        gridRowContent = gridRowContent + '<td class="grid-cell"></td>';
    }

    //Add that content to the rows
    const iGridRows = document.getElementsByClassName('grid-row');
    for(const iGridRow of iGridRows) {
        iGridRow.insertAdjacentHTML('beforeend', gridRowContent);
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



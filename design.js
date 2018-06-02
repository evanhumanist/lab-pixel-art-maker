//Define Selectors
const inputHeight = document.getElementsByClassName('input-height')[0];
const inputWidth = document.getElementsByClassName('input-width')[0];
const submitButton = document.getElementsByClassName('submit-button')[0];
const colorPicker = document.getElementsByClassName('color-picker')[0];
const pixelCanvas = document.getElementsByClassName('pixel-canvas')[0];
let mouseStatus = 'up';

//If the mouse is down, then it paints the pixels
function paintPixel(evt){
    if (evt.target.nodeName == 'TD') {
        if (mouseStatus == 'down') {
            evt.target.style.backgroundColor = colorPicker.value;
        }
    }
}

//Creates the grid based on the Height and Width input boxes
function makeGrid(gridHeight, gridWidth) {
    pixelCanvas.innerHTML = '';

    //Create the grid rows
    for (let gridRow = 0; gridRow < gridHeight; gridRow++) {
        pixelCanvas.insertAdjacentHTML('beforeend', '<tr class="grid-row"></tr>');
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

//changes the mouse status to down for use with painting pixels
function mouseStatusDown(evt){
    evt.preventDefault();
    mouseStatus = 'down';
    paintPixel(evt);
}

//changes the mouse status to up for use with painting pixels
function mouseStatusUp(evt){
    evt.preventDefault();
    mouseStatus = 'up';
}

pixelCanvas.addEventListener('mousemove', paintPixel); //detects if the mouse is moving on the grid
pixelCanvas.addEventListener('mousedown', mouseStatusDown); //detects if the mouse is clicked on the grid
document.body.addEventListener('mouseup', mouseStatusUp) //detects if the mouse has been unclicked anywhere on the document

//calls the makeGrid function when you click submit
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    makeGrid(inputHeight.value, inputWidth.value);
});



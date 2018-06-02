// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Define Selectors
const inputHeight = document.getElementsByClassName('input-height')[0];
const inputWidth = document.getElementsByClassName('input-width')[0];
const submitButton = document.getElementsByClassName('submit-button')[0];
const colorPicker = document.getElementsByClassName('color-picker')[0];
const pixelCanvas = document.getElementsByClassName('pixel-canvas')[0];

function paintPixel(evt){
    console.log('The pixel was painted');
}

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

pixelCanvas.addEventListener('mousemove', paintPixel);

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    makeGrid(inputHeight.value, inputWidth.value);
});



const grid = document.querySelector('.grid');
let GRIDSIZE = 20;
const PIXEL_SIZE = 22;
let selectedColor = 'red';
//grid generation
function createGrid() {
    grid.style.width = `${GRIDSIZE * (PIXEL_SIZE + 2)}px`;
    for (let i = 0; i < GRIDSIZE ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel'
        pixel.style.width = `${PIXEL_SIZE}px`;
        pixel.style.height = `${PIXEL_SIZE}px`;
        pixel.style.border = '1px solid black';
        pixel.addEventListener('click', function () {
            pixel.style.background = selectedColor;
        })
        grid.append(pixel)
    }
}
//change pixel color on click
let colorPicker = document.getElementById('favcolor');
colorPicker.addEventListener('input', function() {
selectedColor = colorPicker.value
});
//clear button function
let clear = document.querySelector(".clear");
clear.addEventListener('click', function () {
    for (let pixel of grid.children) {
        pixel.style.background = 'white';
    }
})
//size input function 
let sizeSelection = document.getElementById('number')
sizeSelection.addEventListener('change', function () {
    GRIDSIZE = sizeSelection.value;
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
    createGrid(GRIDSIZE)
});

createGrid()
//generate grid
    //add event listeners for clicks to change background color to selectedColor
//create colorinput element
    //create colorinput variable
//add event listener for colorinput
    //sset selected color to colorinput value
//add clear button
//while mousedown, 
    //if mouseenter
       //change background color

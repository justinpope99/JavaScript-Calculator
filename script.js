// CALCULATOR PROGRAM

const display = document.getElementById("display");

// We are passing in a character when we call this function, so we need a parameter of input
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    // The eval function takes an expression like (1 + 2 + 3) and evaluates it, and gives it a result. It's kind of like it's its own built in calculator.
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function calculatePercent() {
    try {
        display.value = eval((display.value)/100);
    }
    catch(error) {
        display.value = "Error";
    }
}

function deleteValue() {
    if (display.value != "") {
        display.value = display.value.substring(0, display.value.length-1);
    }
}

var colorIndex = 0;
var backgroundColors = ["#f7cc38", "#ee638c", "#60a2d7", "#262626", "#ffffff"];
var bgColor = document.querySelector('#calculator');
function changeColors() {
    if (colorIndex == backgroundColors.length) {
        colorIndex = 0;
    }
    bgColor.style.backgroundColor = backgroundColors[colorIndex];
    colorIndex++;
}

var displayColorIndex = 0;
var displayBackgrounds = ["cyan", "magenta", "green", "purple", "#333333"];
var displayColor = document.querySelector('#display');
function changeDisplayColor() {
    if (displayColorIndex == displayBackgrounds.length) {
        displayColorIndex = 0;
    }
    displayColor.style.backgroundColor = displayBackgrounds[displayColorIndex];
    displayColorIndex++;
}

function reset() {
    bgColor.style.backgroundColor = "#262626";
    displayColor.style.backgroundColor = "#333333";
    clearDisplay();
}
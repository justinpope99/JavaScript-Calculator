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
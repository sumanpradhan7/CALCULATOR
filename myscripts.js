// Calculator program

const display = document.getElementById("display"); 

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""; // clears the display
}

function calculate() {
    try {
        display.value = eval(display.value); // evaluates the expression
    } catch (error) {
        display.value = "Error"; // handles invalid expressions
    }
}

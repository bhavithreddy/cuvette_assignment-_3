// Get the input element where the result is displayed
const input = document.getElementById("input");

// Append the value to the display
function appendToDisplay(value) {
  input.value += value;
}

// Clear the entire display (RESET)
function resetDisplay() {
  input.value = "";
}

// Delete the last character from the display (DEL)
function deleteLast() {
  input.value = input.value.slice(0, -1);
}

function calculateResult() {
  try {
    input.value = eval(input.value); // eval() evaluates the string as a mathematical expression
  } catch (error) {
    input.value = "Error"; // Handle invalid expressions
  }
}

document.querySelectorAll(".button, .button1").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "RESET") {
      resetDisplay();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendToDisplay(value);
    }
  });
});

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

// Validate the expression before calculating
function validateExpression(expression) {
  // Regular expression to check if the expression starts with an operator or is invalid
  const invalidStart = /^[\+\-\*\/]/.test(expression);
  const invalidEnd = /[\+\-\*\/]$/.test(expression);

  // Simple validation: Expression should not start or end with an operator
  return !(invalidStart || invalidEnd || expression.trim() === "");
}

// Evaluate the expression and display the result (when "=" is clicked)
function calculateResult() {
  const expression = input.value;

  if (validateExpression(expression)) {
    try {
      input.value = eval(expression); // eval() evaluates the string as a mathematical expression
    } catch (error) {
      input.value = "Error"; // Handle invalid expressions
    }
  } else {
    input.value = "Error"; // Show error if validation fails
  }
}

// Event listeners for buttons
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

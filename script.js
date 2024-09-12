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
  // Check if the expression is valid
  const invalidStart = /^[\+\-\*\/]/.test(expression); // Check for starting with an operator
  const invalidEnd = /[\+\-\*\/]$/.test(expression); // Check for ending with an operator
  const invalidEqualSign = /={2,}/.test(expression); // Check for multiple "=" (like "==", "===")

  // Simple validation: Expression should not start or end with an operator or have multiple "="
  return !(
    invalidStart ||
    invalidEnd ||
    invalidEqualSign ||
    expression.trim() === ""
  );
}

// Evaluate the expression and display the result (when "=" is clicked)
function calculateResult() {
  const expression = input.value;

  // Avoid evaluating empty input or invalid input
  if (expression.trim() === "") {
    input.value = ""; // Do nothing if input is empty
    return;
  }

  // Check if expression is valid
  if (validateExpression(expression)) {
    try {
      input.value = eval(expression); // Evaluate the expression
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

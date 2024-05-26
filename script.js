// Select the input field and buttons
const inputField = document.querySelector(".calculator .result");
const buttons = document.querySelectorAll(".btn");

// Define a function to handle button clicks
function handleButtonClick(event) {
  const buttonValue = event.target.value;
  const currentValue = inputField.value;

  // Handle different button types
  if (buttonValue === "AC") {
    inputField.value = "";
  } 
  
  
  
  
  // Add a new condition in handleButtonClick to handle the square root button
else if (buttonValue === "sqrt") {
    try {
        // Use Math.sqrt() for square root calculation
        const number = parseFloat(currentValue); // Convert current value to number
        if (number >= 0) {
            inputField.value = Math.sqrt(number);
        } else {
            inputField.value = "Error: Cannot square root negative numbers";
        }
    } catch (error) {
        inputField.value = "Error";
    }
}
  
  
  
  
  
  
  
  else if (buttonValue === "X") {
    inputField.value = currentValue.slice(0, -1);
  } else if (buttonValue === "=") {

    
    try {
      inputField.value = eval(currentValue);
    } catch (error) {
      inputField.value = "Error";
    }
  } else {
    inputField.value = currentValue + buttonValue;
  }
}




// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
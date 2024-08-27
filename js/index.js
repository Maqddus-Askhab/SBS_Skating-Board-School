// Prompt the user to enter the first number
let num1 = prompt("Enter the first number:");
num1 = Number(num1); // Convert the input to a number

// Prompt the user to enter the second number
let num2 = prompt("Enter the second number:");
num2 = Number(num2); // Convert the input to a number

// Compare the two numbers and display the result
if (num1 > num2) {
  console.log("The first number is greater than the second number.");
} else if (num1 < num2) {
  console.log("The first number is less than the second number.");
} else {
  console.log("Both numbers are equal.");
}

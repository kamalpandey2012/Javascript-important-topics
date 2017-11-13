let chalk = require("chalk");

let numbers = [4, 2, 5, 1, 3];

//clear the terminal
console.log("\033c");

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

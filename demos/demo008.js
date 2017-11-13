let chalk = require("chalk");

let numbers = [4, 2, 5, 1, 3];

//clearing the terminal
console.log("\033c");

numbers.sort(function(a, b) {
  return 0.5 - Math.random();
});

//printing the sorted array
console.log("sorted array: " + chalk.red(numbers.join()));

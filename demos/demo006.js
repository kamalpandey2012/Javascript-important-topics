let chalk = require("chalk");

let numberArray = [10, 6, 2, 20, 6];

//clear the terminal
console.log("\033c");

//compare function to show result in ascending order (from low to high)
function compareFuntionAscending(a, b) {
  return a > b;
}

function compareFuntionDescending(a, b) {
  return a < b;
}

//printing original array
console.log("original array: " + chalk.red(numberArray.join()));

// without compare function
console.log(
  "Sorting without compare function: " + chalk.yellow(numberArray.sort()) + "\n"
);

//with ascending compare function
console.log(
  "In ascending order: " +
    chalk.green(numberArray.sort(compareFuntionAscending))
);

//with descending compare function
console.log(
  "In descending order: " +
    chalk.red(numberArray.sort(compareFuntionDescending))
);

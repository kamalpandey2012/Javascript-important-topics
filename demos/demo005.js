let chalk = require("chalk");

let fruits = ["cherries", "apples", "bananas"];

//clear the terminal
console.log("\033c");

//Original code
console.log("original fruits Array: " + chalk.green(fruits.join()));

//Sorting without compare function
console.log("Sorted array: " + chalk.red(fruits.sort()));

//reversing the order of sort
console.log("reversed fruit array: " + chalk.yellow(fruits.reverse()) + "\n");

// Number sorting
let numberArray = [1, 2, 20, 10];

//origin number array
console.log("\n Original number array: " + chalk.green(numberArray.join())); // join is just to convert array into (,) comma joined string

console.log(
  "numberArray sorted without compare function: " +
    chalk.red(numberArray.sort()) +
    "\n"
);

//array with mixed records
let mixedArray = ["word", "Word", "1 Word", "2 Word"];

//printing original array
console.log("Mixed array original: " + chalk.green(mixedArray.join()));

// Sorting it without compare function
console.log(
  "sorted mixed array without compare function: " + chalk.red(mixedArray.sort())
);

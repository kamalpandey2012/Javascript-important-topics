let chalk = require("chalk");

//clearing the terminal
console.log("\033c");

// defining the array items.
let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

//sort by value
items.sort(function(a, b) {
  return a.value - b.value;
});

console.log("items sorted by value: ", chalk.red(JSON.stringify(items)));

// Sorting by name

items.sort(function(a, b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  let returnValue = 0;
  if (nameA < nameB) {
    returnValue = -1;
  }

  if (nameA > nameB) {
    returnValue = 1;
  }

  //names equal
  return returnValue;
});

console.log("items sorted by name: ", chalk.green(JSON.stringify(items)));

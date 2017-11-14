// filter out elements to get numbers less than 99
let chalk = require("chalk");

console.log("\033c");

function isBigEnough(value) {
  return value >= 99;
}

let filtered = [1001, 21, 50, 901, 100, 13].filter(isBigEnough);
console.log("numbers greater than 99: " + chalk.green(filtered.join()));

console.log("\n Removing invalid entries from json \n");
//Removing invalid entries from a JSON

let arr = [
  { id: 20 },
  { id: -2 },
  { id: 0 },
  { id: 18.9 },
  { id: null },
  { id: NaN },
  { id: "undefined" },
  {},
  { id: 6 }
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof obj === "number" && !isNaN(obj) && obj > 0;
}

function filterById(item) {
  if (isNumber(item.id)) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrById = arr.filter(filterById);

console.log("Filtered Array\n" + chalk.green(JSON.stringify(arrById)));

console.log("Number of invalid Entries = " + chalk.red(invalidEntries));

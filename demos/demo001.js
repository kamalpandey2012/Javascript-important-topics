// demo001.js

// 1. Getting the number greater than 15 from a provided array by
//using Array.prototype.find

let numberArray = [12, 5, 8, 130, 44];
let result001_1 = numberArray.find(isBigEnough);

function isBigEnough(element) {
  return element >= 15;
}

console.log(result001_1); // 130

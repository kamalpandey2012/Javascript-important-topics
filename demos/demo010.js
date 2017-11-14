//Array.prototype.filter demo: similar to Array.prototype.find method.
//In this demo we will take some words and will filter then according to the number of letters they have

let words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "apocalypse",
  "marvellous"
];

//clearing the terminal
console.log("\033c");

let longWords = words.filter(function(word) {
  return word.length > 6;
});

console.log("words having length greater than 6: ", longWords);

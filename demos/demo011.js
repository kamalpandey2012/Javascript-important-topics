//demo to show same functionality as before in ES6 syntax

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

let longWords = words.filter(word => word.length > 6);
console.log("Words having length greater than 6: " + longWords);

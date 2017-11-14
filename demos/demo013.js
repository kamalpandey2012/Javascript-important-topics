//demo to show filter function returning values according to query
let fruits = ["apple", "banana", "grapes", "mango", "orange"];

//clearing the terminal
console.log("\033c");

function filterItems(query) {
  return fruits.filter(function(element) {
    return element.toLowerCase().indexOf(query) > -1;
  });
}

console.log(filterItems("ap"));
console.log(filterItems("an"));

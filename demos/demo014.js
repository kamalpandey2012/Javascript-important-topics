// Es6 implementation of filter data according to query

console.log("\033c");
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

console.log("\033c");

const filterItems = (query) => {
  return fruits.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log("fruits containing 'ap' in their name: " + filterItems("ap"));
console.log("fruits containing 'an' in their name: " + filterItems("an"));

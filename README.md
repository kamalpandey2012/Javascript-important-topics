# Javascritp important topics
Lets work with data

## 1. `Array.prototype.find`


This method returns the value of the first element in the array that satisfies the given testing function. Else `undefined` is returned.

Lets take example - We wanted to find the first element in an array of numbers that is greater than 15. In this example our testing function will be 'isBigEnough' and array will `[12,5,8,130,44]`

_Demo\_001.js_

``` 'javascript'
let arr = [12, 5, 8, 130, 44];

console.log(arr.find(isBigEnough)); // 130

function isBigEnough(element){
	return element >= 15;
	}
```

Some other examples 

_demo\_002.js_

Finding an object in an array by one of its property

``` javascript
let vehicle = [
  { license: "A1234", name: "High flyer", type: "aircraft" },
  { license: "B234", name: "ground lifter", type: "drone" },
  { license: "C234", name: "sapton", type: "car" }
];

function findDrone(vehicle) {
  return vehicle.type == "drone";
}

let result = vehicle.find(findDrone);
console.log(result);
```

the output will be 

```

{ license: 'B234', name: 'ground lifter', type: 'drone' }
```

_demo\_003.js_

Find a prime number in a array

```
function isPrime(element, index, array){
	let start = 2;
	while( start < Math.sqrt(element)){
		if(element % start ++ <1) {
			return false;
		}
	}
	return element > 1;
}

console.log([4,6,8,12].find(isPrime));//undefined, no prime number found
console.log([4,5,8,12].find(isPrime)); // 5 
```

This tells the callback function has more than 1 paramete, First one is 

`element` The current element that is being processed

`index` The index of current element being processed in the array

`array` The array `find` was called upon 

`thisArg` Object to use as `this` when executing `callback`

**Description**

The `find` method executes the `callback` function once for each index of the array until it finds one where `callback` returns a true value. if such an element is found, `find` immediately returns the value of the element. Otherwise, `find` returns `undefined`. `callback` is invoked for every index of the array from `0` to `length -1` and is invoked for all indexes, not just those that have been assigned values. This may mean that it's less efficient for sparse arrays than other methods that only visit indexes that have been assigned a value. 

`callback` is invoked with three arguments: the value of the element, the index of the element, and the Array being traversed.

If a `thisArg` parameter is provided to `find`, it will be used as the `this` foreach invocation of the`callback`. If it is not provided, then undefined is used.

 **`find`** does not mutate the array on which it is called.
 
 The range of elements processed by `find` is set before the first invocation of `callback`. Element that are appended to the array after the call to `find` begins will not be visited by `callback`. If an existing unvisited element of the array is changed by `callback`, its value passed to the visiting `callback` will be the value at thetime that `find` visits that element's index; elements that are deleted are still visited.
 f
Lets check this phenomenon of retaining values even after delete

_demo\_004.js_

``` javascipt
// Declare an array with no element at index 2,3 and 4

let a = [0, 1, , , , 5, 6];

//show all indexes, not just those that have been assigned value
a.find(function(value, index) {
  console.log("Visited index " + index + " with value " + value);
});

a.find(function(value, index) {
  if (index == 0) {
    //Delete element 5 on first iteration
    if (index == 0) {
      console.log("Deleting a[5] with value " + a[5]);
      delete a[5];
    }

    //Element 5 is still visited even though deleted
  }

  console.log("Visited index " + index + " with value " + value);
});
```

## 2. `Array.prototype.sort`
The `sort()` method sorts the elements of an array and returns the array. The default sort order is according to the string unicode code points. 

### 2.1 Sorting strings 

_demo\_005.js_

```
let fruits = ['cherries', 'apples', 'bananas'];

fruit.sort(); // ['apples', 'bananas', 'cherries']
```
Here the sort is passed any function for comparison or invoking any kind of condition for sorting. 

for reversing this behavior we will use `Array.prototype.reverse();`

_demo\_005.js_

``` javascript
console.log(fruits.sort());
console.log(fruits.reverse());
```

### 2.2 Sorting numbers

lets take an example 

_demo\_005.js_

``` javascript
let scores = [ 1,10,21,2];
console.log(scores.sort()); //[1,10,2,21]
```
As `sort` method sorts on basis of unicode character and '1' is smaller than '2' hence `10' will be smaller than '2' in case of unicode character.

Lets take one more example

_demo\_005.js_

``` javascript
let things = ['word', 'Word', '1 Word', '2 Word'];
console.log(things.sort());
```
the output will be `[ '1 Word', '2 Word', 'Word', 'word'] `. In unicode numbers come before upper case letters, which come before lower case letters.

### 2.3 Compare function

`arr.sort()` or `arr.sort(compareFunction)` here in `arr.sort()` compare function is optional. It defines the sort order when omitted, the array is sorted acccording to each character's Unicode code point value, according to the string conversion of each element.

**Return Value** - The sorted array. Note the array is sorted in place and no copy is made.

**Description**

If `compareFunction` is supplied, the array elements are sorted according to the return value of the compare function. If `a` and `b` are two elements being compared, then:

- If `compareFunction(a,b)` returns value greater then **0** then `a` will be ahead in sort priority than `b`. In simple terms `a` will come before `b`. 
- If `compareFunction(a,b)` returns value less than **0** then `a` will be behind in sort priority than `b`. In simple terms `a` will come after `b`.
- If `compareFunction(a,b)` returns value equal to **0** then `a` and `b` position will remain unchanged

The compare function has the following form: 

```
function compare(a, b){
	if(a is less than b by some ordering criterial){
		return -1;
		}
	if(a is greater than b by the ordering criteria){
		return 1;
		}
	// if a must be equal to b
	return 0;
}		
```
Lets take an example

_demo\_006.js_

``` javascript
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
```

another example 

_demo\_007.js_

``` javascript
let chalk = require("chalk");

let numbers = [4, 2, 5, 1, 3];

//clear the terminal
console.log("\033c");

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
```

**Random sorting**

Random sorting order could be achieved by using `Math.random` method of Javascript

lets take a look at example below

_demo\_008.js_

``` javascript
let chalk = require("chalk");

let numbers = [4, 2, 5, 1, 3];

//clearing the terminal
console.log("\033c");

numbers.sort(function(a, b) {
  return 0.5 - Math.random();
});

//printing the sorted array
console.log("sorted array: " + chalk.red(numbers.join()));
```

### 2.4 Sorting Properties in Object array
Objects can be sorted given the value of one of their properties.

for example 

_demo\_009.js_

``` javascript
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
```
here comparing values is quite simple, but the string comparison could be little tricky. You could reduce error by using `toLowerCase()` or `toUpperCase()` methods. This will reduce the ambiguity in case of letter capitalization. 

### 2.5 Finding min and max values in array
As JS does not have any inbuild method to get min and max values so there is a home made method to get the max value. By using sort method this could be computational heavy task as looping over each and every value is required. The values at `0` position is minimum and at `length-1` is maximum, but to get minimum and maximum value you have to arrage the whole array. To solve this problem this function is used to get max values 

``` javascript
function arrayMax(arr){
	 let len = arr.length;
	 let max = -Infinity;
	 while(len--){
	 	if(arr[len] > max){
	 		max = arr[len];
	 		}
 		}
 		return max;
	}
```

Similarly by doing reverse we will get min value

``` javascript
`function arrayMin(arr){
	let len = arr.length;
	let min = Infinity;
	while(len --){
		if(arr[len] <min){
			min = arr[len];
		}
	}
	return min
}
```
	
Further readings - Sorting with map.
Trailer of topic: The `compareFunction` can be invoked multiple times per element within the array.
Depending on the `compareFunction` nature, this may yield a high overhead. The more work a `compareFunction` does and the more elements there are to sort, the wiser it may be to consider using a map for sorting. The idea is to walk the array once to extract the actual values used for sorting into a temporary array, sort the temporary array and then walk the temporary array to achieve the right order. We will come back to this topic once we know something about JS maps.

## 3. `Array.prototype.filter`
The filter() method creates a new array with all elements that pass the test implemented by the provided function

_demo\_010.js_

``` javascript
//Array.prototype.filter demo: similar to Array.prototype.find method.
//In this demo we will take some words and will filter then according to the number of letters they have

let words = [ "spray", "limit", "elite", "exuberant", "destruction", "apocalypse", "marvellous" ];

//clearing the terminal
console.log("\033c");

let longWords = words.filter(function(word) {
  return word.length > 6;
});

console.log("words having length greater than 6: ", longWords);

```

Here in above example we are supplying a filter function to `Array.prototype.filter` method. In that filter function we are getting 'words' that has length of more than '6'.

Lets do the same thing with a little modification to the code in ES6

_demo\_011.js_

``` javascript
//...same as before
let longWords = words.filter(word => word.length > 6);
console.log("Words having length greater than 6: " + longWords);

```

To know more about fat arrow function of ES6 read ES6 documentation from my repository.

#### Filtering out numeric values. 
This demo will filter out all the elements that are smaller than 99 from the given arrays. 

- Lets assume you have a array having elements [1001, 21, 50, 901, 100, 13]
- Now we will create a function that will take these numbers as argument and compare the number to 99, if greater than return true otherwise false. 

_demo\_012.js_
 
``` javascript
// filter out elements to get numbers less than 99
let chalk = require("chalk");

console.log("\033c");

function isBigEnough(value) {
  return value >= 99;
}

let filtered = [1001, 21, 50, 901, 100, 13].filter(isBigEnough);
console.log("numbers greater than 99: " + chalk.green(filtered.join()));
```

#### Filtering invalid entries from JSON

In this demo we will remove the 'id' fields in a JSON array that contains non numbers, negative numbers and 0.

_demo\_012.js_

``` javascript
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
  return obj !== undefined && typeof obj === "number" && !isNaN(obj);
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
```

Lets have a look at the result 

```
Filtered Array
[{"id":20},{"id":-2},{"id":0},{"id":18.9},{"id":6}]
Number of invalid Entries = 4
```

Here as you can see it is also returning id: -2 which is a invalid field for us so to solve this problem add one more condition to `isNumber` ie. `obj >0` this will check whether the object is greater than 0 or not if false, it's an invalid field that needs to be removed. Now check result. 

Now our invalid count must be `6` as all negatives and zeros are removed from the ids.

#### Searching in array
In this demo we will create an filter function that will give the result according to query. Lets start by writing code

_demo\_013.js_

``` javascript
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
```

This function will search for 'ap' in first cosole statement and the result will be `'apple', 'grapes'`
The second function gets results matching 'an'. Result : `'banana', 'mango', 'orange'`

Now writing this same function with ES6 code

_demo\_014.js_


``` javascript
// Es6 implementation of filter data according to query

console.log("\033c");
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

console.log("\033c");

const filterItems = (query) => {
  return fruits.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log("fruits containing 'ap' in their name: " + filterItems("ap"));
console.log("fruits containing 'an' in their name: " + filterItems("an"));

```

Thats a wrap up for this module for now. 
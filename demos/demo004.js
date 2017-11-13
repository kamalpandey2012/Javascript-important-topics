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

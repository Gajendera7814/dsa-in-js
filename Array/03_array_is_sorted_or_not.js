/*
    Check if an array is sorted or not.
    <--------------------------------->

    Input: [1, 2, 3, 4, 5],  Output: true

    Input: [1, 2, 7, 8, 3, 4],   Output: false
*/

const isSorted1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) return false;
    }
  }
  return true;
};
console.log(isSorted1([1, 2, 3, 4, 5]));

/*
    Time Complexity :- O(N^2)
    Space Complexity :- O(1)
*/




//<<<<<<<<----------------------- Ascending Order ------------------------>>>>>>>>>>//

const isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([1, 2, 7, 8, 3, 4]));


//<<<<<<<<----------------------- Descending Order ---------------------->>>>>>>>>>//

const isSortedDescending = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSortedDescending([3, 2, 1]));
console.log(isSortedDescending([8, 7, 6, 3, 4, 2, 1]));

/*
    Time Complexity :- O(N)
    Space Complexity :- O(1)
*/



//<<<<<<<<---------------------------------- Using Array.every() --------------------------------->>>>>>>>>>//

/*
    The every() method of Array instances tests whether all elements in the array pass the test implemented by 
    the provided function. It returns a Boolean value.
*/

//<<<<<<<<--------------------------- Ascending Order --------------------------->>>>>>>>>>//

const isSortedUsingEvery = arr => arr.every((val, i) => i === 0 || arr[i - 1] <= val);
console.log(isSortedUsingEvery([1, 2, 3, 4]));

//<<<<<<<<--------------------------- Descending Order --------------------------->>>>>>>>>>//

const isSortedUsingEveryDescending = arr => arr.every((val, i) => i === 0 || arr[i - 1] >= val);
console.log(isSortedUsingEveryDescending([3, 2, 1]));






//<<<<<<<<------------------------------------- Using Reduce() ------------------------------------>>>>>>>>>>//

const isSortedUsingReduce = arr => arr.reduce((acc, val, i) => acc && (i === 0 || arr[i - 1] <= val), true);
console.log(isSortedUsingReduce([1, 3, 2]));
console.log(isSortedUsingReduce([1, 2, 3, 4]));


const isSortedUsingReduceDescending = arr => arr.reduce((acc, val, i) => acc && (i === 0 || arr[i - 1] >= val), true);
console.log(isSortedUsingReduceDescending([3, 2, 1]));
console.log(isSortedUsingReduceDescending([8, 7, 6, 3, 4, 2, 1]));
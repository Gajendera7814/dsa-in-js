/*
    Remove Duplicates in place from Sorted Array
    <------------------------------------------->

    Input: [1, 1, 2, 2, 2, 3, 3],    Output: 3

*/

const removeDuplicates1 = (arr) => {
    arr.sort((a, b) => a - b);

    let uniqueIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = arr[i];
        }
    }
    arr.length = uniqueIndex + 1;

    return uniqueIndex + 1;
};
const array1 = [3, 1, 2, 3, 4, 1, 2];
const newLength1 = removeDuplicates1(array1);
console.log(array1); // Output :- [1, 2, 3, 4]
console.log(newLength1); // Output :- 4

/*
    Time Complexity: O(nlogn) due to sorting
    Space Complexity: O(1), because it modifies the array in place.
*/




const removeDuplicates2 = (arr) => {
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            arr.splice(i, 1);
            i--;
        } else {
            seen.add(arr[i]);
        }
    }
    return arr.length;
};
const arr2 = [1, 2, 2, 3, 4, 4, 5];
const newLength2 = removeDuplicates2(arr2);
console.log(arr2); // Output :- [1, 2, 3, 4, 5]
console.log(newLength2); // Output :- 5

/*
    Time Complexity: O(n)
    Space Complexity: O(n), because Set is used
*/



//<<<<<<<<<<----------------------------- Using indexOf() and splice() ----------------------------->>>>>>>>>>>>//

const removeDuplicates3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        while (arr.indexOf(arr[i]) !== i) {
            arr.splice(i, 1);
        }
    }
    return arr.length;
};

const arr3 = [1, 3, 2, 3, 7, 4, 1, 2, 6];
const newLength3 = removeDuplicates3(arr3);
console.log(arr3); // Output :- [1, 3, 2, 7, 4, 6]
console.log(newLength3); // Output :- 6


/*
    Time Complexity: O(n2) because indexOf() is called within a loop.
    Space Complexity: O(1), because we modify the array in place.
*/




//<<<<<<<<<<-------------------------------- Two Pointer Approach ----------------------------------->>>>>>>>>>>>//

const removeDuplicates4 = (arr) => {
    let seen = {};
  
    let uniqueIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            arr[uniqueIndex] = arr[i];
            uniqueIndex++;
        }
    }
    arr.length = uniqueIndex;

    return uniqueIndex;
};
const arr4 = [7, 1, 5, 3, 2, 6, 3, 4, 1, 2];
const newLength4 = removeDuplicates4(arr4);
console.log(arr4); // Output :- [7, 1, 5, 3, 2, 6, 4]
console.log(newLength4); // Output :- 7
  


/*
    Time Complexity: O(n)
    Space Complexity: O(1), no extra array is used.
*/
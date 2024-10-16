/*
    Move all Zeros to the end of the array.
    <-------------------------------------->

    Input: [0, 1, 2, 0, 4, 5, 0, 0, 9],  Output: [1, 2, 4, 5, 9, 0, 0, 0, 0]
*/

//<<<<<<<<<<<<---------------------------- Brute Force Approach ------------------------------->>>>>>>>>>>>>//

const moveZeros = (arr) => {
    let temp = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        if (arr[i] != 0) {
            temp.push(arr[i]);
        }
    }

    let x = temp.length;
    for (let i = 0; i < x; i++) {
        arr[i] = temp[i];
    }

    for (let i = x; i < n; i++) {
        arr[i] = 0;
    }

    return arr;
};
console.log(moveZeros([0, 1, 2, 0, 4, 5, 0, 0, 9])); // Output: [1, 2, 4, 5, 9, 0, 0, 0, 0]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/



//<<<<<<<<<<<<--------------------------------- Using 2 pointers ------------------------------>>>>>>>>>>>>>//

const moveZerosBy2Pointer = (arr) => {
    let n = arr.length;
    let j = -1;

    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements
    if (j === -1) return arr;

    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
};
console.log(moveZerosBy2Pointer([0, 1, 2, 0, 4, 0, 3])); // Output: [1, 2, 4, 3, 0, 0, 0]

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/




//<<<<<<<<<---------------------- Brute Force Approach (Using Extra Array) ------------------------>>>>>>>>>>//

const moveZerosBruteForce = (arr) => {
    const result = [];
    let zeroCount = 0;
  
    // Add non-zero elements to the result array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result.push(arr[i]);
      } else {
            zeroCount++;
      }
    }
  
    // Append zeros to the result array
    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }
  
    return result;
};
console.log(moveZerosBruteForce([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

/*
    Time Complexity: O(n) — We iterate through the array once to separate non-zeros and count zeros. 
    Space Complexity: O(n) — We use extra space for the result array.
*/




//<<<<<<------------------- Better Approach (In-Place with Two-Pointer Method) -------------------->>>>>>>>//

const moveZerosInPlace = (arr) => {
    let nonZeroIndex = 0;
  
    // Move non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
  
    // Fill the remaining elements with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
  
    return arr;
};
console.log(moveZerosInPlace([0, 1, 0, 3, 7, 0, 12, 0])); // Output: [1, 3, 7, 12, 0, 0, 0, 0]

/*
    Time Complexity: O(n) — We traverse the array twice (once for non-zero elements and once to fill zeros). 
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<--------------------------- Filter and Concatenation ----------------------------->>>>>>>>>>>>//

const moveZerosWithFilter = (arr) => {
    const nonZeros = arr.filter(num => num !== 0);
    const zeroCount = arr.length - nonZeros.length;
  
    return nonZeros.concat(Array(zeroCount).fill(0));
};
console.log(moveZerosWithFilter([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

/*
    Time Complexity: O(n) — Filtering and concatenating each take linear time. 
    Space Complexity: O(n) — A new array is created.
*/
  
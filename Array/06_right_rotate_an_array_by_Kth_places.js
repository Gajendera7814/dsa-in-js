/*
    Right Rotate an array by K’th places (<------- clock-wise start from end index)
    <----------------------------------------------------------------------------->

    Input: [1, 2, 3, 4, 5, 6, 7], k = 2,  Output: [6, 7, 1, 2, 3, 4, 5]

*/

const rotateToRight = (arr, k) => {
    if (arr.length === 0) return arr;
    let n = arr.length;
    k = k % n;

    // Edge case where no rotation is needed
    if (k === 0) return arr;
    let temp = [];

    // Store the last k elements in the temp
    for (let i = 0; i < k; i++) {
        temp[i] = arr[n - k + i];
    }

    // Shift the rest of the array to the right
    for (let i = n - 1; i >= k; i--) {
        arr[i] = arr[i - k];
    }

    // Place the stored elements at the beginning
    for (let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
    return arr;
};
console.log(rotateToRight([1, 2, 3, 4, 5, 6, 7], 2));

/*
    Time Complexity: O(n)
    Space Complexity: O(k)
*/




//<<<<<<<<<<<<--------------------------- Using the "Reversal Algorithm" ---------------------------->>>>>>>>>>>>>//

/* Input: [1, 2, 3, 4, 5, 6, 7], k = 3, Output: [5, 6, 7, 1, 2, 3, 4] */

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

const rightRotate = (arr, k) => {
    let n = arr.length;
    k = k % n;

    // should return the array if Empty
    if (n === 0) return arr;

    // Step 1: Reverse the entire array
    reverse(arr, 0, n - 1);

    // Step 2: Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Step 3: Reverse the remaining elements
    reverse(arr, k, n - 1);
    
    return arr;
};
console.log(rightRotate([1, 2, 3, 4, 5, 6, 7], 3));

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/



//<<<<<<<<<<<<---------------------------- Using Brute Force Approach ------------------------------>>>>>>>>>>>>>//

const rotateRightBruteForce = (arr, k) => {
    const n = arr.length;
    k = k % n;
  
    for (let i = 0; i < k; i++) {
        const lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
};
console.log(rotateRightBruteForce([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

/*
    Time Complexity: O(n × k)
    Space Complexity: O(1)
*/
  



const rotateRightWithSlicing = (arr, k) => {
    const n = arr.length;
    k = k % n;
  
    return arr.slice(n - k).concat(arr.slice(0, n - k));
};
console.log(rotateRightWithSlicing([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

/*
    Time Complexity: O(n) Slicing and concatenating both take linear time.
    Space Complexity: O(n) Extra space is used to store the result.
*/
  
/*
    Left Rotate an array by K’th places (-----> Anticlock-wise start from index 0)
    <---------------------------------------------------------------------------->

    Input: [1, 2, 3, 4, 5, 6, 7], k = 2, Output: [3, 4, 5, 6, 7, 1, 2]
*/

const rotateToLeft = (arr, k) => {
    if (arr.length === 0) return arr;
    
    let n = arr.length;
    
    k = k % n;

    // Edge case where no rotation is needed
    if (k === 0) return arr;
    let temp = [];

    // Store first k elements in temp
    for (let i = 0; i < k; i++) {
        temp[i] = arr[i];
    }

    // Shift the rest of the array to the left
    for (let i = k; i < n; i++) {
        arr[i - k] = arr[i];
    }

    // Place the stored elements at the end
    for (let i = 0; i < k; i++) {
        arr[n - k + i] = temp[i];
    }
    return arr;
};
console.log(rotateToLeft([1, 2, 3, 4, 5, 6, 7], 2)); // Output: [3, 4, 5, 6, 7, 1, 2]

/*
    Time Complexity: O(n)
    Space Complexity: O(k)
*/



//<<<<<<<<<<<-------------------------- Using the "Reversal Algorithm" ------------------------------>>>>>>>>>>>>//

/* Input: [1, 2, 3, 4, 5, 6, 7], k = 3, Output: [4, 5, 6, 7, 1, 2, 3] */


const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
};

const leftRotate = (arr, k) => {
    let n = arr.length;
    if (n === 0) return arr;
    k = k % n;

    // Step 1: Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Step 2: Reverse the remaining elements
    reverse(arr, k, n - 1);

    // Step 3: Reverse the entire array to complete the rotation
    reverse(arr, 0, n - 1);

    // return the rotated array
    return arr;
};
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [4, 5, 6, 7, 1, 2, 3]

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/



//<<<<<<<<<-------------------------------- Using Shift and Push ----------------------------->>>>>>>>>>//

const rotateLeft = (arr, k) => {
    k = k % arr.length;
    
    for (let i = 0; i < k; i++) {
        let temp = arr.shift();
        arr.push(temp);
    }
    return arr;
};
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]

/*
    Time Complexity: O(k × n), where k is the number of positions to rotate and n is the size of the array.
    Space Complexity: O(1)
*/




//<<<<<<<<<------------------------------- Using Slice and Concat ------------------------------->>>>>>>>>>//

const rotateLeft2 = (arr, k) => {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};
console.log(rotateLeft2([1, 2, 3, 4, 5], 3)); // Output: [4, 5, 1, 2, 3]


/* OR */

const rotateLeft3 = (arr, k) => {
    k = k % arr.length;
    const part = arr.splice(0, k);
    arr.push(...part);

    return arr;
};
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateLeft(arr, k)); // Output: [3, 4, 5, 1, 2]


/*
    Time Complexity: O(n), because slicing and concatenation take linear time.
    Space Complexity: O(n), due to extra space used by slice().
*/

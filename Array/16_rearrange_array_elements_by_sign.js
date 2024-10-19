/*
    Rearrange Array Elements by Sign.
    <------------------------------->

    Input: [1, 2, -4, -5], Output: [1, -4, 2, -5]

    Input: [3, 1, -2, -5, 2, -4], Output: [3, -2, 1, -5, 2, -4]
*/


/*
    There are two varieties of the same problem

    1. positive element == negative element
        [3, 1, -2, -5, 2, -4] here posElem = 3, negElem = 3
    
    2. positive element !== negative element Here Two Possibilities occur.
        1. posElem > negElem [1, 2, -4, -5, 3, 4] here posElem = 4, negElem = 2
        2. posElem < negElem [1, 2, -3, -1, -2, -3] here posElem = 2, negElem = 4

*/


/* Case - 1 Positive Element === Negative Element */

//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const reArrangebBySign = (arr) => {
    let pos = [];
    let neg = [];
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            pos.push(arr[i]);
        } else {
            neg.push(arr[i]);
        }
    }

    // Positives on even indices, negatives on odd.
    for (let i = 0; i < n / 2; i++) {
        arr[2 * i] = pos[i];
        arr[2 * i + 1] = neg[i];
    }
    return arr;
};
console.log(reArrangebBySign([1, 2, -4, -5])); // Output: [ 1, -4, 2, -5 ]

/*
    Time Complexity: O(n + n/2)
    Space Complexity: O(n/2 + n/2) = O(n)
*/




//<<<<<<<<<<<<<--------------------------------- Optimal Approach ----------------------------------->>>>>>>>>>>>>//

const reArrangebBySignOptimalWay = (arr) => {
    let n = arr.length;
    let ans = new Array(n).fill(0);

    // Positive elements start from 0 and negative from 1.
    let posIndex = 0;
    let negIndex = 1;
    
    for (let i = 0; i < n; i++) {
        // Fill negative elements in odd indices and increment by 2.
        if (arr[i] < 0) {
            ans[negIndex] = arr[i];
            negIndex += 2;
        }
        
        // Fill positive elements in even indices and increment by 2.
        else {
            ans[posIndex] = arr[i];
            posIndex += 2;
        }
    }
    return ans;
};
console.log(reArrangebBySignOptimalWay([3, 1, -2, -5, 2, -4])); // Output: [ 3, -2, 1, -5, 2, -4 ]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/





//<<<<<<<<<<<<<---------------------------- Using Two Separate Arrays ---------------------------->>>>>>>>>>>>>//

/*
    Algorithm :-

    - Traverse the input array and collect positive and negative numbers in separate arrays.
    - Merge the arrays by alternating between positive and negative numbers.
    - If one array is longer than the other, append the remaining elements at the end.
*/

const rearrangeBySign = (arr) => {
    let positives = [];
    let negatives = [];
    
    // Separate positive and negative numbers
    for (let num of arr) {
        if (num >= 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }

    let result = [];
    let i = 0;
    
    // Alternate between positives and negatives
    while (i < positives.length && i < negatives.length) {
        result.push(positives[i]);
        result.push(negatives[i]);
        i++;
    }

    // If positives are left
    while (i < positives.length) {
        result.push(positives[i++]);
    }

    // If negatives are left
    while (i < negatives.length) {
        result.push(negatives[i++]);
    }

    return result;
};
console.log(rearrangeBySign([3, 1, -2, -5, 2, -4])); // Output: [3, -2, 1, -5, 2, -4]
console.log(rearrangeBySign([1, 2, -4, -5]));        // Output: [1, -4, 2, -5]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/




//<<<<<<<<<<<<<<-------------------------------- Using Two Pointer ------------------------------->>>>>>>>>>>>>>//

/*
    Algorithm :- 
    
    - Use two pointers: posIndex to keep track of the next position for a positive number and negIndex for 
      the next position for a negative number.

    - Traverse the array. For each positive number, place it in the next available even index (posIndex), 
      and for each negative number, place it in the next available odd index (negIndex).

    - Continue until one of the indices exceeds the length of the array.
*/

const rearrangeBySignInPlace = (arr) => {
    let posIndex = 0, negIndex = 1;
    let result = new Array(arr.length); // New array to avoid overwriting
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && posIndex < arr.length) {
            result[posIndex] = arr[i];
            posIndex += 2;
        } else if (arr[i] < 0 && negIndex < arr.length) {
            result[negIndex] = arr[i];
            negIndex += 2;
        }
    }

    return result;
};
console.log(rearrangeBySignInPlace([3, 1, -2, -5, 2, -4])); // Output: [3, -2, 1, -5, 2, -4]
console.log(rearrangeBySignInPlace([1, 2, -4, -5]));        // Output: [1, -4, 2, -5]

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
/*
    Count Maximum Consecutive One's in the array.
    <-------------------------------------------->

    Input: [1, 1, 0, 1, 1, 1, 1],   Output: 4
*/

const findMaxConsecutiveOnes = (arr) => {
    let count = 0;
    let maxCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count++;
        } else {
            count = 0;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1])); // Output: 4

/*
    Time Complexity: O(N)
    Space Complexity: O(1)
*/




//<<<<<<<<<<---------------------- Using a Two-Pointer (Sliding Window) Approach -------------------->>>>>>>>>>>>//

/*
    Algorithm :-

    1. Use two pointers, start and end, both starting at the beginning of the array.
    2. As you move end to traverse the array, check if the element is 1 or 0.
        If it's 1, continue moving end.
        If it's 0, update the maxCount with the length of the window [start, end - 1], then move start to end + 1 
        to start a new window.
    3. After the loop, handle the case where the array ends with 1.
*/

const findMaxConsecutiveOnesTwoPointer = (arr) => {
    let maxCount = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        if (arr[end] === 0) {
            maxCount = Math.max(maxCount, end - start);
            start = end + 1;
        }
    }

    // Handle the case where the array ends with 1's
    maxCount = Math.max(maxCount, arr.length - start);

    return maxCount;
};
console.log(findMaxConsecutiveOnesTwoPointer([1, 1, 0, 1, 1, 1])); // Output: 3

/*
    Time Complexity: O(n), where n is the length of the array. We traverse the array once.
    Space Complexity: O(1), as we use only constant extra space.
*/

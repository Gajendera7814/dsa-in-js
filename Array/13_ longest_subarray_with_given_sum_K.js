/*
    Longest Subarray with given Sum K([Postives and Negatives])
    <--------------------------------------------------------->

    Input: [2, 3, 5], k = 5, Output: 2
    
    Explanation: The longest subarray with sum 5 is [2, 3] And its length is 2.
    
    Input: [2, 3, 5, 1, 9], k = 10, Output: 3
    
    Explanation: The longest subarray with sum 10 is [2, 3, 5] And its length is 3.

*/


//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const getLongestSubarray = (arr, k) => {
    let n = arr.length;
    let len = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let sum = 0;
            for (let k = i; k <= j; k++) {
                sum += arr[k];
            }
            if (sum === k){
                len = Math.max(len, j - i + 1);
            }
        }
    }
    return len;
};
console.log(getLongestSubarray([2, 3, 5], 5)); // Output: 2

/*
    Time Complexity: O(N3)
    Space Complexity: O(1)
*/



const getLongestSubarrayUsingTwoLoop = (arr, k) => {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;

        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];

            if (currentSum === k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
};
console.log(getLongestSubarrayUsingTwoLoop([2, 3, 5, 1, 9], 10)); // Output: 3

/*
    Time Complexity: O(N2)
    Space Complexity: O(1)
*/





//<<<<<<<<<<<<<-------------------------------- Using Two pointers -------------------------------->>>>>>>>>>>>>//

const getLongestSubarrayUsingTwoPointer = (arr, k) => {
    let n = arr.length;
    let left = 0;
    let right = 0;
    let sum = arr[0];
    let maxLen = 0;

    while (right < n) {
        while (left <= right && sum > k) {
            sum -= arr[left];
            left++;
        }

        if (sum === k) {
        maxLen = Math.max(maxLen, right - left + 1);
        }

        right++;
        if (right < n) sum += arr[right];
    }
    return maxLen;
};
console.log(getLongestSubarrayUsingTwoPointer([2, 3, 5, 1, 9], 10)); // Output: 2

/*
    Time Complexity: O(2*N)
    Space Complexity: O(1)
*/





//<<<<<<<<<<<<<------------------------------ Prefix Sum with HashMap ------------------------------>>>>>>>>>>>>>//

/*
    Algorithm :-
    - Traverse the array and maintain the cumulative sum.
    - Check if the cumulative sum minus the target sum K exists in the hash map. If it does, calculate the length 
      of the subarray and update the maximum length.
    - If the cumulative sum itself equals K, update the maximum length.
    - Store the cumulative sum and its index in the hash map.
*/

const longestSubarrayWithSumK = (arr, K) => {
    let prefixSum = 0;
    let maxLength = 0;
    let sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        // If the prefix sum equals K, update maxLength
        if (prefixSum === K) {
            maxLength = i + 1;
        }

        // If (prefixSum - K) is found in the map, update maxLength
        if (sumMap.has(prefixSum - K)) {
            maxLength = Math.max(maxLength, i - sumMap.get(prefixSum - K));
        }

        // Store prefixSum in the map only if it is not present
        if (!sumMap.has(prefixSum)) {
            sumMap.set(prefixSum, i);
        }
    }
    return maxLength;
};
console.log(longestSubarrayWithSumK([1, -1, 5, -2, 3], 3)); // Output: 4

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/





//<<<<<<<<<<<<---------------------- Sliding Window (For Non-Negative Integers) --------------------->>>>>>>>>>//

const longestSubarrayWithSumKSlidingWindow = (arr, K) => {
    let left = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right];

        while (currentSum > K) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === K) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    return maxLength;
};
console.log(longestSubarrayWithSumKSlidingWindow([1, 2, 3, 4, 5], 9)); // Output: 3

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
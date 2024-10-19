/*
    Maximum Subarray Sum in an Array.
    <------------------------------->

    Input: [-2, -3, 4, -1, -2, 1, 5, -3], Output: 7

    Explanation: [4, -1, -2, 1, 5] has the largest sum = 7
*/


//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const maxSubArrayBruteForce = (arr) => {
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;

        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};
console.log(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

/*
    Time Complexity: O(n3)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<---------------------------------- Better Approach ---------------------------------->>>>>>>>>>>>>//

const maxSubarraySumUsingLoop = (arr) => {
    let n = arr.length;
    let maxi = -Infinity;

    for (let i = 0; i < n; i++) {
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += arr[j];
            maxi = Math.max(maxi, sum);
        }
    }
    return maxi;
};
console.log(maxSubarraySumUsingLoop([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7

/*
    Time Complexity: O(n2)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<-------------------------------- Kadane's Algorithm -------------------------------->>>>>>>>>>>>>//

/*
    Algorithm :-

    - Initialize two variables: currentSum (the sum of the current subarray) and maxSum (the largest sum found).
    - Iterate through the array. For each element, update currentSum to be either the current element alone or 
      the sum of the current element with the previous currentSum, whichever is larger.
    - Update maxSum to the maximum of maxSum and currentSum.
*/

const maxSubArrayKadane = (arr) => {
    let currentSum = arr[0];
    let maxSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}
console.log(maxSubArrayKadane([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<---------------------------- Divide and Conquer Approach --------------------------->>>>>>>>>>>>//

/*
    Algorithm :-

    -Recursively divide the array into two halves.
    -For each half, recursively find the maximum subarray sum.
    -Combine the solutions by considering a possible subarray that crosses the middle.
*/

const maxSubArrayDivideAndConquer = (nums, left = 0, right = nums.length - 1) => {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);

    const leftMax = maxSubArrayDivideAndConquer(nums, left, mid);
    const rightMax = maxSubArrayDivideAndConquer(nums, mid + 1, right);
    const crossMax = maxCrossingSubarray(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossMax);
};

const maxCrossingSubarray = (nums, left, mid, right) => {
    let leftSum = -Infinity, rightSum = -Infinity;
    let currentSum = 0;

    for (let i = mid; i >= left; i--) {
        currentSum += nums[i];
        leftSum = Math.max(leftSum, currentSum);
    }

    currentSum = 0;
    for (let i = mid + 1; i <= right; i++) {
        currentSum += nums[i];
        rightSum = Math.max(rightSum, currentSum);
    }

    return leftSum + rightSum;
};
console.log(maxSubArrayDivideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

/*
    Time Complexity: O(n log n)
    Space Complexity: O(log n)
*/
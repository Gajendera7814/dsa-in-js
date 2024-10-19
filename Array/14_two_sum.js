/*
    Two Sum
    <------>
    
    Input: [2, 6, 5, 8, 11], target = 14, Output: [1, 3]

    Input: [2, 6, 5, 8, 11], target = 15, Output: [-1, -1]
*/

//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};
console.log(twoSum([2, 6, 5, 8, 11], 14)); // Output: [1, 3]

/*
    Time Complexity: O(N2)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<------------------------------- using Hashing Approach ------------------------------->>>>>>>>>>>>>//

const twoSumUsingHashing = (arr, target) => {
    let hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let neededNumber = target - arr[i];

        if (hashMap.has(neededNumber)) {
            return [i, hashMap.get(neededNumber)];
        }
        hashMap.set(arr[i], i);
    }
    return [-1, -1];
};
console.log(twoSumUsingHashing([2, 6, 5, 8, 11], 14)); // Output: [3, 1]

/*
    Time Complexity: O(N)
    Space Complexity: O(N)
*/




//<<<<<<<<<<<<<----------------------------- using two-pointer Approach ---------------------------->>>>>>>>>>>>>//

const twoSumUsingTwoPointer = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    arr.sort((a, b) => a - b);

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left, right];
        }
    }
    return [-1, -1];
};
console.log(twoSumUsingTwoPointer([1, 3, 5, 7, 9], 12)); // Output: [1, 4]

/*
    Time Complexity = O(nlogn) + O(n) = O(nlogn)
    Space Complexity: O(n)
*/




//<<<<<<<<<<<<<------------------------------ Using a Set Approach ------------------------------>>>>>>>>>>>>>//

const twoSumSet = (nums, target) => {
    let seen = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (seen.has(complement)) {
            return [i, nums.indexOf(complement)];
        }
        
        seen.add(nums[i]);
    };
    return [-1, -1];
};
console.log(twoSumSet([2, 7, 11, 15], 9)); // Output: [1, 0]

/*
    Time Complexity = O(n)
    Space Complexity: O(n), due to the set storing up to n elements.
*/

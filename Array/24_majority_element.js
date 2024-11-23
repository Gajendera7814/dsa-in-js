/*
    Majority Element      Leetcode Problem
    <--------------->     <--------------->

    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element 
    always exists in the array.


    Input: [3, 2, 3],  Output: 3

    Input: [2, 2, 1, 1, 1, 2, 2],   Output: 2
*/


/*<-------------------------------------- Counting with a Single Pass --------------------------------------------->*/

const majorityElement = (nums) => {
    let majorityCount = Math.floor(nums.length / 2);

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === nums[i]) count++;
        }

        if (count > majorityCount) {
            return nums[i];
        }
    }
};
console.log(majorityElement([3, 2, 3])); // Output: 3

/*
    Time Complexity: O(n²)
    Space Complexity: O(1)
*/





/*<-------------------------------------- Hash Table (Frequency Count) ------------------------------------------->*/

/*
    Use a hash map to count the frequency of each element.
    Return the element with a count greater than n / 2.
*/

const majorityElementUsingHash = (nums) => {
    const counts = new Map();
    const majorityCount = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
        if (counts.get(num) > majorityCount) {
            return num;
        }
    }
};
console.log(majorityElementUsingHash([2, 2, 1, 1, 1, 2, 2])); // Output: 2

/*
    Time Complexity: O(n) (Single pass to count frequencies)
    Space Complexity: O(n) (Space for the hash map)
*/





/*<-------------------------------------- Boyer-Moore Voting Algorithm ------------------------------------------->*/

/*
    Use a counter to keep track of a potential majority candidate.
    Increase the counter when encountering the candidate, decrease it otherwise.
    At the end, the candidate is guaranteed to be the majority element.
*/

function majorityElementUsingVotingAlgorithm(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
console.log(majorityElementUsingVotingAlgorithm([3, 2, 3]));

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/





/*<-------------------------------------------------- Sorting ---------------------------------------------------->*/

/*
    Sort the array. The majority element must occupy the middle position (since it appears more than n / 2 times).
*/

const majorityElementUsingSorting = (nums) => {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElementUsingSorting([1, 2, 3, 4, 5, 4, 2, 8])); // Output: 4

/*
    Time Complexity: O(n log n) (Sorting)
    Space Complexity: O(1)
*/
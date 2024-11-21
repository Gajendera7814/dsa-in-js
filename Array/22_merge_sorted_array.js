/*
    Merge Sorted Array      Leetcode Problem
    <----------------->     <--------------->

    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
    representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.


    Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3,   Output: [1, 2, 2, 3, 5, 6]
    
    Explanation: The arrays we are merging are [1, 2, 3] and [2, 5, 6].

    The result of the merge is [1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.



    Input: nums1 = [1], m = 1, nums2 = [], n = 0,   Output: [1]
    
    Explanation: The arrays we are merging are [1] and []. The result of the merge is [1].
*/

/*<------------------------------------------- Using Array Methods ------------------------------------------------->*/

const mergeSortedArray = (nums1, m, nums2, n) => {
    nums1.length = m;
    let j = 0;

    for (let i = 0; i < nums2.length; i++) {
        while (j < nums1.length && nums1[j] < nums2[i]) j++;
        nums1.splice(j, 0, nums2[i]);
    }

    return nums1;
};
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // Output: [ 1, 2, 2, 3, 5, 6 ]

/*
    Time Complexity :- O(mn)
    Space Complexity :- O(1)
*/




/*<------------------------------------- Two-Pointer Technique (Merge from End) ----------------------------------->*/

const mergeSortedArrayUsingTwoPointer = (nums1, m, nums2, n) => {
    let i = m - 1; // Last valid element in nums1
    let j = n - 1; // Last element in nums2
    let k = m + n - 1; // Last position in nums1

    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }

    while (j >= 0) { // If nums2 still has elements
        nums1[k--] = nums2[j--];
    }
    return nums1;
};
console.log(mergeSortedArrayUsingTwoPointer([1], 1, [], 0)); // Output: [1]


/*
    Time Complexity :- O(m + n)
    Space Complexity :- O(1)
*/




/*<----------------------------------------------- Using Sorting -------------------------------------------------->*/

const mergeSortedArrayUsingSorting = (nums1, m, nums2, n) => {
    nums1.length = m; // Remove extra space if needed
    nums1.push(...nums2.slice(0, n)); // Add elements of nums2
    nums1.sort((a, b) => a - b); // Sort the array

    return nums1;
};
console.log(mergeSortedArrayUsingSorting([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


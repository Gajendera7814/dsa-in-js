/*
    Union of Two Sorted Arrays.
    <-------------------------->

    Input: arr1 = [1, 2, 3, 4, 7, 8, 9, 10],  arr2 = [2, 3, 4, 4, 5, 11, 12]
    
    Output: [1, 2, 3, 4, 7, 8, 9, 10, 5, 11, 12];
*/


const findUnion = (arr1, arr2) => {
    let set = new Set();
    
    for (let i = 0; i < arr1.length; i++) {
        set.add(arr1[i]);
    }
    
    for (let i = 0; i < arr2.length; i++) {
        set.add(arr2[i]);
    }
    
    let union = Array.from(set);

    return union;
};
let arr1 = [1, 2, 3, 4, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];
console.log(findUnion(arr1, arr2));

/*
    Time Compleixty : O((m + n)log(m + n))
    Space Complexity : O(m + n)
*/




//<<<<<<<<<<<----------------------- Brute Force Approach (Merge and Sort) ------------------------>>>>>>>>>>//

/* 
    Input: arr1 = [1, 3, 4, 5, 7], arr2 = [2, 3, 5, 6]
    Output: [1, 2, 3, 4, 5, 6, 7]

    Steps:

        1. Merge both arrays using concat.
        1. Sort the merged array.
        3. Remove duplicates using a Set.
*/


const unionBruteForce = (arr1, arr2) => {
    // Merge the two arrays
    let mergedArray = arr1.concat(arr2);
    
    // Sort the merged array
    mergedArray.sort((a, b) => a - b);
    
    // Use a Set to remove duplicates
    return [...new Set(mergedArray)];
};
console.log(unionBruteForce([1, 3, 4, 5, 7], [2, 3, 5, 6])); // Output: [1, 2, 3, 4, 5, 6, 7]

/*
    Time Complexity: O((m + n)log(m + n)) — Sorting the merged array dominates. 
    Space Complexity: O(m + n) — The merged array and the Set both take space proportional to the size of the input arrays.
*/




//<<<<<<<<<<<<<<<------------------------------ Two Pointer Technique ----------------------------->>>>>>>>>>>>>//

/*
    Steps:

        1. Initialize two pointers, i and j, starting at 0.
        2. Compare the elements at arr1[i] and arr2[j].
        3. Add the smaller element to the result array and move the pointer. 
           If the elements are the same, add only one and move both pointers.
        4. Add any remaining elements from either array after one pointer finishes.
*/

const unionTwoPointer = (arr1, arr2) => {
    let i = 0, j = 0;
    let result = [];
  
    while (i < arr1.length && j < arr2.length) {
        // If the element is smaller, push it to result and move that pointer
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            // If both elements are equal, add one and move both pointers
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    
    // Add remaining elements of arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
  
    // Add remaining elements of arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
  
    return result;
};
console.log(unionTwoPointer([1, 3, 4, 5, 7], [2, 3, 5, 6])); // Output: [1, 2, 3, 4, 5, 6, 7]

/*
    Time Complexity: O(m + n) — We iterate through both arrays once. 
    Space Complexity: O(m + n) — The result array takes space proportional to the sum of the lengths of both arrays.
*/

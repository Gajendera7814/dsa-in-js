/*
    Next Permutation
    <-------------->

    Input: [1, 3, 2], Output: [2, 1, 3]
    
    Explanation :-

    Input: [1, 3, 2] -->> 132
    [1, 2, 3] -->> 123 123 <= 132
    [1, 3, 2] -->> 132 132 == 132
    [2, 1, 3] -->> 213 ans it is greater than 132, so next permutation is [2, 1, 3]
    [2, 3, 1] -->> 231
    [3, 1, 2] -->> 312
    [3, 2, 1] -->> 321
*/

/*
    Algorithm :-

    - Traverse the array from end and find the first index, index such that arr[i] < arr[i + 1].
    - Again traverse the array from the end and find the first index, ind such that arr[i] > arr[index].
    - Swap arr[index] and arr[index].
    - Reverse the array from index + 1 till N.
    - The base case would be, if the array is in decreasing order, no next permutation will be found, 
      hence return the array in sorted order.
*/

const nextPermutation = (arr) => {
    let n = arr.length;

    // Step 1: Find the break point
    let ind = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) {
            ind = i;
            break;
        }
    }

    // If breakpoint does not exist
    if (ind == -1) {
        arr.reverse();
        return arr;
    }
    
    // Step 2: Find the next greater element and swap it with ar[ind]
    for (let i = n - 1; i > ind; i--) {
        if (arr[i] > arr[ind]) {
            [arr[i], arr[ind]] = [arr[ind], arr[i]];
            break;
        }
    }

    // Step 3: reverse the right half
    arr.splice(ind + 1, n - ind - 1, ...arr.slice(ind + 1).reverse());
    return arr;
};
console.log(nextPermutation([1, 3, 2])); // Output: [ 2, 1, 3 ]

/*
    Time Complexity: O(3N)
    Space Complexity: O(1)
*/
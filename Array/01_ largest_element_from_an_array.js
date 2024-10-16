/*
    Find the Largest Element from an Array.
    <-------------------------------------->

    Input: [1, 8, 7, 56, 90],    Output: 90

    Input: [1, 2, 0, 3, 2, 4, 5],    Output: 5
*/

//<<<<<<<<<<<<<<------------------------------------------------->>>>>>>>>>>>>>>//

const findLargestElement = (arr) => {
    if (arr.length === 0) return null;

    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};
console.log(findLargestElement([3, 5, 1, 8, 4, 2]));

// Time complexity :- O(n)


//<<<<<<<<<<<<<<------------------------------------------------->>>>>>>>>>>>>>>//

const findLargestUsingReduce = (arr) => {
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
};
console.log(findLargestUsingReduce([1, 2, 0, 3, 2, 4, 5]));

// Time complexity :- O(n)

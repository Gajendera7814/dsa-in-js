/*
    Find the Second Largest element from an array.
    <--------------------------------------------->

    Input: [12, 35, 1, 10, 34, 1],    Output: 34

    Input: [34, 45, 78, 23, 23, 23],     Output: 45
*/


const secondLargestElement = (arr) => {
    if (arr.length < 2) return null;
    
    let max = Math.max(...arr);

    let filteredArray = arr.filter((el) => el !== max);
    
    let secondMax = Math.max(...filteredArray);
    
    return secondMax;
};
console.log(secondLargestElement([12, 35, 1, 10, 34, 1]));

/*
    Time complexity is :- O(n) + O(n) + O(n) = O(n)
    Space complexity is :- O(n) because of the new array created by filter.
*/



const secondLargestElemUsingSort = (arr) => {
    if (arr.length < 2) return null;
    
    arr.sort((a, b) => b - a);
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
    return null;
};
console.log(secondLargestElemUsingSort([34, 45, 78, 23, 23, 23]));

/*
    Time complexity is :- O(n log n) + O(n) = O(n log n)
    Space complexity is :- O(n) because the sorting algorithm may need additional space.
*/



const secondLargest = (arr) => {
    if (arr.length < 2) return -1;

    let largest = arr[0];
    let sLargest = -1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            sLargest = largest;
            largest = arr[i];
        } else if (arr[i] > sLargest && arr[i] != largest) {
            sLargest = arr[i];
        }
    }
    return sLargest;
};
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
  
/*
    Time complexity is :- O(n)
    Space complexity is :- O(1)
*/
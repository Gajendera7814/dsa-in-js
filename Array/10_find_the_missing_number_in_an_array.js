/*
    Find the missing number in an array.
    <----------------------------------->

    Input: [1, 2, 4, 5],   Output: 3
*/


//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const missingNumber = (arr) => {
    let n = arr.length + 1;
    for (let i = 1; i <= n; i++) {
        let flag = 0; // check if an element exists

        for (let j = 0; j < n - 1; j++) {
            if (arr[j] === i) {
                flag = 1;
                break;
            }
        }
        // check if the element is missing (i.e., flag === 0)
        if (flag === 0) {
            return i;
        }
    }
    return -1;
};
console.log(missingNumber([1, 2, 4, 5])); // Output: 3

/*
    Time Complexity: O(n2) 
    Space Complexity: O(1)
*/



//<<<<<<<<<<<<<----------------------------------- using Hashing ----------------------------------->>>>>>>>>>>>>//

const missingNumbers = (arr) => {
    let n = arr.length + 1;
    const hash = new Array(n + 1).fill(0);

    // storing the frequencies
    for (let i = 0; i < n - 1; i++) {
        hash[arr[i]]++;
    }
    
    // checking the frequencies for numbers 1 to n
    for (let i = 1; i <= n; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }
    return -1;
};
console.log(missingNumbers([1, 2, 3, 4, 5, 7])); // Output: 6

/*
    Time Complexity: O(n) + O(n) = O(2n)
    Space Complexity: O(n)
*/




//<<<<<<<<<<<<<-------------------------------- Summation Approach -------------------------------->>>>>>>>>>>>>//

const missingnumber = (arr) => {
    let n = arr.length;

    const summation = (n * (n + 1)) / 2;
    
    let s2 = 0;
    for (let i = 0; i < n - 1; i++) {
        s2 += arr[i];
    }
    
    const missingNum = summation - s2;

    return missingNum;
};
console.log(missingnumber([1, 2, 3, 5, 6, 7])); // Output: 4

/* OR */

const findMissingNumber = (arr) => {
    let n = arr.length + 1;

    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
};
console.log(findMissingNumber([1, 2, 3, 4, 6, 7])); // Output: 5

/*
    Time Complexity: O(N)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<---------------------------------- XOR Approach  ---------------------------------->>>>>>>>>>>>>//

const missingsNumber = (arr) => {
    let xor1 = 0;
    let xor2 = 0;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ n;

    return xor1 ^ xor2;
};
console.log(missingsNumber([1, 3, 4, 5])); // Output: 2
 
/*
    Time Complexity: O(N)
    Space Complexity: O(1)
*/
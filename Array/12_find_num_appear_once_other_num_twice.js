/*
    Find the number that appears once, and the other numbers twice.
    <------------------------------------------------------------->

    Input: [2, 2, 1],   Output: 1
    
    Input: [4, 5, 1, 2, 4, 1, 2],   Output: 5
*/

//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const getSingleElement = (arr) => {
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        let cnt = 0;
        
        // Find the occurrence using a linear search
        for (let j = 0; j < n; j++) {
            if (arr[j] === num) {
                cnt++;
            }
        }
        
        // If the occurrence is 1, return the number
        if (cnt === 1) {
            return num;
        }
    }
    return -1;
};
console.log(getSingleElement([4, 5, 1, 2, 4, 1, 2])); // Output: 5

/*
    Time Complexity: O(N2)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<---------------------------------- Using Hashing ---------------------------------->>>>>>>>>>>>>//

const getSingleElementUsingHashing = (arr) => {
    let n = arr.length;
    
    // Find the maximum element
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }
    
    // Declare a hash array of size maxi + 1 And hash the given array
    let hash = new Array(maxi + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }
    
    // Find the single element and return the answer
    for (let i = 0; i < n; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }
    return -1;
};
console.log(getSingleElementUsingHashing([4, 1, 2, 1, 2])); // Output: 4

/*
    Time Complexity: O(N) + O(N) + O(N) = 3O(N) = O(N)
    Space Complexity: O(maxElement + 1)
*/




//<<<<<<<<<<-------------------------- Hashing using the map data structure ----------------------->>>>>>>>>>>//

const getSingleElementUsingMap = (arr) => {
    const n = arr.length;
    
    // Declare the hashmap. And hash the given array
    const hashmap = new Map();
    
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }
    
    // Find the single element and return the answer
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }
    return -1;
};
console.log(getSingleElementUsingMap([2, 2, 1])); // Output: 1

/*
    Time Complexity: O(N * logM) + O(M)
    Space Complexity: O(M)
*/




//<<<<<<<<<<---------------------------------------- Using XOR ------------------------------------->>>>>>>>>>>//

const getSingleElementUsingXOR = (arr) => {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
    }
    return xor;
};
console.log(getSingleElementUsingXOR([4, 1, 2, 1, 4, 2, 6])); // Output: 6

/*
    Time Complexity: O(N)
    Space Complexity: O(1)
*/
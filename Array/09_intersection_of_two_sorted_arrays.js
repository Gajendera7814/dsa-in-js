/*
    Intersection of two Sorted Arrays.
    <--------------------------------->

    Input: arr1 = [1, 2, 3, 3, 4, 5, 6],    arr2 = [3, 3, 5],  Output: [3, 3, 5]
    
    Input: arr1 = [1, 2, 2, 3, 3, 4, 5, 6],   arr2 = [2, 3, 3, 5, 6, 6, 7],   Output: [2, 3, 3, 5, 6]
*/

//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const interSection = (arr1, arr2) => {
    const ans = [];
    const visited = new Array(arr2.length).fill(0);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && visited[j] === 0) {
                ans.push(arr2[j]);
                visited[j] = 1;
                break;
            } else if (arr2[j] > arr1[i]) {
                break;
            }
        }
    }
    return ans;
};
let arr1 = [1, 2, 3, 3, 4, 5, 6, 7];
let arr2 = [3, 3, 4, 4, 5, 8];
console.log(interSection(arr1, arr2)); // Output: [ 3, 3, 4, 5 ]

/*
    Time Complexity: O(n1 x n2) ~ O(n^2)
    Space Complexity: O(n)
*/



//<<<<<<<<<<<<<-------------------------------- Two Pointer approach -------------------------------->>>>>>>>>>>>>//

const intersection = (arr1, arr2) => {
    const ans = [];
    let i = 0;
    let j = 0;
    let n1 = arr1.length;
    let n2 = arr2.length;

    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr1[i]) {
            j++;
        } else {
            ans.push(arr1[i]);
            i++;
            j++;
        }
    }
    return ans;
};
console.log(intersection([1, 2, 3, 3, 4, 5, 6], [3, 3, 5])); // Output: [ 3, 4, 5 ]

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/



//<<<<<<<<<<<<<-------------------------------- Two HashMap approach ------------------------------->>>>>>>>>>>>>//

const intersectUsingHashMap = (arr1, arr2) => {
    const map = {};
    const result = [];

    for (let num of arr1) {
        map[num] = (map[num] || 0) + 1;
    }

    for (let num of arr2) {
        if (map[num]) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
};
console.log(intersectUsingHashMap([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])); // Output: [ 2, 3, 3, 5, 6 ]

/*
    Time Complexity: O(n + m)
    Space Complexity: O(n), to store the elements of the first array in the hash map.
*/



//<<<<<<<<<<<<<---------------------------- Two Binary Search approach --------------------------->>>>>>>>>>>>>//

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) {
            return true;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;   
        }
    }
    return false;
};

const intersectUsingBinarySearch = (arr1, arr2) => {
    const result = [];

    for (let num of arr1) {
        if (binarySearch(arr2, num)) {
            result.push(num);
        }
    }
    return result;
};
console.log(intersectUsingBinarySearch([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])); // Output: [ 2, 2, 3, 3, 5, 6 ]

/*
    Time Complexity: O(n log m)
    Space Complexity: O(1)
*/



//<<<<<<<<<<<<----------------------------- BY Using Set Intersection ----------------------------->>>>>>>>>>>>//

const intersectUsingSet = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const result = [];

    for (let num of arr2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num);
        }
    }
    return result;
};
console.log(intersectUsingSet([1, 2, 3, 3, 4, 5, 6], [3, 3, 5])); // Output: [ 3, 5 ]

/*
    Time Complexity: O(n + m)
    Space Complexity: O(n), for storing elements of arr1 in a set.
*/

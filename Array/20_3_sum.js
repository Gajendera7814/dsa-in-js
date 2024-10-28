/*
    3 Sum : Find triplets that add up to a zero
    <----------------------------------------->

    Given an array nums, find all unique triplets [nums[i], nums[j], nums[k]] such that:
        - i != j != k
        - nums[i] + nums[j] + nums[k] == 0

    Input : [-1, 0, 1, 2, -1, -4],  Output : [ [-1, -1, 2], [-1, 0, 1] ]
*/

//<<<<<<<<<<<<<-------------------------------------- Brute Force Approach -------------------------------------->>>>>>>>>>>>>//

const threeSum = (arr) => {
    let n = arr.length;
    let st = new Set();
    let ans = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    let temp = [arr[i], arr[j], arr[k]];
                    temp.sort((a, b) => a - b);
                    ans.push(temp);
                }
            }
        }
    };
    let set = new Set(ans.map(JSON.stringify));
    return Array.from(set).map(JSON.parse);
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]

/*
    Time Complexity: O(N3 * log(no. of unique triplets));
    Space Complexity: O(2 * no. of the unique triplets);
*/





//<<<<<<<<<<<<<-------------------------------- Better Approach (Using Hashing) --------------------------------->>>>>>>>>>>>>//

/*
    Algorithm : The steps are as follows
        - First, we will declare a set data structure as we want unique triplets.
        - Then we will use the first loop(say i) that will run from 0 to n - 1.
        - Inside it, there will be the second loop(say j) that will run from i + 1 to n - 1.
        - Before the second loop, we will declare another HashSet to store the array elements as we intend to search for
            the third element using this HashSet.
        - Inside the second loop, we will calculate the value of the third element i.e. - (arr[i] + arr[j]).
        - If the third element exists in the HashSet, we will sort these 3 values i.e. arr[i], arr[j], and the third element,
          and insert it in the set data structure declared in step 1.
        - After that, we will insert the j-th element i.e. arr[j] in the HashSet as we only want to insert those array
          elements that are in between indices i and j.
        - Finally, we will return a list of triplets stored in the set data structure.
*/

const threeSumUsingHashing = (arr) => {
    let n = arr.length;
    let st = new Set();
    let ans = [];

    for (let i = 0; i < n; i++) {
        let hashset = new Set();
        
        for (let j = i + 1; j < n; j++) {
            let third = - (arr[i] + arr[j]);

            if (hashset.has(third)) {
                let temp = [arr[i], arr[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp);
            }
            hashset.add(arr[j]);
        }
    }
    let set = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);
    return ans;
}
console.log(threeSumUsingHashing([-1, 0, 1, 2, -1, -4]));

/*
    Time Complexity: O(N2 * log(no. of unique triplets));
    Space Complexity: O(2 * no. of the unique triplets) + O(N);
*/




//<<<<<<<<<<<<<---------------------------------------- Using 2 - Pointer --------------------------------------->>>>>>>>>>>>>//

const threeSumUsingTwoPointer = (arr) => {
    let n = arr.length;
    let ans = [];
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        // Remove duplicates
        if (i !== 0 && arr[i] === arr[i - 1]) continue;
        
        // Moving 2 pointers
        let j = i + 1;
        let k = n - 1;
    
        while (j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                let temp = [arr[i], arr[j], arr[k]];
                ans.push(temp);
                j++;
                k--;

                // Skip the duplicates
                while (j < k && arr[j] === arr[j - 1]) j++;
                while (j < k && arr[k] === arr[k + 1]) k--;
            }
        }
    }
    return ans;
};
console.log(threeSumUsingTwoPointer([-1, 0, 1, 2, -1, -4])); // Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

/*
    Time Complexity: O(NlogN) + O(N2)
    
    Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately 
    N times including the operation of skipping duplicates. So the total time complexity will be O(N2).
    
    Space Complexity: O(1)
*/
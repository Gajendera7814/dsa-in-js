/*
    Product of Array Except Self    Leetcode Problem
    <--------------------------->   <--------------->

    Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the 
    elements of nums except nums[i].

    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    You must write an algorithm that runs in O(n) time and without using the division operation.


    Input: [1, 2, 3, 4],    Output: [24, 12, 8, 6]

    Input: [-1, 1, 0, -3, 3],    Output: [0, 0, 9, 0, 0]
*/


/*
    <---------------------------------------- Prefix and Suffix Products -------------------------------------------->

        - Calculate prefix products for all elements.
        - Calculate suffix products for all elements.
        - Multiply prefix and suffix products to get the result.
*/

const productExceptSelf = (nums) => {
    const n = nums.length;
    const prefix = new Array(n).fill(1);
    const suffix = new Array(n).fill(1);
    const result = new Array(n);

    /*<--------- Calculate prefix products ------------>*/
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    /*<--------- Calculate suffix products ------------->*/
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    /*<------------- Calculate result ------------------>*/
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]


/*
    Time Complexity: O(n)
    Space Complexity: O(n) (for prefix and suffix arrays)
*/






/*
    <----------------------------------- Optimized Prefix-Suffix (Constant Space) ---------------------------------->

    Instead of maintaining separate prefix and suffix arrays, you can calculate the prefix product on the fly and 
    combine it with a running suffix product.
*/


const productExceptSelfUsingPrefixSuffix = (nums) => {
    const n = nums.length;
    const result = new Array(n).fill(1);

    /*<---------- Calculate prefix products directly into result -------->*/
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    /*<--------- Multiply suffix products directly into result ----------->*/
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    /*<----------------------- Normalize -0 to 0 ------------------------->*/
    return result.map((val) => (Object.is(val, -0) ? 0 : val));
};
console.log(productExceptSelfUsingPrefixSuffix([-1, 1, 0, -3, 3])); // Output: [ 0, 0, 9, 0, 0 ]


/*
    Time Complexity: O(n)
    Space Complexity: O(1) (ignoring the output array)
*/






/*
    <----------------------------------- Using Division (If Division is Allowed) ----------------------------------->

    If the array contains no zeroes, you can calculate the total product of the array and divide by the current 
    element to get the result
*/

const productExceptSelfUsingDivision = (nums) => {
    const totalProduct = nums.reduce((prod, num) => prod * num, 1);
    return nums.map(num => totalProduct / num);
};
console.log(productExceptSelfUsingDivision([1, 2, 3, 4, 5])); // Output: [ 120, 60, 40, 30, 24 ]


/*
    Time Complexity: O(n)
    Space Complexity: O(1)

    Note: This approach fails if there are zeros in the array.
*/
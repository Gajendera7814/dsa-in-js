/*
    Reverse Integer     Leetcode Problem
    <-------------->    <--------------->

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go 
    outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1 :-

        Input: x = 123
        Output: 321

    Example 2 :-

        Input: x = -123
        Output: -321

    Example 3 :-

        Input: x = 120
        Output: 21
*/

/*<---------------------------------------- Convert to String and Reverse ------------------------------------------>*/

const reverseStringApproach = (x) => {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
        return 0;
    }

    return reversed;
};
console.log(reverseStringApproach(123)); // Output: 321
console.log(reverseStringApproach(-123)); // Output: -321
console.log(reverseStringApproach(120)); // Output: 21




/*<------------------------------------------- Mathematical Reversal ---------------------------------------------->*/

const reverseMathApproach = (x) => {
    let result = 0;
    const sign = Math.sign(x);
    x = Math.abs(x);

    while (x > 0) {
        const digit = x % 10; // Extract the last digit
        result = result * 10 + digit; // Append the digit to the result
        x = Math.floor(x / 10); // Remove the last digit
    }

    result *= sign;

    if (result < -(2 ** 31) || result > (2 ** 31) - 1) {
        return 0;
    }

    return result;
};
console.log(reverseMathApproach(123)); // Output: 321
console.log(reverseMathApproach(-123)); // Output: -321
console.log(reverseMathApproach(120)); // Output: 21




/*<-------------------------------------------- Recursive Approach ------------------------------------------------>*/

const reverseRecursive = (x) => {
    const reverseHelper = (num, rev = 0) => {
        if (num === 0) return rev;

        return reverseHelper(Math.floor(num / 10), rev * 10 + (num % 10));
    };

    const reversed = reverseHelper(Math.abs(x)) * Math.sign(x);

    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) {
        return 0;
    }

    return reversed;
};
console.log(reverseRecursive(123)); // Output: 321
console.log(reverseRecursive(-123)); // Output: -321
console.log(reverseRecursive(120)); // Output: 21




/*<-------------------------------------------- Using Array Reduce ------------------------------------------------>*/

var reverseArrayReduce = function(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reduce((acc, digit) => digit + acc, '')) * sign;

    if (reversed < -(2 ** 31) || reversed > (2 ** 31) - 1) return 0;

    return reversed;
};
console.log(reverseArrayReduce(123)); // Output: 321
console.log(reverseArrayReduce(-123)); // Output: -321
console.log(reverseArrayReduce(120)); // Output: 21




/*<--------------------------------------- Iterative Digit Extraction -------------------------------------------->*/

var reverseIterative = function(x) {
    let result = 0;
    const sign = Math.sign(x);
    x = Math.abs(x);

    while (x !== 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);

        if (result > (2 ** 31 - 1) / 10) return 0;

        result = result * 10 + digit;
    }

    return result * sign;
};
console.log(reverseIterative(123)); // Output: 321
console.log(reverseIterative(-123)); // Output: -321
console.log(reverseIterative(120)); // Output: 21

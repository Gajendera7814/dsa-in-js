/*
    Happy Number    Leetcode Problem
    <----------->   <--------------->

    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    - Starting with any positive integer, replace the number by the sum of the squares of its digits.

    - Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does 
    not include 1.
    
    - Those numbers for which this process ends in 1 are happy.
    
    Return true if n is a happy number, and false if not.

    Input: n = 19,  Output: true

    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1

    Input: n = 2,   Output: false
*/


/*<------------------------------------- Using a Hash Table to Detect Cycles --------------------------------------->*/

const isHappy = (n) => {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
};

const sumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
};
console.log(isHappy(19)); // true
console.log(isHappy(2));  // false

/*
    Time Complexity: O(logn)
    Space Complexity: O(logn)
*/




/*<------------------------------------------- Mathematical Analysis ----------------------------------------------->*/

const isHappy2 = (n) => {
    while (n !== 1 && n !== 4) {
        n = sumOfSquares(n);
    }
    return n === 1;
};

const sumOfSquares2 = (num) => {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
};
console.log(isHappy2(19)); // true
console.log(isHappy2(2));  // false

/*
    Time Complexity: O(logn)
    Space Complexity: O(1)
*/

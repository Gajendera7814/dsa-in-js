/*
    First Unique Character in a String   Leetcode Problem
    <-------------------------------->   <--------------->

    Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

    Example 1:

        Input: s = "leetcode"
        Output: 0

        Explanation: The character 'l' at index 0 is the first character that does not occur at any other index.

    Example 2:

        Input: s = "loveleetcode"
        Output: 2

    Example 3:

        Input: s = "aabb"
        Output: -1
*/

/*<----------------------------------------------- Using a Hash Table -------------------------------------------------*/

const firstUniqueCharHashTable = (s) => {
    const charCount = {};

    /*<----------- Count frequencies ---------->*/
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    /*<----------- Find the first unique character ---------->*/
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};
console.log(firstUniqueCharHashTable("leetcode")); // Output: 0
console.log(firstUniqueCharHashTable("loveleetcode")); // Output: 2
console.log(firstUniqueCharHashTable("aabb")); // Output: -1

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/



/*<------------------------------------------- Using String Manipulation ---------------------------------------------*/

const firstUniqueCharString = (s) => {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};
console.log(firstUniqueCharString("leetcode")); // Output: 0
console.log(firstUniqueCharString("loveleetcode")); // Output: 2
console.log(firstUniqueCharString("aabb")); // Output: -1

/*
    Time Complexity: O(n2)
    Space Complexity: O(1)
*/



/*<------------------------------------------------- Using Queue -----------------------------------------------------*/

const firstUniqueCharQueue = (s) => {
    const charCount = {};
    const queue = [];

    /*<------------- Count frequencies and populate queue -------------->*/
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
        queue.push([char, i]);
    }

    /*<--------- Process the queue to find the first unique character --------->*/
    while (queue.length) {
        const [char, index] = queue.shift();
        if (charCount[char] === 1) {
            return index;
        }
    }

    return -1;
};
console.log(firstUniqueCharQueue("leetcode")); // Output: 0
console.log(firstUniqueCharQueue("loveleetcode")); // Output: 2
console.log(firstUniqueCharQueue("aabb")); // Output: -1

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/



/*<----------------------------------------- Using Counting (Two Pass) ----------------------------------------------*/

const firstUniqueCharCounting = (s) => {
    const counts = new Array(26).fill(0); /* Array to store frequencies for 'a' to 'z' */
    const aCharCode = 'a'.charCodeAt(0);

    /*<----- First pass: count frequencies ------>*/
    for (const char of s) {
        counts[char.charCodeAt(0) - aCharCode]++;
    }

    /*<----- Second pass: find the first unique character ------>*/
    for (let i = 0; i < s.length; i++) {
        if (counts[s[i].charCodeAt(0) - aCharCode] === 1) {
            return i;
        }
    }

    return -1;
};
console.log(firstUniqueCharCounting("leetcode")); // Output: 0
console.log(firstUniqueCharCounting("loveleetcode")); // Output: 2
console.log(firstUniqueCharCounting("aabb")); // Output: -1

/*
    Time Complexity: O(n)
    Space Complexity: O(1)
*/
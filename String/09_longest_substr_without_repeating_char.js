/*
    Longest Substring Without Repeating Characters.     Leetcode Problem
    <--------------------------------------------->     <--------------->

    Input: s = "abcabcbb",  Output: 3

    Explanation: The answer is "abc", with the length of 3.


    Input: s = "abcabcbb",  Output: 3
    
    Explanation: The answer is "abc", with the length of 3.


    Input: s = "pwwkew",  Output: 3

    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*<----------------------------------- Hash Table and Sliding Window Approach ------------------------------------->*/

/*
    Use a hash table to store characters and their last index.
    Maintain a sliding window using two pointers (start and end).
    Adjust the window size when a repeating character is encountered.
*/

const lengthOfLongestSubstring = (s) => {
    let map = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

/*
    Time Complexity: O(n), Each character is visited once.
    Space Complexity: O(n), Space used by the hash table
*/





/*<------------------------------------------ String with Nested Loops ------------------------------------------->*/

const lengthLongestSubstring = (s) => {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let seen = new Set();
        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) break;
            seen.add(s[j]);
        }
        maxLength = Math.max(maxLength, seen.size);
    }

    return maxLength;
};
console.log(lengthLongestSubstring("pwwkew")); // Output: 3

/*
    Time Complexity: O(n²), Outer loop runs n times, and the inner loop runs up to n times.
    Space Complexity: O(n), Space used by the set.
*/
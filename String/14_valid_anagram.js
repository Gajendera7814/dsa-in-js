/*
    Valid Anagram     Leetcode Problem
    <------------>    <--------------->
    
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Input: s = "anagram", t = "nagaram",    Output: true


    Input: s = "rat", t = "car",    Output: false
*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = {};

    // Count characters in string `s`
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts using string `t`
    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

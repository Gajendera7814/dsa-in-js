/*
    Valid Anagram     Leetcode Problem
    <------------>    <--------------->
    
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    Input: s = "anagram", t = "nagaram",    Output: true


    Input: s = "rat", t = "car",    Output: false
*/

/*<----------------------------------------- Using Hash Table ----------------------------------------------------->*/

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
};
console.log(isAnagram("anagram", "nagaram")); // Output: true
console.log(isAnagram("rat", "car")); // Output: false

/*
    Time Complexity: O(n)
    Space Complexity: O(1) 
*/



/*<-------------------------------------------- Using Sorting ----------------------------------------------------->*/

const isAnagramUsingSorting = (s, t) => {
    if (s.length !== t.length) return false;

    return s.split('').sort().join('') === t.split('').sort().join('');
};
console.log(isAnagramUsingSorting("anagram", "nagaram")); // Output: true
console.log(isAnagramUsingSorting("rat", "car")); // Output: false

/*
    Time Complexity: O(nlogn) (due to sorting)
    Space Complexity: O(1)
*/




/*<-------------------------------------------- Using Sorting ----------------------------------------------------->*/

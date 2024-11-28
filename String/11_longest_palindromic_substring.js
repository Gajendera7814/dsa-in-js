/*
    Longest Palindromic Substring       Leetcode Problem
    <---------------------------->      <--------------->

    Asked in interview


    Given a string s, return the longest palindromic substring in s.

    Input: s = "babad",   Output: "bab"
    
    Explanation: "aba" is also a valid answer.

    Input: s = "cbbd",   Output: "bb"
*/


/*<----------------------------------------- String (Brute Force) ------------------------------------------------->*/

const longestPalindromeBruteForce = (s) => {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.substring(i, j + 1);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }

    return longest;
};

const isPalindrome = (str) => {
    let left = 0, right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(longestPalindromeBruteForce("babad")); // Output: "bab"

/*
    Time Complexity: O(n3) (Generate all substrings O(n2), check if palindrome O(n))
    Space Complexity: O(1) (No extra space)
*/





/*<----------------------------------- Two Pointers (Expand Around Center) ---------------------------------------->*/

const longestPalindromeExpandAroundCenter = (s) => {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandFromCenter(s, i, i);      // Odd length palindromes
        const len2 = expandFromCenter(s, i, i + 1);  // Even length palindromes
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

const expandFromCenter = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
};

console.log(longestPalindromeExpandAroundCenter("cbbd")); // Output: "bb"

/*
    Time Complexity: O(n2) (Expanding around each center for all characters)
    Space Complexity: O(1) (No extra space used apart from variables)
*/
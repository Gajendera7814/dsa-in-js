/*
    Valid Palindrome    Leetcode Problem
    <--------------->   <--------------->

    Topics :- Two Pointers and String
    **********************************

    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
    non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.


    Input: s = "A man, a plan, a canal: Panama"
    Output: true

    Explanation: "amanaplanacanalpanama" is a palindrome.


    Input: s = "race a car"
    Output: false

    Explanation: "raceacar" is not a palindrome.


    Input: s = " "
    Output: true

    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.
*/


//<<<<<<<<<<<<<<--------------------------------- two pointers + set -------------------------------->>>>>>>>>>>>>>>//

const isPalindrome = (s) => {
    // 1. Create a set to look up characters.
    const set = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    // 2. Create a helper function that returns a boolean value.
    const isAlphaNumeric = (char) => {
        return set.has(char);
    };

    // 3. Convert the input string to lowercase.
    const str = s.toLowerCase();

    // 4. Initialize pointers.
    let left = 0;
    let right = str.length - 1;

    // 5. Check only the left and right halves.
    while (left < right) {
        // 5-1. If it's not an alphanumeric value, skip it.
        // Example: , ! ? " "
        while (left < right && !isAlphaNumeric(str[left])) {
            left++;
        }
        // 5-2. If it's not an alphanumeric value, skip it.
        while (left < right && !isAlphaNumeric(str[right])) {
            right--;
        }
        // 6. Once they are facing alphanumeric values, check if they are the same. If not, return false.
        if (str[left] !== str[right]) return false;

        // Move pointers.
        left++;
        right--;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true

/*
    Time complexity: O(n)
    Space complexity: O(1)
*/




//<<<<<<<<<<<<<<----------------------------------- Using set only ---------------------------------->>>>>>>>>>>>>>>//

const isPalindromeUsingSet = (s) => {
    const alphNum = new Set("0123456789abcdefghijklmnopqrstuvwxyz");

    const possible_pal = s.toLowerCase().split("").filter((char) => alphNum.has(char));

    return possible_pal.join() === possible_pal.reverse().join("");
};
console.log(isPalindromeUsingSet("race a car"));

/*
    Time complexity: O(n)
    Space complexity: O(n)
*/



//<<<<<<<<<<<<<<--------------------------------- Using two pointers -------------------------------->>>>>>>>>>>>>>>//

const isPalindromeUsingPointer = (s) => {
    const stripString = (string) => {
        return string.replace(/[^A-Z0-9]+/gi, "").toUpperCase();
    };
    
    let str = stripString(s);
    
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        let leftChar = str[left];
        let rightChar = str[right];
        
        // If the characters are the same, move the pointers. Otherwise, return false (the string is not a palindrome).
        if (leftChar === rightChar) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
console.log(isPalindromeUsingPointer(" ")); // Output: true

/*
    Time complexity: O(n)
    Space complexity: O(n)
*/
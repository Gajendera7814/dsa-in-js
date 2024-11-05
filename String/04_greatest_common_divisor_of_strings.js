/*
    Greatest Common Divisor of Strings      Leetcode Problem
    <--------------------------------->    <---------------->

    Topics :- Math and String

    Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

    Input: str1 = "ABCABC", str2 = "ABC",  Output: "ABC"


    Input: str1 = "ABABAB", str2 = "ABAB",  Output: "AB"


    Input: str1 = "LEET", str2 = "CODE",  Output: ""


    To solve the "Greatest Common Divisor of Strings" problem, we need to find the largest string X that can 
    divide both given strings str1 and str2. In other words, if X is the GCD of str1 and str2, then both str1 
    and str2 should be constructed by repeating X multiple times.
*/

//<<<<<<<<<<<<--------------------------------- Brute Force Approach ---------------------------------->>>>>>>>>>>>>>>//

const gcdOfStrings = (str1, str2) => {
    const minLength = Math.min(str1.length, str2.length);

    for (let i = minLength; i > 0; i--) {
        const candidate = str1.slice(0, i);

        if (str1.length % candidate.length === 0 && str2.length % candidate.length === 0) {
            if (str1.split(candidate).join('') === '' && str2.split(candidate).join('') === '') {
                return candidate;
            }
        }
    }
    return "";
};
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"

/*
    Time Complexity: O(n + m), where n is the length of str1 and 𝑚 is the length of str2.

    Space Complexity: O(1).
*/




//<<<<<<<<<<<<--------------------------------- Using GCD of Lengths --------------------------------->>>>>>>>>>>>>>>//

const UsingGCDOfStrings = (str1, str2) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Check if str1 + str2 is the same as str2 + str1
    if (str1 + str2 !== str2 + str1) return "";

    // GCD of lengths of str1 and str2
    const gcdLength = gcd(str1.length, str2.length);

    // The substring of the first gcdLength characters of str1 is the result
    return str1.slice(0, gcdLength);
};
console.log(UsingGCDOfStrings("ABABAB", "ABAB"));

/*
    Time Complexity: O(n + m), where n is the length of str1 and m is the length of str2.
    Space Complexity: O(1), since we only use a few variables and the GCD function.
*/

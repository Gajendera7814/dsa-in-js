/*
    Merge Strings Alternately     Leetcode Problem
    <------------------------>    <--------------->

    You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, 
    starting with word1. If a string is longer than the other, append the additional letters onto the end 
    of the merged string.

    Return the merged string.


    Input: word1 = "abc",   word2 = "pqr",   Output: "apbqcr"

    Explanation: The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r


    Input: word1 = "ab",    word2 = "pqrs",    Output: "apbqrs"

    Explanation: Notice that as word2 is longer, "rs" is appended to the end.
    word1:  a   b 
    word2:    p   q   r   s
    merged: a p b q   r   s


    Input: word1 = "abcd",   word2 = "pq",    Output: "apbqcd"
    
    Explanation: Notice that as word1 is longer, "cd" is appended to the end.
    word1:  a   b   c   d
    word2:    p   q 
    merged: a p b q c   d
*/


/*<-------------------------------------------- Two Pointers ------------------------------------------------------->*

    - Use two pointers (i and j) to track the current index in word1 and word2.
    - Add characters from word1 and word2 alternately to the result array.
    - Continue until both strings are fully traversed.

*/

const mergeAlternatelyUsingPointer = (word1, word2) => {
    let i = 0, j = 0;
    let result = [];

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result.push(word1[i]);
            i++;
        }
        if (j < word2.length) {
            result.push(word2[j]);
            j++;
        }
    }

    return result.join('');
};
console.log(mergeAlternatelyUsingPointer("abc", "pqr")); // Output: "apbqcr"

/*
    Time Complexity: O(n + m), Uses an array for intermediate storage before joining.
    Space Complexity: O(n + m)
*/




/*<---------------------------------------- Using Strings Directly ------------------------------------------------->*

    - Calculate the maximum length of the two strings.
    - Loop through indices from 0 to the maximum length.
    - At each step, append characters from both strings if the current index is within their bounds.

*/

const mergeAlternately = (word1, word2) => {
    let result = "";
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
    }

    return result;
};
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"

/*
    Time Complexity: O(n + m)
    - Directly appends to a string, more concise but potentially slower due to string concatenation overhead.
    
    Space Complexity: O(1)
*/
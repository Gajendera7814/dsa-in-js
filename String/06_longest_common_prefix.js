/*
    Longest Common Prefix    Leetcode Problem
    <-------------------->   <--------------->

    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Input: strs = ["flower", "flow", "flight"]
    Output: "fl"

    Input: strs = ["dog", "racecar", "car"]
    Output: ""
*/

/*<-------------------------------------------- Vertical Scanning Approach --------------------------------------------*/

/*
    In this approach, we iterate through each character of the first string, then check if this character is present at 
    the same position in all other strings.
*/

const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

/*
    Time Complexity: O(S), where S is the sum of all characters in all strings.
    Space Complexity: O(1) because no additional space proportional to input size is used.
*/




/*<------------------------------------------ Horizontal Scanning Approach ------------------------------------------*/

/*
    In this approach, we assume the first string is the longest common prefix and compare it with each following string, 
    updating the prefix each time until no more matches are found.
*/

const longestCommonPrefixHorizontal = (strs) => {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};
console.log(longestCommonPrefixHorizontal(["god", "goat", "good"])); // Output: "go"

/*
    Time Complexity: O(S), where S is the sum of all characters in all strings.
    Space Complexity: O(1).
*/




/*<------------------------------------------ Divide and Conquer Approach ------------------------------------------*/

/*
    In this approach, we divide the array into two halves and recursively find the longest common prefix of each half. 
    Then, we combine the results to find the longest common prefix.
*/

const longestCommonPrefixDivideConquer = (strs) => {
    if (strs.length === 0) return "";

    const commonPrefix = (left, right) => {
        const minLength = Math.min(left.length, right.length);
        for (let i = 0; i < minLength; i++) {
            if (left[i] !== right[i]) {
                return left.substring(0, i);
            }
        }
        return left.substring(0, minLength);
    };

    const longestCommonPrefixRec = (strs, l, r) => {
        if (l === r) {
            return strs[l];
        }
        
        const mid = Math.floor((l + r) / 2);
        const leftPrefix = longestCommonPrefixRec(strs, l, mid);
        const rightPrefix = longestCommonPrefixRec(strs, mid + 1, r);
        
        return commonPrefix(leftPrefix, rightPrefix);
    };

    return longestCommonPrefixRec(strs, 0, strs.length - 1);
};
console.log(longestCommonPrefixDivideConquer(["flower", "flow", "flight"])); // Output: "fl"

/*
    Time Complexity: O(S), 
    
    - where S is the sum of all characters in all strings. Each comparison takes O(m) time where m is the minimum string length.

    Space Complexity: O(m * log n)
    
    - due to the recursive stack, where m is the minimum length of strings and n is the number of strings.
*/

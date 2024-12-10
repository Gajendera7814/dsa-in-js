/*
    Group Anagrams      Leetcode Problem
    <------------->     <--------------->

    Given an array of strings strs, group the anagrams together. You can return the answer in any order.

    Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

    Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]


    Input: strs = [""],  Output: [[""]]

    Input: strs = ["a"],  Output: [["a"]]
*/


/*<----------------------------------------------- Using Sorting --------------------------------------------------->*/

const groupAnagrams = (words) => {
    const map = new Map();

    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }

    return Array.from(map.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
    Time Complexity: O(n⋅klogk)
    Space Complexity: O(n⋅k)
*/
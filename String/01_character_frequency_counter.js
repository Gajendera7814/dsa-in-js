/*
    Character Frequency Counter
    <------------------------->

    Input: "Gajendera",    Output: { G: 1, a: 2, j: 1, e: 2, n: 1, d: 1, r: 1 }
*/


//<<<<<<<<<<<<<---------------------- Using a Hash Map (Object in JavaScript) -------------------->>>>>>>>>>>>>>>//

const charFrequency = (str) => {
    const frequency = {};
    
    for (let char of str) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
    
    return frequency;
};
console.log(charFrequency("Gajendera")); // Output: { G: 1, a: 2, j: 1, e: 2, n: 1, d: 1, r: 1 }

/*
    Time Complexity: O(n)
    Space Complexity: O(k), k is the number of unique characters in the string. 
*/




//<<<<<<<<<<<<<------------------------------------ Using forEach --------------------------------->>>>>>>>>>>>>>>//

const charFrequencyForEach = (str) => {
    let freqCounter = {};

    str.split('').forEach(char => {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    });

    return freqCounter;
};
console.log(charFrequencyForEach("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


//<<<<<<<<<<<<<------------------------------------ Using reduce --------------------------------->>>>>>>>>>>>>>>//

const charFrequencyReduce = (str) => {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
};
console.log(charFrequencyReduce("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }


//<<<<<<<<<<<<<-------------------------------------- Using map ---------------------------------->>>>>>>>>>>>>>>//

const charFrequencyReduceMap = (str) => {
    return str.split('').reduce((acc, char) => {
        acc.set(char, (acc.get(char) || 0) + 1);
        return acc;
    }, new Map());
};
console.log(charFrequencyReduceMap("school")); // Output: Map(5) { 's' => 1, 'c' => 1, 'h' => 1, 'o' => 2, 'l' => 1 }


/*
    Time Complexity: O(n)
    Space Complexity: O(k)
*/

/*
    Implement Your chunk (arr, size)

    Input: chunk([1, 2, 3, 4, 5], 1),   Output: [[1], [2], [3], [4], [5]]

    Input: chunk([1, 2, 3, 4, 5], 2),   Output: [[1, 2], [3, 4], [5]]

    Input: chunk([1, 2, 3, 4, 5], 3),   Output: [[1, 2, 3], [4, 5]]

    Input: chunk([1, 2, 3, 4, 5], 5),   Output: [[1, 2, 3, 4, 5]]
*/

/*<-------------------------------------------- Iterative Approach ------------------------------------------------>*/

const chunk = (arr, size) => {
    let result = [];
    let currentChunk = [];

    for (let i = 0; i < arr.length; i++) {
        currentChunk.push(arr[i]);

        if (currentChunk.length === size || i === arr.length - 1) {
            result.push(currentChunk);
            currentChunk = [];
        }
    }

    return result;
};
console.log(chunk([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunk([1, 2, 3, 4, 5], 5)); // [[1, 2, 3, 4, 5]]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/




/*<-------------------------------------------- Slicing Approach ------------------------------------------------->*/

const chunkUsingSlice = (arr, size) => {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};
console.log(chunkUsingSlice([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunkUsingSlice([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkUsingSlice([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkUsingSlice([1, 2, 3, 4, 5], 5)); // [[1, 2, 3, 4, 5]]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/





/*<--------------------------------------------- Using Recursion ------------------------------------------------->*/

const chunkUsingRecursion = (arr, size) => {
    if (arr.length === 0) return [];
    return [arr.slice(0, size)].concat(chunk(arr.slice(size), size));
};
console.log(chunkUsingRecursion([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunkUsingRecursion([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkUsingRecursion([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkUsingRecursion([1, 2, 3, 4, 5], 5)); // [[1, 2, 3, 4, 5]]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/





/*<-------------------------------------------- Using a While Loop ------------------------------------------------>*/

const chunkUsingLoop = (arr, size) => {
    let result = [];
    let index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }

    return result;
};
console.log(chunkUsingLoop([1, 2, 3, 4, 5], 1)); // [[1], [2], [3], [4], [5]]
console.log(chunkUsingLoop([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkUsingLoop([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkUsingLoop([1, 2, 3, 4, 5], 5)); // [[1, 2, 3, 4, 5]]

/*
    Time Complexity: O(n)
    Space Complexity: O(n)
*/







const chunk1 = (arr, size) => {
    if (size > arr.length) {
        return [arr];
    }

    let count = Math.ceil(arr.length/size), result = [], startIndex = 0;

    for(let i = 0; i < count; i ++) {
        result.push(arr.splice(startIndex, size));
    }
    return result;
};
console.log(chunk1([6, 7, 8, 9, 10, 11, 12], 3)); // Output: [ [ 6, 7, 8 ], [ 9, 10, 11 ], [ 12 ] ]




const chunk2 = (arr, size) => {
    const result = [];
    
    for(let i=0; i< arr.length / size; i++){
        const chunked = arr.slice(i * size, (i+ 1) * size)
        result.push(chunked);
        
    }
    return result;
};
console.log(chunk2([11, 12, 13, 14, 15, 16], 4)); // Output: [ [ 11, 12, 13, 14 ], [ 15, 16 ] ]
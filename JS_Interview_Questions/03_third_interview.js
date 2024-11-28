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




/*<----------------------------------------- Create a debounce function ----------------------------------------->*/

/*
    What is Debouncing?

    Debouncing ensures that a function (e.g., print) is executed only once after a specified delay (e.g., 1000ms), 
    even if it is triggered multiple times in quick succession. This is particularly useful in scenarios like:

        - Search bar input handling
        - Window resizing events
        - Button click throttling

    How the Code Works:
        1. Timer Management :-
            - A timeoutId variable is maintained to store the reference of the active timer.
            - Every time the debounced function is invoked, the current timer (if any) is cleared using clearTimeout.

        2. Delayed Execution :-
            - A new setTimeout is created. The original function (func) will only execute after the specified delay if no 
            new calls interrupt this timer.

        3. Final Output :-
            - When the debounced function is called rapidly (e.g., multiple keystrokes in a search bar), only the last 
            invocation triggers the function after the delay.

    Example Walkthrough :-
        - debouncedPrint('i') starts a timer.
        - debouncedPrint('iP') clears the previous timer and starts a new one.
        - This repeats until debouncedPrint('iPhone').
        - After 1 second of no new calls, the print('iPhone') function executes.

    Use Cases :-
        1. Search Input :-
            - Avoid making API calls for every keystroke in a search bar.
        2. Window Resize :-
            - Prevent performance issues by executing resize-related logic after resizing stops.
        3. Button Clicks:
            - Avoid duplicate API requests when a button is clicked multiple times rapidly.
*/

const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
        // Clear the previous timer
        clearTimeout(timeoutId);

        // Set a new timer
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const print = (data) => {
    console.log(data);
};

// Create a debounced version of the print function
const debouncedPrint = debounce(print, 1000);

// Simulate rapid function calls
debouncedPrint('i');
debouncedPrint('iP');
debouncedPrint('iPh');
debouncedPrint('iPho');
debouncedPrint('iPhon');
debouncedPrint('iPhone');

// Output: iPhone (after 1 second delay from the last call)





/*<------------------------- Create a count function ----------------------------->*/

/*
    count() // 1
    count() // 2
    count() // 3

    count.reset()

    count() // 1
    count() // 2
    count() // 3
*/

const count = (() => {
    let counter = 0
    function inner() {
        counter++; // Increment counter
        return counter;
    }

    inner.reset = function () {
        counter = 0; // Reset counter
    };

    return inner;
})();

// Usage
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset(); // Reset the counter

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

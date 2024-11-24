
/*<---------------------- 1. Output Based Questions -------------------------->*/

console.log("A");

setTimeout(() => {
    console.log("B");
});

["C", "D"].forEach((x) => {
    console.log(x);
});

console.log("E");

/*
    Output:- A, C, D, E, B
*/



/*<---------------------- 2. Output Based Questions -------------------------->*/

const obj = [
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 2",
        data: "Data2"
    },
    {
        key: "Sample 1",
        data: "Data1"
    },
    {
        key: "Sample 3",
        data: "Data1"
    },
    {
        key: "Sample 4",
        data: "Data1"
    },
];

const output = {};

obj.forEach((item) => {
    if(output[item.key]){
        // key is available
        output[item.key].push(item);
    } else {
        output[item.key] = [item];
    }
});
console.log(output);

/*
    Output = {
        'Sample 1': [
            { key: 'Sample 1', data: 'Data1' },
            { key: 'Sample 1', data: 'Data1' },
            { key: 'Sample 1', data: 'Data1' }
        ],
        'Sample 2': [ { key: 'Sample 2', data: 'Data2' } ],
        'Sample 3': [ { key: 'Sample 3', data: 'Data1' } ],
        'Sample 4': [ { key: 'Sample 4', data: 'Data1' } ]
    }
*/


/*<--------------------- 3. Memoization in JavaScript ------------------------>*/

/*
    What is Memoization in JavaScript ?

        Memoization is an optimization technique that stores the results of expensive function calls and reuses 
        those results when the same inputs are provided. In simple terms, it "remembers" the output for specific 
        inputs to save time when the function is called again with the same arguments.

    Key Features of Memoization -
        1. Caching Results: Memoization stores the results of function calls in a cache (a data structure like an object or Map).
        2. Avoids Redundant Work: If a function is called with inputs already in the cache, the stored result is returned instead of recomputing it.
        3. Pure Functions: Works best with pure functions, which produce the same output for the same input without side effects.

    Steps in Memoization -
        1. Create a Cache:- Use an object or Map to store input-output pairs.
        2. Check Cache:- Before calling the function, check if the input already exists in the cache.
        3. Store Results:- If the input is not in the cache, calculate the result and store it.
        4. Return Cached Result:- If the input exists in the cache, return the cached result instead of recalculating.
*/

const memoize = (fn) => {
    const cache = new Map();

    return (...args) => {
        const key = JSON.stringify(args); // Create a unique key from arguments

        if (cache.has(key)) {
            console.log('Returning from cache:', key);
            return cache.get(key);
        }

        console.log('Calculating result for:', key);
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in the cache
        return result;
    };
};
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); // Calculating result for [1,2]: 3
console.log(memoizedAdd(1, 2)); // Returning from cache for [1,2]: 3
console.log(memoizedAdd(2, 3)); // Calculating result for [2,3]: 5




/*<--------------------- 4. flattenArray in JavaScript ----------------------->*/

/*<------ By using recursive call. ------>*/

const flattenArray = (a, flattenArr) => {
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === 'number'){
            flattenArr.push(a[i]);
        } else {
            flattenArray(a[i], flattenArr);
        }
    }
    return flattenArr;
};
const a = [1, 2, 3, [4, [5, 6]], 7, 8];
const result = flattenArray(a, []);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]



const flattenArray2 = (arr, flattenArr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten the array
            flattenArray2(arr[i], flattenArr);
        } else {
            // Push non-array elements directly
            flattenArr.push(arr[i]);
        }
    }
    return flattenArr;
};
console.log(flattenArray2([1, 2, 3, { test: "key" }, [4, [5, 6]], 7, 8], []));

// Output: [1, 2, 3, { test: "key" }, 4, 5, 6, 7, 8]

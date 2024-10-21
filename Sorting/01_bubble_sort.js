/*
    Bubble Sort
    <---------->

    Input: [36, 19, 28, 12, 5],    Output: [5, 12, 19, 28, 36]

    Round - 1

    --> [36, 19, 28, 12, 5], (swap (36, 19))
        --------
    --> [19, 36, 28, 12, 5], (swap (36, 28))
            -------
    --> [19, 28, 36, 12, 5], (swap (36, 12))
                --------
    --> [19, 28, 12, 36, 5], (swap (36, 5))
                    -------
    --> [19, 28, 12, 5, 36]

    Round - 2

    --> [19, 28, 12, 5, 36], (No swap)
        --------
    --> [19, 28, 12, 5, 36], (swap (28, 12))
            --------
    --> [19, 12, 28, 5, 36], (swap (28, 5))
                -------
    --> [19, 12, 5, 28, 36]

    Round - 3

    --> [19, 12, 5, 28, 36], (swap (19, 12))
        --------
    --> [12, 19, 5, 28, 36], (swap (19, 5))
            -------
    --> [12, 5, 19, 28, 36]

    Round - 4

    --> [12, 5, 19, 28, 36], (swap (12, 5))
        -------
    --> [5, 12, 19, 28, 36]

    Output: [5, 12, 19, 28, 36]

*/

/*
    No of round = total length - 1

    J < arr.length - 1 - i (i because last element is not compair in each round)
*/

const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSort([36, 19, 28, 12, 5])); // Output: [ 5, 12, 19, 28, 36 ]
  
/*
    Time Complexity = O(n^2)
    Space Complexity = O(1)
*/
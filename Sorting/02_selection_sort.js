/*
    Selection Sort
    <------------>

    The selection sort is a combination of searching and sorting.

    Selection Sort is a comparison-based sorting algorithm. It sorts an array by repeatedly selecting the 
    smallest (or largest) element from the unsorted portion and putting it at the beginning.

    Input: [38, 52, 9, 18, 6, 62, 13],  Output: [6, 9, 13, 18, 38, 52, 62]


    --> [38, 52, 9, 18, 6, 62, 13] (1st small ele is = 6  (38 <-----> 6) interchange to each other)
        ----           ----
    --> [6, 52,  9, 18, 38, 62, 13] (2nd small ele is = 9  (52 <-----> 9) interchange to each other)
            --- ---
    --> [6, 9, 52, 18, 38, 62, 13] (3rd small ele is = 13 (52 <-----> 9) interchange to each other)
              ----            ----
    --> [6, 9, 13, 18, 38, 62, 52] (4th small ele is = 18 No need to interchange)
                   ---
    --> [6, 9, 13, 18, 38, 62, 52] (5th small ele is = 38 No need to interchange)
                      ----
    --> [6, 9, 13, 18, 38, 62, 52] (6th small ele is = 52 (52 <-----> 62) interchange to each other)
                           --- ---
    --> [6, 9, 13, 18, 38, 52, 62]

    Output: [6, 9, 13, 18, 38, 62, 52]
*/

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};
console.log(selectionSort([38, 52, 9, 18, 6, 62, 13]));

/*
    Time Complexity = O(n^2)
    Space Complexity = O(1)
*/
/*
    Insertion Sort
    <------------->

    Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. we choose one card
    and insert it in its position (ascending or descending).

    working of insertion sort :-

    1. we start by making the second element of the given array, i.e element at index 1, the key.

    2. we compair the key element with the element before it, in this case element at index 0.

        - if the key element is less than the first element, we insert the key element before the first element.

        - if the key element is greater than the first element, than we insert it after the first element.

    3. we make the third element at the array as key and will compair it with element to it's left and insert it at the right position.

    4. And we go on repeating this, untill the array is sorted.


    Input: [5, 1, 6, 2, 4, 3],  Output: [1, 2, 3, 4, 5, 6]

    --> [5, | 1, 6, 2, 4, 3] (check 1 is correct position or not, not correct position than put at index 0).
            ----
    --> [1, 5, | 6, 2, 4, 3] (check 6 is correct position or not, correct position than no need to arrange it).
               ----
    --> [1, 5, 6, | 2, 4, 3] (check 2 is correct position or not, not correct position than put at index 1).
                   ----
    --> [1, 2, 5, 6, | 4, 3] (check 4 is correct position or not, not correct position than put at index 2).
                     ----
    --> [1, 2, 4, 5, 6, | 3] (check 3 is correct position or not, not correct position than put at index 2).

    --> [1, 2, 3, 4, 5, 6]


    Output: [1, 2, 3, 4, 5, 6]
*/

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};
console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

/*
    Time Complexity = O(n^2)
    Space Complexity = O(1)
*/
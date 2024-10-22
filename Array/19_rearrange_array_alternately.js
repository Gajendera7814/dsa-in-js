/*
    Rearrange Array Alternately || Alternate High-Low Rearrangement
    <-------------------------------------------------------------->

    Input: [1, 2, 3, 4, 5, 6],  Output: [6, 1, 5, 2, 4, 3]
*/

const rearrangeArray = (arr) => {
    let newArr = [];
    let n = Math.floor(arr.length / 2);
    let j = 0;
  
    for (let i = arr.length - 1; i >= n; i--) {
        newArr.push(arr[i]);

        if (j < i) {
            newArr.push(arr[j]);
        }
        j++;
    }
    return newArr;
};
console.log(rearrangeArray([1, 2, 3, 4, 5])); // Output: [5, 1, 4, 2, 3]
console.log(rearrangeArray([1, 2, 3, 4, 5, 6])); // Output: [6, 1, 5, 2, 4, 3]
  
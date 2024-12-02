/*
    Spiral Matrix      Leetcode Problem
    <------------>     <--------------->

    Given an m x n matrix, return all elements of the matrix in spiral order.


    Input: matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
    
    [
        [1, ---> 2, ---> 3],

        [4, ---> 5,      6],
        
        [7, <--- 8, <--- 9]
    ]


    Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


    Input: matrix = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ]
    
    [ 
        [1,  2,  3,  4], 
        
        [5,  6,  7,  8], 
        
        [9, 10, 11, 12] 
    
    ]
    
    Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
*/
 
/*<------------------------------------------- Simulation Approach ------------------------------------------------->*/

const spiralTraversal = (matrix) => {
    if (!matrix.length || !matrix[0].length) return [];

    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        /*<---- Traverse from left to right ---->*/
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        /*<---- Traverse from top to bottom ---->*/
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        /*<---- Traverse from right to left ---->*/
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        /*<---- Traverse from bottom to top ---->*/
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    };
    return result;
};
console.log(spiralTraversal([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]));

/*
    Time Complexity: O(m × n), Each element in the matrix is visited once.
    Space Complexity: O(1), Output array does not count as additional space.
*/
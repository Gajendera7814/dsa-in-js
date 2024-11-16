/*
    Rotate Image     Leetcode Problem
    <----------->    <--------------->

    You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

    You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
    DO NOT allocate another 2D matrix and do the rotation.

    Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

    Input:-

    [
        [ 1,     2,     3 ], 
        [ 4,     5,     6 ], 
        [ 7,     8,     9 ]
    ]

    Output:-

    [
        [ 7,     4,      1 ], 
        [ 8,     5,      2 ], 
        [ 9,     6,      3 ]
    ]


    Input: matrix = [ [5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16] ]

    Output: [ [15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11] ]

    Input:-

    [ 
        [5,     1,      9,      11], 
        [2,     4,      8,      10], 
        [13,    3,      6,      7], 
        [15,    14,     12,     16] 
    ]

    Output:- 

    [ 
        [15,    13,     2,      5], 
        [14,    3,      4,      1], 
        [12,    6,      8,      9], 
        [16,    7,      10,     11] 
    ]
*/

/*<---------------------------------- Transpose and Reverse (In-Place) ------------------------------------------>*/

const rotateInPlace = (matrix) => {
    const n = matrix.length;

    /*<----------------------- Transpose the matrix ----------------------->*/
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    /*<------------------------- Reverse each row ------------------------>*/

    for (let row of matrix) {
        row.reverse();
    }

    return matrix;
};
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateInPlace(matrix)); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

/*
    Time Complexity: O(n2)
    Space Complexity: O(1)
*/




/*<--------------------------------------- Layer-by-Layer Rotation --------------------------------------------->*/

/*
    Algorithm:
    
    1. Divide the matrix into layers, from outermost to innermost.
    2. Rotate each layer element by element:
        - Save the top element.
        - Move the left element to the top.
        - Move the bottom element to the left.
        - Move the right element to the bottom.
        - Move the saved top element to the right.
*/

const rotateLayerByLayer = (matrix) => {
    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            const offset = i - first;

            // Save top
            const top = matrix[first][i];

            // Move left to top
            matrix[first][i] = matrix[last - offset][first];

            // Move bottom to left
            matrix[last - offset][first] = matrix[last][last - offset];

            // Move right to bottom
            matrix[last][last - offset] = matrix[i][last];

            // Assign saved top to right
            matrix[i][last] = top;
        }
    }

    return matrix;
};
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotateLayerByLayer(matrix2)); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

/*
    Time Complexity: O(n2)
    Space Complexity: O(1)
*/




/*<-------------------------------------- Using a Temporary Matrix ------------------------------------------>*/

/*
    Algorithm:
    
    - Create a new matrix of the same size.
    - For each cell in the original matrix, place it in the appropriate position in the new matrix: 
        result[j][n − i − 1] = matrix[i][j].
*/

const rotateUsingNewMatrix = (matrix) => {
    const n = matrix.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][n - i - 1] = matrix[i][j];
        }
    }

    /*<------------- Copy result back to the original matrix -------------->*/
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = result[i][j];
        }
    }

    return matrix;
};
const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateUsingNewMatrix(matrix3)); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

/*
    Time Complexity: O(n2)
    Space Complexity: O(n2)
*/




/*<---------------------------------------- Mathematical Formula -------------------------------------------->*/

/*
    Algorithm:
    
    - For each cell matrix[i][j], move it directly to its new position matrix[j][n − i − 1].
    - Use a temporary variable for swapping.
*/

const rotateMath = (matrix) => {
    const n = matrix.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - i - 1; j++) {
            // Save top-left
            const temp = matrix[i][j];

            // Rotate clockwise
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = temp;
        }
    }

    return matrix;
};
const matrix4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateMath(matrix4)); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

/*
    Time Complexity: O(n2)
    Space Complexity: O(1)
*/

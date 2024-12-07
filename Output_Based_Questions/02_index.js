
/*<------------------------------------------------- Problem - 11 --------------------------------------------------->*/

let arr1 = [1, 2, 3]; // Primitive types
let arr2 = arr1.slice(); // Shallow copy of arr1

arr2[0] = 10;
console.log(arr1); // Output: [1, 2, 3] (unchanged)
console.log(arr2); // Output: [10, 2, 3] (independent copy)



let array1 = [{ a: 1 }, [2, 3], 4]; // Array contains an object and a nested array
let array2 = array1.slice(); // Shallow copy of arr1

array2[0].a = 99;
array2[1][0] = 88;

console.log(array1); // Output: [{ a: 99 }, [88, 3], 4], Changes to objects and nested arrays reflect in arr1 because their references were copied.
console.log(array2); // Output: [{ a: 99 }, [88, 3], 4], arr2 also shows the changes, as they share the same references for objects/nested arrays.



let arrA = [1, 0];
let arrB = arrA;
arrB[0] = 42;
console.log(arrA); // Output: [ 42, 0 ]
console.log(arrB); // Output: [ 42, 0 ]

/*
    Key Points :-

    1. The slice() method :-
        - When you use arr1.slice(), it creates a new array that contains the same elements as arr1.
        - The new array (arr2) does not share a reference to the original array (arr1).

    2. Shallow copy :-
        - A shallow copy means the elements of the array are copied by value for primitive types (like numbers, strings, etc.).
        - If the array contains objects or arrays, their references are copied, but the objects themselves are not duplicated.

    3. Independent update: 
        - After creating arr2 with slice(), modifying arr2[0] (setting it to 20) does not affect arr1 because they are two 
        separate arrays.
        - Hence, when you log arr1, its contents remain unchanged: [1, 2].
*/



/*<------------------------------------------------- Problem - 12 --------------------------------------------------->*/

let objA = { prop1: 42 };
let objB = objA;
objB = {};
console.log(objA); // Output: { prop1: 42 }
console.log(objB); // Output: {}

let obj1 = { prop1: 42 };
let obj2 = obj1;
obj2.prop1 = 100; // Modify the shared object
console.log(obj1); // Output: { prop1: 100 }
console.log(obj2); // Output: { prop1: 100 }

/*
Key Concepts :-

1. Objects are assigned by reference :-
   - When objB = objA is executed, "objB" holds a reference to the same object that "objA" points to. They are not separate 
   objects at this point; both "objA" and "objB" reference the same memory location.

2. Reassigning a variable does not affect the original reference :-
   - When you reassign objB = {}, you’re changing what "objB" points to. Now, "objB" points to a new, empty object, but 
   this does not affect "objA". "objA" still points to the original object ({ prop1: 42 }).
*/



/*<------------------------------------------------- Problem - 13 --------------------------------------------------->*/

let str1 = "Gajendera";
let str2 = str1;
str2 = "Kumar";
console.log(str1); // Output: Gajendera
console.log(str2); // Output: Kumar

/*
    - In JavaScript, strings (like other primitive types) are immutable and stored by value. When you assign a string 
    to a variable, the variable holds the actual value, not a reference to a memory location (unlike objects or arrays).
*/



/*<------------------------------------------------- Problem - 14 --------------------------------------------------->*/

console.log([1, 2] + ![]); // Output: "1,2false"


console.log([] == []); // Output: false


let a = [1];
let b = [2];
console.log(a + b); // Output: "1,2"


console.log(3 + 4 + "5") // Output: "75"


let x = 10 > 9 > 8;
console.log(x === true); // Output: false
console.log(true == false); // Output: false


Y = 10;
var X = 1 + Y;
console.log(X); // Output: 11

/*
    Step-by-Step Explanation :-

    1. Evaluate "![]" :-
        - In JavaScript, an empty array "[]" is a "truthy value".
        - The "!" (logical NOT) operator negates this, converting "[]" to "false".
        - Therefore, "![]" evaluates to "false".

    2. Convert [1, 2] to a string :-
        - When you use the "+"" operator between an array and a non-numeric value (like "false"), JavaScript converts the 
        array to a string.

        - For arrays, the ".toString()" method is called, which joins the array elements with commas.
        - "[1, 2].toString()" results in the string "1,2".

    3. Concatenate the string and "false" :-
        - After converting "[1, 2"] to "1,2" and evaluating "![]" to "false", the "+" operator performs string concatenation:
        - "1,2" + "false" results in the string "1,2false".

    4. Final Output :- console.log([1, 2] + ![]); // Output: "1,2false"
*/



/*<------------------------------------------------- Problem - 15 --------------------------------------------------->*/

function data() {
    let m = n = 5;
    console.log(m) // Output: 5;
};
data();
console.log(n); // Output: 5
// console.log(m); // Output: ReferenceError: m is not defined

/*
    - When you assign a value to a variable without declaring it (e.g., n = 5), JavaScript (in non-strict mode) creates 
    a global variable.

    - Variables declared with let are block-scoped, meaning they are only accessible within the block, function, or 
    loop in which they are declared.
*/



/*<------------------------------------------------- Problem - 16 --------------------------------------------------->*/

const Array = [1, 2, 3];
const string = "1,2,3";
console.log(Array == string); // Output: true
console.log(Array === string); // Output: false

/*
    Step-by-Step Explanation :-

    Array == string

    - The "==" operator in JavaScript performs "type coercion". This means it attempts to convert the operands to a common 
    type before comparing them.

    - How the comparison works :-
        1. "Array" is an array ("[1, 2, 3]"), and when an array is compared to a string, JavaScript converts the array to a 
        string using its ".toString()" method.

        2. The ".toString()" method for an array joins its elements with commas: [1, 2, 3].toString(); // "1,2,3"
        3. Now the comparison becomes: "1,2,3" == "1,2,3"
        4. Since the two strings are identical, the result is "true".
*/


/*<------------------------------------------------- Problem - 17 --------------------------------------------------->*/

let newList = [1].push(2);
// console.log(newList.push(3)); // Output: TypeError: newList.push is not a function



let newList2 = [4];
let length = newList2.push(5); // length is 2, arr becomes [4, 5]

console.log(length); // Output: 2
console.log(newList2); // Output: [4, 5]


/*
    Step-by-Step Explanation :-

    1. What does "[1].push(2)" do ?
        - The "push" method adds an element to the end of an array and "returns the new length of the array", not the array itself.
        - In this case: let result = [1].push(2); // result is 2
        - The array "[1]" becomes "[1, 2]", but the value of "result" is "2" (the new length of the array).

    2. Assigning the return value to "newList" :-
        let newList = [1].push(2);
        - After this line, "newList" is not an array. It is the number "2" (the return value of "push").

    3. Attempting to call "push" on "newList" :- newList.push(3);
        - Since "newList" is a number ("2"), it does not have a "push" method.
        - This results in a "TypeError" because JavaScript tries to call "".push()' on a number, which is not valid.


    Key Concepts :-

    1. Return Value of "push" :-
        - The "push" method returns the new length of the array, not the array itself.

    2. Understanding Chaining :-
        - You cannot chain "push" directly if you assign its return value to a variable, as the variable will hold a number, not an array.
*/


/*<------------------------------------------------- Problem - 18 --------------------------------------------------->*/

const newObj = { name: "Leptop" };
const newArr = ["Mobile"];
newObj[newArr] = "Mac Book";

console.log(newObj); // Output: { name: 'Leptop', Mobile: 'Mac Book' }
console.log(newObj.name); // Output: Leptop


const Obj = {};
const Arrays = ["key"];
Obj[Arrays] = "value"; // Equivalent to obj["key"] = "value";
console.log(Obj); // Output: { key: "value" }

const Array2 = ["a", "b"];
Obj[Array2] = "another value"; // Equivalent to obj["a,b"] = "another value";

console.log(Obj); // Output: { key: "value", "a,b": "another value" }


/*
    Step-by-Step Explanation :-

    1. Understanding "newArr": const newArr = ["Mobile"];
        - "newArr" is an array containing one string element: "Mobile".
        - Arrays in JavaScript can be converted to strings using their ".toString()" method. 
        - So, when "newArr" is used as a property key, it is automatically converted to the string "Mobile".

    2. Adding a property to "newObj" :-
        newObj[newArr] = "Mac Book";
        - "newArr" is used as a property key, and it is converted to the string "Mobile".
        - This is equivalent to: newObj["Mobile"] = "Mac Book";
        - Now, "newObj" looks like this:
            {
            name: "Leptop",
            Mobile: "Mac Book"
            }

    3. Accessing "newObj.name" :- console.log(newObj.name);
        - The property "name" was declared earlier in the object as "Leptop". 
        - It is unaffected by the addition of the "Mobile" property, so "newObj.name "still holds the value "Leptop".

        Final Output:
            1. newObj.name → "Leptop" (existing property in the object)
            2. If you log "newObj.Mobile", it will output "Mac Book".


    Key Concepts :-

        1. Property Keys in Objects :-
            - Property keys in JavaScript objects are always strings or symbols.
            - If a non-string value (like an array) is used as a key, JavaScript converts it to a string using ".toString()".

        2. Arrays as Keys :-
            - Arrays are converted to strings by joining their elements with commas:
                ["Mobile"].toString(); // "Mobile"
                ["a", "b", "c"].toString(); // "a,b,c"
*/

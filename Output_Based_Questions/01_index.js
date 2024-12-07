
/*<-------------------------------------------------- Problem - 1 ---------------------------------------------------->*/

const name = "Gajendera Kumar";
age = 26;

console.log(delete name); // Output: false
console.log(delete age); // Output: true

/*
    Reason -
    
    In JavaScript, the behavior of the delete operator depends on the type of the property being deleted and its context.

    Implicit global variables: If a variable is created without a keyword, it becomes a configurable property of the 
    global object and can be deleted.
*/



/*<-------------------------------------------------- Problem - 2 ---------------------------------------------------->*/

var obj1 = { 
    name: "Gajendera",
    age: 26
};
var obj2 = obj1;
obj2 = {};
console.log(obj1); // Output: { name: 'Gajendera', age: 26 }


let newObj = { 
    role: "web development",
    exp: 2
};
let newObj2 = newObj;
newObj2.role = "mobile development";
console.log(newObj); // Output: { role: 'mobile development', exp: 2 }
console.log(newObj2); // Output: { role: 'mobile development', exp: 2 }

/*
    In Case 1, obj2 is reassigned to a new object ({}). This doesn't affect obj1 because reassignment breaks the 
    link between obj2 and the original object.

    In Case 2, the object itself is mutated (its role property is changed). Since newObj and newObj2 reference 
    the same object, the change is visible through both variables.
*/



/*<-------------------------------------------------- Problem - 3 ---------------------------------------------------->*/

let str1 = "hello";
str2 = str1;
str2 = "world";
console.log(str1); // Output: hello
console.log(str2); // Output: world

/*
    The behavior is due to the difference between primitive values and objects in JavaScript. Strings are immutable 
    primitives, and assignment creates a copy of the value.
*/



/*<-------------------------------------------------- Problem - 4 ---------------------------------------------------->*/

const sum = (a = 5, b = 7) => {
    console.log(a + b);
};
sum(null, 20);

/*
    The function sum is called with the arguments null and 20.

    a = null:

    - The first argument is explicitly passed as null.
    - Since null is a valid value, it overrides the default value of a = 5. Thus, a becomes null.
    
    b = 20:

    - The second argument is explicitly passed as 20.
    - This overrides the default value of b = 7. Thus, b becomes 20.

    console.log(a + b);

    - a + b evaluates to null + 20.
    - In JavaScript, when null is used in a numeric operation, it is coerced to 0.
    - Therefore, null + 20 becomes 0 + 20, which evaluates to 20.
*/



/*<-------------------------------------------------- Problem - 5 ---------------------------------------------------->*/

const timer = setTimeout(() => {
    console.log("welcome");
}, 0);
clearTimeout(timer);

/*
    setTimeout with a 0ms delay:

    - A delay of 0 milliseconds does not mean "execute immediately." The callback is placed in the task queue and will 
    be executed after the current execution context and other higher-priority tasks are completed.

    clearTimeout:

    - If clearTimeout is called with the timer ID before the scheduled callback executes, the callback is canceled and 
    will not run.

    The "welcome" message will not be logged because the timer was cleared before the callback could run.
*/



/*<-------------------------------------------------- Problem - 6 ---------------------------------------------------->*/

const x = NaN;
const y = NaN;
console.log(x === y); // Output: false

/*
    1. Both x and y are assigned the value NaN.

    2. When comparing x and y with ===:
        - JavaScript checks whether the two values are strictly equal.
        - Since NaN is not equal to any value, including itself, the result is false.
*/



/*<-------------------------------------------------- Problem - 7 ---------------------------------------------------->*/

let person = { name: "Bihar" };
const members = [person];
person = null;

console.log(person); // Output: null
console.log(members); // Output: [ { name: 'Bihar' } ]



/*<-------------------------------------------------- Problem - 8 ---------------------------------------------------->*/

let str = "Hello Google";
str.length = 0;
console.log(str.length); // Output: 12


let string = "Bye";
string[0] = "b";
console.log(string); // Output: Bye



/*<-------------------------------------------------- Problem - 9 ---------------------------------------------------->*/

const X = [];
X[4] = 1;

console.log(X); // Output: [ <4 empty items>, 1 ]
console.log(X.length); // Output: 5

X.forEach((i) => {
    console.log("Bangalore") // Output: "Bangalore"
});

/*
    Key Points:

        1. Sparse Arrays :- 
            When you assign a value to a non-existent index, JavaScript creates a sparse array, leaving all intermediate 
            indices as "empty slots."
            
            Example:
                const arr = [];
                arr[4] = "value";
                console.log(arr); // [ <4 empty items>, 'value' ]

        2. forEach and Sparse Arrays :-

            - The forEach method skips empty slots in sparse arrays.
            - Only defined elements are processed.

        3. Other Iteration Methods:

            - Unlike forEach, a for loop iterates over all indices, even empty slots.
*/

const Y = [];
Y[4] = 1;

console.log(Y); // Output: [ <4 empty items>, 1 ]
console.log(Y.length); // Output: 5

for(let i = 0; i < Y.length; i++){
    console.log("I Love India");
};

/*  Output Print - 5 times
    I Love India
    I Love India
    I Love India
    I Love India
    I Love India
*/



/*<------------------------------------------------- Problem - 10 --------------------------------------------------->*/

let Person = {
    name: "Ram",
    hello: function () {
        console.log(this.name);
    }
};

/*<---- Calling as a method on the object ---->*/
Person.hello(); // Output: "Ram"

/*<---- Assigning to a standalone variable ---->*/
let greet = Person.hello;
greet(); // Output: undefined


/*
    Key Concepts :-

        1. Value of this:

            - The value of this is determined by how the function is called.
            - When a method is called on an object (e.g., Person.hello()), this refers to the object on which the 
            method is called.
        
        2. Dot Notation:

            - When using Person.hello(), the Person object is the context for the method, so this refers to Person.
        
        3. Contrast with Standalone Function Call:

            - If the method is assigned to another variable and invoked, this will no longer refer to Person.
*/